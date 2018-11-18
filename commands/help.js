 const Discord = require('discord.js');
  module.exports.run = (bot, message, args) => { 

    if(args[0] == "help") return message.channel.send("Just do `s!help` instead.")

    if(args[0]) {
      let command = args[0];
      if(bot.commands.has(command)) {
        command = bot.commands.get(command);
        var SHEmbed = new Discord.RichEmbed()
        .setDescription("Help")
      .setColor("#70c168")
      .addField("Name", `${command.help.name}.`);

      return message.channel.send(SHEmbed);
      }
    }

    if (!args[0]) {
      let helpEmbed = new Discord.RichEmbed()
      .setDescription("Help")
      .setColor("#70c168")
      .addField("Basic", "`help`, `ping`, `hello`")
      .addField("Fun", "`slurp`, `handcrusher`, `selfie`, `punkboy`, `perfectboy`, `rowdyboy`, `garbageboy`, `fight`, `shotoball`, `flip`, `owo`, `bonk`") 
      .addField("Information", "`botinfo`, `serverinfo`, `calc`")
      .addField("Mod Stuff", "`kick`, `ban`, `report`")
      .addField("Character Sheets", "`Use the name of any character for a full character sheet (Currently only works for class 1-A`");
  
        return message.channel.send(helpEmbed);
   } 
  }
  module.exports.help = {
    name: "help"
  }