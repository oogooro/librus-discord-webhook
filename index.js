const Discord = require('discord.js');
const tokens = require('./tokens.json');
const hook = new Discord.WebhookClient(tokens.webhookid, tokens.webhooktoken);
const Librus = require('librus-api');
const chalk = require('chalk');

const lang = require('./lang/english.json'); // './lang/polish.json' if you want polish language

function messageResolve(id) {
    client.inbox.getMessage(5, id).then(msg => {
        console.log(chalk.cyanBright(lang.sending));
        hook.send(new Discord.MessageEmbed()
        .setColor('RANDOM') // Embed color
        .setDescription(msg.content)
        .setTitle(msg.title)
        .setFooter(msg.user)
        .setTimestamp(msg.date)
        .setURL(`https://synergia.librus.pl/${msg.url}`))
            .catch(err => { return console.log(chalk.redBright(`Error! ${err}`)); }); // hook.send catch

    }).catch(err => { return console.log(chalk.redBright(`Error! ${err}`)); }); // getMessage catch
}

let client = new Librus();
setInterval(() => {
    client.authorize(tokens.lubruslogin, tokens.libruspass).then(() => {
        console.log(chalk.yellowBright(lang.finding));
        client.inbox.listInbox(5).then(data => {
            data.slice(0, 10).forEach(element => {
                if (element.read === false) messageResolve(element.id), console.log(chalk.greenBright(lang.found + element.id));
            });
        });
    }).catch(err => { console.log(chalk.redBright(`Error! ${err}`)); }); // authorize catch
}, 30000);