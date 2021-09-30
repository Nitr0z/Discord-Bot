const Discord = require("discord.js");

module.exports = {
    name: 'croisade',
    description: 'Mes fidèles regroupements ! Il est temps de parti en croisade !',
    execute(message) {

        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Mes fidèles, regroupements ! Il est temps de parti en croisade !')
        .setImage('https://media.discordapp.net/attachments/854840063988203570/859082244646502490/prise-jerusalem-croises-1099.jpg?width=1179&height=676'))
    },

}