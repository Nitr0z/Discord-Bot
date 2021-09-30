const Discord = require("discord.js");

module.exports = {
    name: 'bretagne',
    description: "Yec'hed mat !",
    execute(message) {

        message.channel.send(new Discord.MessageEmbed()
        .setTitle("La Bretagne armoricaine rassemblez vous ! Les druides ont décidé de mener le combat dans la vallée ! Il est temps de défendre notre terre ! Yec'hed mat !")
        .setImage('https://media.discordapp.net/attachments/854840063988203570/863029194308714496/870x489_maxstockworld311054.jpg'))
    },

}