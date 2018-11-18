const Discord = require('discord.js');

module.exports.run = (bot, message, args) => { 

    if(message.channel.type === "dm") return message.channel.send("We are not currently in a server.");

    let sIcon = message.guild.iconURL;
    let serverEmbed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#ffa3d4")
    .setThumbnail(sIcon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);


      return message.channel.send(serverEmbed);
  }
  module.exports.help = {
    name: "serverinfo"
}