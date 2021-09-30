const Discord = require("discord.js");

module.exports = {
    name: 'chien',
    description: 'Bon toutout !',
    execute(message) {

        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Bon Toutou')
        .setImage('https://media.discordapp.net/attachments/854840063988203570/878686790830137425/O4fDZSB8.png'))
    },

}