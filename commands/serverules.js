const Discord = require("discord.js");


module.exports = {
    name: 'serverules',
    description: 'command !serverules',
    execute(message) {

        message.channel.send(new Discord.MessageEmbed()
            .setAuthor('Nitr0bot')
            .setTitle('**Hey ! Read this**')
            .addFields(
                { name: '1.', value: 'Le chef à tous les droits' },)
            .addFields(
                { name: '2.', value: 'En cas de litige, se référer à la règle n°1' },)
            .setFooter('Do you have a problem ? DM M3V3N#4756 or Nitr0z#5692')
            .setColor('RANDOM'))
    },

}