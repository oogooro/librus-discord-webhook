# How to run
1. Copy all files to a new folder 
2. Type `npm i` in command prompt to install all required modules
3. Open and edit `tokens.json` file
4. Type `node .` in command prompt to run

# Configuration
You can change settings in `config.json` file
Webhook dosen't need any configuration other than entering tokens, but you can tweek some parameters

### Language (lang)
Available languages:
- `en` for english
- `pl` for polish

### Search Interval (searchInterval)
By changing the value you can change search interval in milliseconds (default 30000)
***DON'T SET IT LOWER THAN 10000***

### Message Limit (fetchMessageLimit)
By setting this value you can change how many new messages will be send (default 10)
This is how many messages sorted by new webhook will be working on every search cycle
You shouldn't set it lower than 3 but not higher than 20
