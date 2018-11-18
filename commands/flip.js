const Discord = require('discord.js');

module.exports.run = (bot, message, args) => { 
   
    let fireEmbed = new Discord.RichEmbed()
    .setTitle("Results")
    .setDescription(`:fire: | **${message.author.username}** flipped **Fire!** (Thats hot!)`)
    .setColor("#ff5416");

    let iceEmbed = new Discord.RichEmbed()
    .setTitle("Results")
    .setDescription(`:snowflake: | **${message.author.username}** flipped **Ice!** (Pretty cool!)`)
    .setColor("#ccfdff");

    let flip = Math.floor(Math.random() * 2)
    switch (flip) {
      case 0: 
        message.channel.send(fireEmbed);
        break;
      case 1:
        message.channel.send(iceEmbed);
        break;

    }
 } 

module.exports.help = {
    name: "flip"
}