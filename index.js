'use strict';

const tokens = require('./tokens.json');
const Discord = require('discord.js');

const hook = new Discord.WebhookClient({ url: tokens.webhookUrl }, {intents: []});

const Librus = require('librus-api');
const chalk = require('chalk');

const config = require('./config.json');
const lang = require(`./lang/lang_${config.lang}.json`);

const sendMessage = message => {
    console.log(chalk.cyanBright(lang.sending));
    const [ first, ...rest ] = message.content.match(/(.|[\r\n]){1,4000}/g);

    const embedTemplate = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(first)
        .setTitle(message.title)
        .setFooter(message.user)
        .setTimestamp(msg.date)
        .setURL(`https://synergia.librus.pl/${message.url}`)

    const embeds = [ embedTemplate ];

    rest?.forEach(text => embeds.push(embedTemplate.setDescription(text)));

    hook.send({ embeds }).catch(err => { return console.log(chalk.redBright(err)); });
}

const client = new Librus();
client.authorize(tokens.lubrusLogin, tokens.librusPass).then(async () => {
    const info = await client.info.getAccountInfo();
    if (!info.account.login) return console.log(chalk.redBright(lang.loginError));
    else console.log(chalk.greenBright(lang.loginSuccess));

    const fetchMessages = async () => {
        console.log(chalk.yellowBright(lang.searching));
        try {
            const messages = await client.inbox.listInbox(5);
            messages.slice(0, config.fetchMessageLimit).forEach(async message => {
                if (message.read === false) {
                    console.log(chalk.greenBright(lang.found + message.id));
                    const messageDetails = await client.inbox.getMessage(5, message.id);
                    sendMessage(messageDetails);
                }
            });
        } catch (err) {
            console.log(chalk.redBright(lang.msgError));
        }
        setTimeout(() => fetchMessages(), config.searchInterval);
    }
    fetchMessages();
});