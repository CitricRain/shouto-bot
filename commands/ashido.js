const Discord = require('discord.js');

exports.run = (bot, message, args) => { 

    let serverEmbed = new Discord.RichEmbed()
    .setImage("https://vignette.wikia.nocookie.net/bokunoheroacademia/images/3/30/Mina_Ashido_Full_Body_Costume.png/revision/latest?cb=20161230190231")     
    .setDescription("Mina Ashido")
    .setColor("#ff60fc")
    .addField("Japanese Name", `芦戸三奈`)
    .addField("Hero Name", `Ridley Hero: Alien Queen | Pinky.`)
    .addField("Date of Birth", `July 30`)
    .addField("Gender", `Female`)
    .addField("Height", `159 cm (5'3")`)
    .addField("Blood Type", "AB")
    .addField("Quirk", `Acid`)
    .addField("Place of Birth", `Chiba Prefecture`)
    .addField("Occupation", `1st Year Student of UA High School`)
    .addField("Seat No.", `2`)
    .addField("Likes", `Natto, Okra, Dancing`);


      return message.channel.send(serverEmbed);
  }
  module.exports.help = {
    name: "ashido"
}