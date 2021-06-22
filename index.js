const Discord = require('discord.js');
const tokens = require('./tokens.json');
const hook = new Discord.WebhookClient(tokens.webhookid, tokens.webhooktoken);
const Librus = require('librus-api');
const chalk = require('chalk');
const cfg = require('./config.json');

const lang = require(`./lang/lang_${cfg.lang}.json`);

function messageResolve(id) {
    client.inbox.getMessage(5, id).then(msg => {
        console.log(chalk.cyanBright(lang.sending));

        const [first, ...rest] = msg.content.match(/(.|[\r\n]){1,2048}/g);

        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM') // Embed color
            .setDescription(first)
            .setTitle(msg.title)
            .setFooter(msg.user)
            .setTimestamp(msg.date)
            .setURL(`https://synergia.librus.pl/${msg.url}`);

        hook.send(embed).catch(err => { return console.log(chalk.redBright(`Error! ${err}`)); }); // hook.send catch
        if (!rest.length) return;

        rest.forEach(text => {
            embed.setDescription(text);
            hook.send(embed)
                .catch(err => { return console.log(chalk.redBright(`Error! ${err}`)); }); // hook.send catch
        });
    }).catch(err => { return console.log(chalk.redBright(`Error! ${err}`)); }); // getMessage catch
}

function findNewMessages(client) {
    client.authorize(tokens.lubruslogin, tokens.libruspass).then(() => {
        console.log(chalk.yellowBright(lang.finding));
        client.inbox.listInbox(5).then(data => {
            data.slice(0, cfg.fetchMessageLimit).forEach(element => {
                if (element.read === false) messageResolve(element.id), console.log(chalk.greenBright(lang.found + element.id));
            });
        });
        setTimeout(() => findNewMessages(client), cfg.searchInterval);
    }).catch(err => { console.log(chalk.redBright(`Error! ${err}`)); }); // authorize catch
}

let client = new Librus();
findNewMessages(client);