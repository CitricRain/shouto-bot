const Discord = require('discord.js');

exports.run = (bot, message, args) => { 

    let serverEmbed = new Discord.RichEmbed()
    .setImage("https://vignette.wikia.nocookie.net/bokunoheroacademia/images/f/f2/Momo_Yayorozu_Full_Body_Hero_Costume.png/revision/latest/scale-to-width-down/160?cb=20161230175644")
    .setDescription("Momo Yaoyorozu")
    .setColor("#ea4d89")
    .addField("Japanese Name", `八百万百`)
    .addField("Hero Name", `Everything Hero: Creati`)
    .addField("Date of Birth", `September 23`)
    .addField("Gender", `Female`)
    .addField("Height", `173 cm (5'8")`)
    .addField("Blood Type", "A")
    .addField("Quirk", `Creation`)
    .addField("Place of Birth", `Aichi Prefecture`)
    .addField("Occupation", `1st Year Student of UA High School`)
    .addField("Seat No.", `20`)
    .addField("Likes", `Reading`);


      return message.channel.send(serverEmbed);
  }
  module.exports.help = {
    name: "yaoyorozu"
}