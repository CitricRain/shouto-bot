const Discord = require('discord.js');

module.exports.run = (bot, message, args) => { 
     
    let bIcon = bot.user.displayAvatarURL;
    let botEmbed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#a3fffa")
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt)
    .setThumbnail(bIcon);

    return message.channel.send(botEmbed);
  }
  module.exports.config = {
    name: "botinfo",
    aliases: ["binfo", "bi"],
    description: "Sends the bot information",
    permissions: "None",
    type: "Info",
    usage: "s!botinfo || s!binfo || s!bi",
    extra: "None"
  }