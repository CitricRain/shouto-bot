const Discord = require('discord.js');

module.exports.run = (bot, message, args) => { 

    let serverEmbed = new Discord.RichEmbed()
    .setImage("https://vignette.wikia.nocookie.net/bokunoheroacademia/images/3/3e/Hanta_Sero_Full_Body_Costume.png/revision/latest?cb=20161230191253")
    .setDescription("Hanta Sero")
    .setColor("#ffc44f")
    .addField("Japanese Name", `瀬呂範太`)
    .addField("Hero Name", `Taping HHero: Selophane`)
    .addField("Date of Birth", `July 28th`)
    .addField("Gender", `Male`)
    .addField("Height", `177 cm (5' 9¾")`)
    .addField("Blood Type", "B")
    .addField("Quirk", `Tape`)
    .addField("Place of Birth", `Tokyo`)
    .addField("Occupation", `1st Year Student of UA High School`)
    .addField("Seat No.", `13`)
    .addField("Likes", `Oranges, Soy beans, Foods that look healthy`);


      return message.channel.send(serverEmbed);
  }
  module.exports.help = {
    name: "sero"
}