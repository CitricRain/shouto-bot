const Discord = require('discord.js');

module.exports.run = (bot, message, args) => { 

    let serverEmbed = new Discord.RichEmbed()
    .setImage("https://vignette.wikia.nocookie.net/bokunoheroacademia/images/1/11/Kyoka_Jiro_2nd_Hero_Costume.png/revision/latest?cb=20180727224526")
    .setDescription("Kyoka Jiro")
    .setColor("#331a72")
    .addField("Japanese Name", `耳郎響香`)
    .addField("Hero Name", `Hearing Hero: Earphone Jack`)
    .addField("Date of Birth", `August 1st`)
    .addField("Gender", `Female`)
    .addField("Height", `154 cm (5'1")`)
    .addField("Blood Type", "A")
    .addField("Quirk", `Earphone Jack`)
    .addField("Place of Birth", `Shizuoka Prefecture`)
    .addField("Occupation", `1st Year Student of UA High School`)
    .addField("Seat No.", `12`)
    .addField("Likes", `Rock`);


      return message.channel.send(serverEmbed);
  }
  module.exports.help = {
    name: "jiro"
}