 const Discord = require('discord.js');
  exports.run = (bot, message, args) => { 
  
      let helpEmbed = new Discord.RichEmbed()
      .setDescription("Help")
      .setColor("#70c168")
      .addField("Basic", "`help`, `ping`, `hello`")
      .addField("Fun", "`slurp`, `handcrusher`, `selfie`, `punkboy`, `perfectboy`, `rowdyboy`, `garbageboy`, `fight`, `shotoball`") 
      .addField("Information", "`botinfo`, `serverinfo`")
      .addField("Mod Stuff", "`kick`, `ban`, `report`")
      .addField("Character Sheets", "`Use the name of any character for a full character sheet (Currently only works for class 1-A`");
  
        return message.channel.send(helpEmbed);
   } 

  module.exports.help = {
    name: "help"
  }