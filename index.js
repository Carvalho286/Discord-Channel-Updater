const { Client } = require('discord.js');

const client = new Client({
  intents: [1 << 0, 1 << 1] // 1 << 0 represents GUILDS, 1 << 1 represents GUILD_MESSAGES
});

const token = 'bot_token_here';
const channelIDs = ['channelID_1', 'channelID_2', 'channelID_3', 'channelID_4','channelID_5'];
const symbol = '🔥';

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  channelIDs.forEach(channelID => {
    sendStartMessageToChannel(channelID);
  });
  scheduleMessages();
});

client.login(token);

function sendStartMessageToChannel(channelID) {
    const channel = client.channels.cache.get(channelID);
    channel.send("Começo da motirorização dos canais.")
    .then(message => {
        // Delete the message 10 seconds later
        setTimeout(() => {
        message.delete();
        }, 10000); // 10000 milliseconds = 10 seconds
    })
    .catch(console.error);
}

function sendSartMessagesToChannel() {
    channelIDs.forEach(channelID => {
        sendStartMessageToChannel(channelID);
    });
}

function sendSymbolToChannel(channelID) {
    const channel = client.channels.cache.get(channelID);
    channel.send(symbol)
    .then(message => {
        // Delete the message 5 seconds later
        setTimeout(() => {
        message.delete();
        }, 5000); // 5000 milliseconds = 5 seconds
    })
    .catch(console.error);
}

function sendSymbolsToChannels() {
channelIDs.forEach(channelID => {
    sendSymbolToChannel(channelID);
});
}

function scheduleMessages() {
// Send the symbol to the channels every 20 seconds
setInterval(sendSymbolsToChannels, 86400000); // 86400000 milliseconds = 24 hours
}
  

client.on('error', console.error);
