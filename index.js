const {Client, GatewayIntentBits, EmbedBuilder, PermissionBitField, Permissions} = require(`discord.js`);
require("dotenv").config();
const prefix = '!';
token = process.env.DISCORD_TOKEN;
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]})

client.on("ready", () => {
    console.log("Bot is online");
    client.user.setActivity('Flight bot is ready to help');
})

















client.login(token);