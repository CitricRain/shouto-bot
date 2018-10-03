const Discord = require('discord.js');

exports.run = (bot, message, args) => { 

    let serverEmbed = new Discord.RichEmbed()
    .setImage("https://vignette.wikia.nocookie.net/bokunoheroacademia/images/9/93/Ochaco_Costume_Full_Body.png/revision/latest?cb=20180702141543")
    .setDescription("Ochaco Uraraka")
    .setColor("#f3bcff")
    .addField("Japanese Name", `麗日茶子`)
    .addField("Hero Name", `Uravity`)
    .addField("Date of Birth", `December 27`)
    .addField("Gender", `Female`)
    .addField("Height", `156 cm (5' 1½")`)
    .addField("Blood Type", "B")
    .addField("Quirk", `Zero Gravity`)
    .addField("Place of Birth", `Mie Prefecture`)
    .addField("Occupation", `1st Year Student of UA High School`)
    .addField("Seat No.", `5`)
    .addField("Likes", `Japanese food, Starry skies`);


      return message.channel.send(serverEmbed);
  }
  module.exports.help = {
    name: "uraraka"
}