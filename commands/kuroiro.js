const Discord = require('discord.js');

module.exports.run = (bot, message, args) => { 

    let serverEmbed = new Discord.RichEmbed()
    .setImage("https://vignette.wikia.nocookie.net/bokunoheroacademia/images/5/51/Shihai_Kuroiro_Anime_Profile.png/revision/latest/scale-to-width-down/143?cb=20181020225723")
    .setDescription("Shihai Kuroiro")
    .setColor("#000000")
    .addField("Japanese Name", `黒色支配`)
    .addField("Hero Name", `Scheming Hero: Vantablack`)
    .addField("Date of Birth", `November 1`)
    .addField("Gender", `Male`)
    .addField("Height", `176 cm (5'9½")`)
    .addField("Blood Type", "A")
    .addField("Quirk", `Black`)
    .addField("Place of Birth", `Fukushima Prefecture`)
    .addField("Occupation", `1st Year Student of UA High School`)
    .addField("Likes", `Squid ink pasta.`);


      return message.channel.send(serverEmbed);
  }
  module.exports.help = {
    name: "kamakiri"
}