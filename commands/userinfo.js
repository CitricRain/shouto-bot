const Discord = require('discord.js');

exports.run = (bot, message, args) => { 

    let iIcon = message.member.displayAvatarURL;
    let iEmbed = new Discord.RichEmbed()
    .setDescription("User Information")
    .setColor("#6dff77")
    .setTitle(`${message.member.tag} Info`)
    .addField("Discord Name", message.member.username)
    .addField("Discord Tag", `#${message.member.descriminator}`)
    .addField("Joined On", message.member.createdAt)
    .addField("Current Status", message.member.presence.status)
    .addField("User Activity", `${message.member.presence.game ? message.member.presence.game.name: 'Not playing anything'}`)
    .setFooter(`User ID: ${message.member.id}`)
    .setThumbnail(iIcon);

    return message.channel.send(iEmbed);
  }
   module.exports.help = {
    name: "userinfo"
}