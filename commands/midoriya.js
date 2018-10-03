const Discord = require('discord.js');

exports.run = (bot, message, args) => { 

    let serverEmbed = new Discord.RichEmbed()
    .setImage("https://vignette.wikia.nocookie.net/bokunoheroacademia/images/d/d3/Izuku_Midoriya_Costume_Gamma_Profile.png/revision/latest?cb=20180825172251")
    .setDescription("Izuku Midoriya")
    .setColor("#289b4b")
    .addField("Japanese Name", `緑谷出久`)
    .addField("Hero Name", `Deku`)
    .addField("Date of Birth", `July 15`)
    .addField("Gender", `Male`)
    .addField("Height", `166 cm (5' 5¼")`)
    .addField("Blood Type", "O")
    .addField("Quirk", `One For All`)
    .addField("Place of Birth", `Near Shizuoka Prefecture`)
    .addField("Occupation", `1st Year Student of UA High School`)
    .addField("Seat No.", `18`)
    .addField("Likes", `Katsudon`);


      return message.channel.send(serverEmbed);
  }
  module.exports.help = {
    name: "midoriya"
}