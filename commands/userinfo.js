const Discord = require('discord.js');

exports.run = (bot, message, args) => { 
     
    let user = message.guild.member
    let iIcon = user.user.displayAvatarURL;
    let iEmbed = new Discord.RichEmbed()
    .setDescription("User Information")
    .setColor("#6dff77")
    .setTitle(`${user.user.tag} Info`)
    .addField("Discord Name", user.username)
    .addField("Discord Tag", `#${user.descriminator}`)
    .addField("Joined On", user.createdAt)
    .addField("Current Status", user.presence.status)
    .addField("User Activity", `${user.presence.game ? user.presence.game.name: 'Not playing anything'}`)
    .setFooter(`User ID: ${user.id}`)
    .setThumbnail(iIcon);

    return message.channel.send(iEmbed);
  }
   module.exports.help = {
    name: "userinfo"
}