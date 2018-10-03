const Discord = require('discord.js');

exports.run = (bot, message, args) => { 

    let serverEmbed = new Discord.RichEmbed()
    .setImage("https://vignette.wikia.nocookie.net/bokunoheroacademia/images/1/15/Toru_Hagakure_Full_Body_Hero_Costume.png/revision/latest?cb=20161230191818")
    .setDescription("Toru Hagakure")
    .setColor("#d8fffe")
    .addField("Japanese Name", `葉隠透`)
    .addField("Hero Name", `Stealth Hero: Invisible Girl`)
    .addField("Date of Birth", `June 16th`)
    .addField("Gender", `Female`)
    .addField("Height", `152 cm (4' 11¾")`)
    .addField("Blood Type", "A")
    .addField("Quirk", `Invisibility`)
    .addField("Place of Birth", `Tokyo`)
    .addField("Occupation", `1st Year Student of UA High School`)
    .addField("Seat No.", `16`)
    .addField("Likes", `Caramel, Dokkiri Shows (hidden camera surprise pranks)`);


      return message.channel.send(serverEmbed);
  }
  module.exports.help = {
    name: "hagakure"
}