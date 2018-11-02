const Discord = require('discord.js');

exports.run = (bot, message, args) => { 

    let serverEmbed = new Discord.RichEmbed()
    .setImage("https://vignette.wikia.nocookie.net/bokunoheroacademia/images/1/1e/Sen_Kaibara_Anime_Profile.png/revision/latest/scale-to-width-down/154?cb=20181020230751")
    .setDescription("Sen Kaibara")
    .setColor("#d5a8ff")
    .addField("Japanese Name", `回原旋`)
    .addField("Hero Name", `Unknown`)
    .addField("Date of Birth", `June 12th`)
    .addField("Gender", `Male`)
    .addField("Height", `172 cm (5'7½")`)
    .addField("Blood Type", "B")
    .addField("Quirk", `Gyrate`)
    .addField("Place of Birth", `Tokyo`)
    .addField("Occupation", `1st Year Student of UA High School`)
    .addField("Likes", `Cameras`);


      return message.channel.send(serverEmbed);
  }
  module.exports.help = {
    name: "kaibara"
}