const colors = require('colors');
const tokens = require('./tokens.json');
const https = require('https');
const Librus = require('librus-api');

function testFailed(why) {
    console.log('FAIL'.red.bold);
    console.log(why.red);
    return 1;
}

console.log('Testowanie...'.blue.bold);
console.log('Test hooka'.cyan);
if (!tokens.url) {
    return testFailed('Brak podanego url do webhooka');
}
try {
    https.get(tokens.url, res => {
        let data = '';
        res.on('data', rawData => {
            data += rawData;
        });
        res.once('end', _ => {
            const jsonData = JSON.parse(data);
            if (!jsonData.name) {
                return testFailed(jsonData.message);
            }

            console.log('OK'.green);
            console.log('Test Logowania do Librusa'.cyan);

            if (!tokens.login) {
                return testFailed('Brak loginu do Librusa');
            }

            if (!tokens.pass) {
                return testFailed('Brak hasła do Librusa');
            }

            const client = new Librus();
            client.authorize(tokens.login, tokens.pass).then(async () => {
                const info = await client.info.getAccountInfo();
                if (!info.account.login) return testFailed('Nie można się zalogować do Librusa');
                else {
                    console.log('OK'.green);
                    console.log('Test zakończony pomyślnie'.green.bold);
                }
            });
        });
    });
}
catch(err) {
    testFailed(err);
}

