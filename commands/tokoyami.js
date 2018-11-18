const Discord = require('discord.js');

module.exports.run = (bot, message, args) => { 

    let serverEmbed = new Discord.RichEmbed()
    .setImage("https://vignette.wikia.nocookie.net/bokunoheroacademia/images/7/7a/Fumikage_Full_Body_Hero_Costume.png/revision/latest?cb=20161230181111")
    .setDescription("Fumikage Tokoyami")
    .setColor("#28173f")
    .addField("Japanese Name", `常闇踏陰`)
    .addField("Hero Name", `Jet-Black Hero: Tsukuyomi`)
    .addField("Date of Birth", `October 30th`)
    .addField("Gender", `Male`)
    .addField("Height", `158 cm (5' 2¼")`)
    .addField("Blood Type", "AB")
    .addField("Quirk", `Dark Shadow`)
    .addField("Place of Birth", `Shizuoka Prefecture`)
    .addField("Occupation", `1st Year Student of UA High School`)
    .addField("Seat No.", `14`)
    .addField("Likes", `Apples, Dark places`);


      return message.channel.send(serverEmbed);
  }
  module.exports.help = {
    name: "tokoyami"
}