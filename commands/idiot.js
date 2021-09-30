const Discord = require("discord.js");

module.exports = {
    name: 'idiot',
    description: 'Idiot !',
    execute(message) {

        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Gnnnnn')
        .setImage('https://media.discordapp.net/attachments/854840063988203570/878720430473633862/137059-full.png'))
    },

}