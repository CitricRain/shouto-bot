const Discord = require('discord.js');

exports.run = (bot, message, args) => { 
     
    let bIcon = bot.user.displayAvatarURL;
    let botEmbed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#a3fffa")
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt)
    .setThumbnail(bIcon);

    return message.channel.send(botEmbed);
  }
   module.exports.help = {
    name: "botinfo"
}