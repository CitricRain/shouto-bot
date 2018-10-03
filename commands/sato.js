const Discord = require('discord.js');

exports.run = (bot, message, args) => { 

    let serverEmbed = new Discord.RichEmbed()
    .setImage("https://vignette.wikia.nocookie.net/bokunoheroacademia/images/4/47/Rikido_Sato_Full_Body_Hero_Costume.png/revision/latest/scale-to-width-down/262?cb=20161230192011")
    .setDescription("Rikido Sato")
    .setColor("#f2e6c4")
    .addField("Japanese Name", `砂藤力道`)
    .addField("Hero Name", `Sweets Hero: Sugarman`)
    .addField("Date of Birth", `June 19th`)
    .addField("Gender", `Male`)
    .addField("Height", `185 cm (6'0¾")`)
    .addField("Blood Type", "O")
    .addField("Quirk", `Sugar Rush`)
    .addField("Place of Birth", `Tottori Prefecture`)
    .addField("Occupation", `1st Year Student of UA High School`)
    .addField("Seat No.", `10`)
    .addField("Likes", `Cake`);


      return message.channel.send(serverEmbed);
  }
  module.exports.help = {
    name: "sato"
}
