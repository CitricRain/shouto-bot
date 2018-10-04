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
      .addField("Mod Only", "`kick`, `ban`")
      .addField("Extra", `Use to name of any character for a full character sheet (Currently only works for class 1-A)
      Use the report command to report a user to an admin
      Please remember to use the prefix 's!' before any command, or I wont respond`)
      .addField("*More Commands Coming Soon.*", "");
  
        return message.channel.send(helpEmbed);
   }
  }
  module.exports.help = {
    name: "help"
  }