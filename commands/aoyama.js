const Discord = require('discord.js');

module.exports.run = (bot, message, args) => { 

    let serverEmbed = new Discord.RichEmbed()
    .setImage("https://vignette.wikia.nocookie.net/bokunoheroacademia/images/4/49/Yuga_Aoyama_full_body_hero_costume.png/revision/latest?cb=20161230185522")
    .setDescription("Yuga Aoyama")
    .setColor("#ebc4ff")
    .addField("Japanese Name", `青山優雅`)
    .addField("Hero Name", `Shining Hero: Can't Stop Twinkling`)
    .addField("Date of Birth", `May 30`)
    .addField("Gender", `Male`)
    .addField("Height", `168 cm (5'6")`)
    .addField("Blood Type", "O")
    .addField("Quirk", `Navel Laser`)
    .addField("Place of Birth", `France`)
    .addField("Occupation", `1st Year Student of UA High School`)
    .addField("Seat No.", `1`)
    .addField("Likes", `Himself`);


      return message.channel.send(serverEmbed);
  }
  module.exports.help = {
    name: "aoyama"
}