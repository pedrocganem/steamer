const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })
const dotenv = require('dotenv').config()
// const SteamSalesService = require('./services/SteamSalesService')

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
  })
  
  client.on("message", msg => {
    if (msg.content === "ping") {
      msg.reply("pong");
    }
  })
  
  client.login(process.env.TOKEN);


