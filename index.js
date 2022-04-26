const { Client, Intents, GuildManager, MessageEmbed } = require('discord.js');

const config = require('./config.json');
const API_KEY = (config.API_KEY) ? config.API_KEY : process.env.DISCORD_BOT;

if (!API_KEY) {
    console.log (
        'You have not set an API KEY.\n' +
        'Add a Discord API key to your enviroment variables.\n' +
        'Alternatively, you can add it to your config for testing purposes.'
    );
    process.exit(9);
}

// Create a new client instance
var intents = [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES];
const client = new Client({ intents: intents });

client.on("ready", () => { client.user.setActivity('and logging..', { type: 'WATCHING' }); });

client.on("voiceStateUpdate", (old, curr) => {
    if (old.channelId != curr.channelId) {
        if (old.channelId != null && curr.channelId != null) {
            const channel = client.channels.cache.get(config.log);
            if (!channel) { return; }
            curr.guild.fetchAuditLogs({
                limit: 1,
                type: 'MEMBER_MOVE'
            }).then(
                (audit) => {
                    if (audit) {
                        userExec = audit.entries.first().executor
                        userMoved = client.users.cache.get(curr.id)
                        if (audit.entries.first().action != "MEMBER_MOVE" || audit.entries.first().targetType != "USER" || userExec.bot) { return; }
                        if (curr.id != userExec.id) {
                            const message = new MessageEmbed()
                                .setColor("#f40552")
                                .setAuthor({
                                    name: `${userExec.username}#${userExec.discriminator}`,
                                    iconURL: userExec.avatarURL()
                                })
                                .setDescription(`**${userMoved} سحب ${userExec}**`)
                                .setTimestamp()
                                .setFooter({
                                    text: curr.guild.name,
                                    iconURL: curr.guild.iconURL()
                                });
                            channel.send({ embeds: [message] });
                        }
                    }
                }
            );
        }
    }
});

client.login(API_KEY);