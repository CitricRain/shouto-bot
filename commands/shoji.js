const Discord = require('discord.js');

exports.run = (bot, message, args) => { 

    let serverEmbed = new Discord.RichEmbed()
    .setImage("https://vignette.wikia.nocookie.net/bokunoheroacademia/images/9/9e/Mezo_Shoji_Full_Body_Hero_Costume.png/revision/latest/scale-to-width-down/245?cb=20161230190634")
    .setDescription("Mezo Shoji")
    .setColor("#22235b")
    .addField("Japanese Name", `障子目蔵`)
    .addField("Hero Name", `Tentacle Hero: Tentacole`)
    .addField("Date of Birth", `February 25th`)
    .addField("Gender", `Male`)
    .addField("Height", `187 cm (6'2")`)
    .addField("Blood Type", "B")
    .addField("Quirk", `Dupli-Arms`)
    .addField("Place of Birth", `Fukuoka Prefecture`)
    .addField("Occupation", `1st Year Student of UA High School`)
    .addField("Seat No.", `11`)
    .addField("Likes", `Takoyaki, Squid ink pasta`);


      return message.channel.send(serverEmbed);
  }
  module.exports.help = {
    name: "shoji"
}