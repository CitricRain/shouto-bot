const Discord = require('discord.js');

module.exports.run = (bot, message, args) => { 

    let serverEmbed = new Discord.RichEmbed()
    .setImage("https://vignette.wikia.nocookie.net/bokunoheroacademia/images/b/b6/Eijiro_Kirishima_3rd_Hero_Costume.png/revision/latest?cb=20180727224457")
    .setDescription("Eijiro Kirishima")
    .setColor("#c41e0f")
    .addField("Japanese Name", `切島鋭児郎`)
    .addField("Hero Name", `Sturdy Hero: Red Riot`)
    .addField("Date of Birth", `October 16th`)
    .addField("Gender", `Male`)
    .addField("Height", `170 cm (5'7")`)
    .addField("Blood Type", "O")
    .addField("Quirk", `Hardening`)
    .addField("Place of Birth", `Chiba Prefecture`)
    .addField("Occupation", `1st Year Student of UA High School`)
    .addField("Seat No.", `8`)
    .addField("Likes", `Meat, Manly things`);


      return message.channel.send(serverEmbed);
  }
  module.exports.help = {
    name: "kirishima"
}