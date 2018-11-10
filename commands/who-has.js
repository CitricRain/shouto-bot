const Discord = require('discord.js');

exports.run = (bot, message, args) => {
        let roleName = message.content.split(" ").slice(1).join(" ");
    
        //Filtering the guild members only keeping those with the role
        //Then mapping the filtered array to their usernames
        let membersWithRole = message.guild.members.filter(member => { 
            return member.roles.find("name", roleName);
        }).map(member => {
            return member.user.username;
        })
    
        let roleEmbed = new Discord.RichEmbed()
            .setTitle(`Users with the '${roleName}' role`)
            .setDescription(membersWithRole.join("\n"),)
            .setColor("#87e7ff")
    
    
        return message.channel.send(roleEmbed);
    

};
module.exports.help = {
    name: "who-has"
}