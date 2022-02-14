const prompts = require('prompts');
const colors = require('colors');
const fs = require('fs');

prompts([
    {
        type: 'text',
        name: 'login',
        message: 'Login do Librus Synergia',
        validate: value => value ? true : 'Proszę uzupełnić pole',
    },
    {
        type: 'password',
        name: 'pass',
        message: 'Hasło do Librus Synergia',
        validate: value => value ? true : 'Proszę uzupełnić pole',
    },
    {
        type: 'text',
        name: 'url',
        message: 'URL webhooka',
        validate: value => value.startsWith('https://discord.com/api/webhooks/') ? true : 'Proszę podać cały link do webhooka',
    },
]).then(response => {
    fs.writeFileSync('./tokens.json', JSON.stringify(response, null, 4));
});
