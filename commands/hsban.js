module.exports = {
    name: 'hsban',
    description: "This command ban a member!",
    execute(message, args){

        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("User has been ban");
        }else{
            message.channel.send(`You coudn't ban that member!`);
        }
    }
}