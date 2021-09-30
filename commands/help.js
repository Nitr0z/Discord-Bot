const Discord = require("discord.js");


module.exports = {
    name: 'help',
    description: 'command !help',
    execute(message) {
        message.channel.send(new Discord.MessageEmbed()
            .setAuthor('Nitr0bot')
            .setTitle('**Hey ! Do you need some help ?**')
            .setDescription('Please refer to this sheet')
            .addFields(
                { name: '!wizz @mate', value: 'The bot reply a random sentence and tag the @ person.' },)
            .addFields(
                { name: '!chien ', value: 'The bot reply a "Bon toutou" with a dog image' },)
            .addFields(
                { name: '!uwu ', value: 'The bot reply a "Can i get a uWu ?"' },)
            .addFields(
                { name: '!croisade ', value: 'The bot reply a croisade banner and sentance' },)
            .addFields(
                { name: '!bretagne ', value: 'The bot reply a French brittany banner and sentance' },)
            .addFields(
                { name: '!idiot ', value: 'The bot reply a idiot banner and sentance' },)
            .addFields(
                { name: '!ban @player', value: 'The bot ban a @ player' },)
            .addFields(
                { name: '!kick @player ', value: 'The bot kick a @ player' },)
            .setFooter('Any suggestions ? Please DM Nitr0z#5692')
            .setColor('RANDOM'))


    },

}