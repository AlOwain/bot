// -----------------------------
// -- B o i l e r   P l a t e --
// -----------------------------

const fs = require('node:fs');
const { Client, Intents } = require('discord.js');

const config = require('./config.json');
const API_KEY = (config.API_KEY) ? config.API_KEY : process.env.DISCORD_BOT;

if (!API_KEY) {
    console.log (
        'You have not set an API KEY.\n' +
        'Add a Discord API key to your enviroment variables.\n' +
        'Alternatively, you can add it to your config for testing purposes.'
    )
    process.exit(9)
}

// Create a new client instance
var intents = [Intents.FLAGS.GUILDS]
const client = new Client({ intents: intents });

client.once('ready', () => {console.log('Ready!')});

client.login(API_KEY);