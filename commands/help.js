const Discord = require('discord.js');

exports.run = (bot, message, args) => { 
  const Discord = require('discord.js');

  exports.run = (bot, message, args) => { 
  
      let hIcon = message.guild.iconURL;
      let helpEmbed = new Discord.RichEmbed()
      .setDescription("Help")
      .setColor("#70c168")
      .setThumbnail(hIcon)
      .addField("Basic", "`help`, `ping`, `hello`")
      .addField("Fun", "slurp, handcrusher, selfie, punkboy, perfectboy, rowdyboy, garbageboy, fight") 
      .addField("Information", "`botinfo`, `serverinfo`")
      .addField("Mod Stuff", "`kick`, `ban`, `report`")
      .addField("Character Sheets", "`Use to name of any character for a full character sheet (Currently only works for class 1-A`");
  
        return message.channel.send(helpEmbed);
   }
}
  module.exports.help = {
    name: "help"
  }