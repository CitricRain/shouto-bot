const Discord = require('discord.js');

module.exports.run = (bot, message, args) => { 

    let serverEmbed = new Discord.RichEmbed()
    .setImage("https://vignette.wikia.nocookie.net/bokunoheroacademia/images/6/6b/Tenya_Iida_Full_Body_Hero_Costume.png/revision/latest?cb=20180509010624")
    .setDescription("Tenya Iida")
    .setColor("#606eff")
    .addField("Japanese Name", `飯田天哉`)
    .addField("Hero Name", `Tenya | Ingenium`)
    .addField("Date of Birth", `August 22`)
    .addField("Gender", `Male`)
    .addField("Height", `179 cm (5'10½")`)
    .addField("Blood Type", "A")
    .addField("Quirk", `Engine`)
    .addField("Place of Birth", `Tokyo`)
    .addField("Occupation", `1st Year Student of UA High School`)
    .addField("Seat No.", `4`)
    .addField("Likes", `Studying, Beef stew`);


      return message.channel.send(serverEmbed);
  }
  module.exports.help = {
    name: "iida"
}