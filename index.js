const Discord = require("discord.js");
const client = new Discord.Client();
client.commands = new Discord.Collection();
require("dotenv").config();
const {prefix} = require("./config.json");
const fs = require('fs');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// début du code

client.on('ready', () => {
    console.log('Bot ok');
  });
  
  client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
  
      const args = message.content.slice(prefix.length).split(/ +/);
      const command = args.shift().toLowerCase();
  
      if (!client.commands.has(command)) return;
  
      try {
        client.commands.get(command).execute(message, args);
      } catch (error) {
        console.error(error);
        message.reply("Une erreur s'est produite pendant l'exécution de la commande !");
      }
  })

client.login(process.env.BOT_TOKEN);