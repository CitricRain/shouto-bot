const Discord = require('discord.js');

exports.run = (bot, message, args) => {
        let roleName = message.content.split(" ").slice(1).join(" ");

        if(!roleName) return message.channel.send("What role? (Correct use: `s!who-has {role name}`")
    
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