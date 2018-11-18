const Discord = require('discord.js');

module.exports.run = (bot, message, args) => { 

    let serverEmbed = new Discord.RichEmbed()
    .setImage("https://vignette.wikia.nocookie.net/bokunoheroacademia/images/e/e4/Koji_Koda_2nd_Hero_Costume.png/revision/latest?cb=20180727224552")
    .setDescription("Koji Koda")
    .setColor("#f7d8b7")
    .addField("Japanese Name", `口田甲司`)
    .addField("Hero Name", `Petting Hero: Anima`)
    .addField("Date of Birth", `February 1st`)
    .addField("Gender", `Male`)
    .addField("Height", `186 cm (6'1")`)
    .addField("Blood Type", "A")
    .addField("Quirk", `Anivoice`)
    .addField("Place of Birth", `Iwate Prefecture`)
    .addField("Occupation", `1st Year Student of UA High School`)
    .addField("Seat No.", `9`)
    .addField("Likes", `Nature`);


      return message.channel.send(serverEmbed);
  }
  module.exports.help = {
    name: "koda"
}