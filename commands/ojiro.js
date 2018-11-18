const Discord = require('discord.js');

module.exports.run = (bot, message, args) => { 

    let serverEmbed = new Discord.RichEmbed()
    .setImage("https://vignette.wikia.nocookie.net/bokunoheroacademia/images/8/84/Mashirao_Ojiro_2nd_Hero_Costume.png/revision/latest?cb=20180728025539")
    .setDescription("Mashirao Ojiro")
    .setColor("#cccccc")
    .addField("Japanese Name", `尾白猿夫`)
    .addField("Hero Name", `Martial Arts Hero: Tailman`)
    .addField("Date of Birth", `May 28`)
    .addField("Gender", `Male`)
    .addField("Height", `169 cm (5'6")`)
    .addField("Blood Type", "O")
    .addField("Quirk", `Tail`)
    .addField("Place of Birth", `Tokyo`)
    .addField("Occupation", `Student of UA High School1st Year Student of UA High School`)
    .addField("Seat No.", `6`)
    .addField("Likes", `Martial arts`);


      return message.channel.send(serverEmbed);
  }
  module.exports.help = {
    name: "ojiro"
}