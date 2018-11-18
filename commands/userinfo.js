const Discord = require('discord.js');

module.exports.run = (bot, message, args) => { 

    let iIcon = message.guild.member.displayAvatarURL;
    let iEmbed = new Discord.RichEmbed()
    .setDescription("User Information")
    .setColor("#6dff77")
    .setTitle(`${message.guild.member.tag} Info`)
    .addField("Discord Name", message.guild.member.username)
    .addField("Discord Tag", `#${message.guild.member.descriminator}`)
    .addField("Joined On", message.guild.member.createdAt)
    .addField("Current Status", message.guild.member.presence.status)
    .addField("User Activity", `${message.guild/member.presence.game ? message.member.presence.game.name: 'Not playing anything'}`)
    .setFooter(`User ID: ${message.guild.member.id}`)
    .setThumbnail(iIcon);

    return message.channel.send(iEmbed);
  }
   module.exports.help = {
    name: "userinfo"
}