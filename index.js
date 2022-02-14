'use strict';

const tokens = require('./tokens.json');
const Discord = require('discord.js');

const hook = new Discord.WebhookClient({ url: tokens.url }, {intents: []});

const Librus = require('librus-api');
const colors = require('colors');

const config = require('./config.json');
const strings = require('./strings.json');

const sendMessage = message => {
    console.log(strings.sending.cyan);
    const [ first, ...rest ] = message.content.match(/(.|[\r\n]){1,4000}/g);
    const color = Math.floor(Math.random() * 899999 + 100000);

    const embed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle(message.title)
        .setFooter(message.user)
        .setTimestamp(message.date)
        .setURL(`https://synergia.librus.pl/${message.url}`)
        .setDescription(first);

    hook.send({ embeds: [ embed ] }).then(console.log((strings.sentMessage + message.id).green)).catch(err => { return console.log(err.red); });
    rest?.forEach( text => hook.send( { embeds: [new Discord.MessageEmbed().setColor(color).setTitle(message.title).setFooter(message.user).setTimestamp().setURL(`https://synergia.librus.pl/${message.url}`).setDescription(text)] } ));
}

const client = new Librus();
client.authorize(tokens.login, tokens.pass).then(async () => {
    const info = await client.info.getAccountInfo();
    if (!info.account.login) return console.log(strings.loginError.red);
    else console.log(strings.loginSuccess.green);

    const fetchMessages = async () => {
        console.log(strings.searching.yellow);
        try {
            const messages = await client.inbox.listInbox(5);
            messages.slice(0, config.fetchMessageLimit).forEach(async message => {
                if (message.read === false) {
                    console.log((strings.found + message.id).green);
                    const messageDetails = await client.inbox.getMessage(5, message.id);
                    sendMessage(messageDetails);
                }
            });
        } catch (err) {
            console.log(strings.msgError.red);
        }
        setTimeout(() => fetchMessages(), config.searchInterval);
    }
    fetchMessages();
});