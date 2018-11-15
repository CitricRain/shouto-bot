 const Discord = require('discord.js');
  exports.run = (bot, message, args) => { 
  
    if (args[0] == "ban") {
      let banHelpEmbed = new Discord.RichEmbed()
      .setDescription("Ban command")
      .setColor("#70c168")
      .addField("Purpose", "Bans selected member")
      .addField("Command Type", "Moderation")
      .addField("Permissions Needed", "`BAN MEMBERS`") 
      .addField("Usage", "`s!ban <member> <reason>")
      .addField("Extra", "Optional: Have a channel in your server named #bans-log (make sure Shoto Bot is able to send messages in it). This will log the time, place and reason for the bans in one channel.")
      .setFooter("Text with <text> around it does **not** require brackets in usage");
  
        return message.channel.send(banHelpEmbed);
    }

    if (args[0] == "bonk") {
      let bonkHelpEmbed = new Discord.RichEmbed()
      .setDescription("Bonk command")
      .setColor("#70c168")
      .addField("Purpose", "Sends an image of me getting killed:tm:")
      .addField("Command Type", "Image")
      .addField("Permissions Needed", "`NONE`") 
      .addField("Usage", "`s!bonk")
      .addField("Extra", "None")
      .setFooter("Text with <text> around it does **not** require brackets in usage");
  
        return message.channel.send(bonkHelpEmbed);
    }

  if (args[0] == "botinfo") {
    let botinfoHelpEmbed = new Discord.RichEmbed()
    .setDescription("Bot Info command")
    .setColor("#70c168")
    .addField("Purpose", "Sends an embed with Shoto Bot's information.")
    .addField("Command Type", "Info")
    .addField("Permissions Needed", "`NONE`") 
    .addField("Usage", "`s!botinfo")
    .addField("Extra", "None")
    .setFooter("Text with <text> around it does **not** require brackets in usage");

      return message.channel.send(botinfoHelpEmbed);
  }

  if (args[0] == "calc") {
    let calcHelpEmbed = new Discord.RichEmbed()
    .setDescription("Calc command")
    .setColor("#70c168")
    .addField("Purpose", "Does maths calculations")
    .addField("Command Type", "Info")
    .addField("Permissions Needed", "`NONE`") 
    .addField("Usage", "`s!calc <calculation>")
    .addField("Extra", `Symbols such as x for multiplication and ÷ for division will not work`)
    .setFooter("Text with <text> around it does **not** require brackets in usage");

      return message.channel.send(calcHelpEmbed);
  }

  if (args[0] == "clear") {
    let bonkHelpEmbed = new Discord.RichEmbed()
    .setDescription("Clear command")
    .setColor("#70c168")
    .addField("Purpose", "Bulk deletes messages")
    .addField("Command Type", "Moderation")
    .addField("Permissions Needed", "`MANAGE MESSAGES`") 
    .addField("Usage", "`s!clear <number of messages to be deleted>")
    .addField("Extra", "The number of messages deleted at one time must be less than or equal to 100")
    .setFooter("Text with <text> around it does **not** require brackets in usage");

      return message.channel.send(bonkHelpEmbed);
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