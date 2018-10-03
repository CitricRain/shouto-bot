const Discord = require('discord.js');

exports.run = (bot, message, args) => { 

    let serverEmbed = new Discord.RichEmbed()
    .setImage("https://vignette.wikia.nocookie.net/bokunoheroacademia/images/0/04/Shoto_Todoroki_3rd_Hero_Costume.png/revision/latest?cb=20180727224441")
    .setDescription("Shoto Todoroki")
    .setColor("#a3fffa")
    .addField("Japanese Name", `轟焦凍`)
    .addField("Hero Name", `Shoto`)
    .addField("Date of Birth", `January 11th`)
    .addField("Gender", `Male`)
    .addField("Height", `176 cm (5' 9¼")`)
    .addField("Blood Type", "O")
    .addField("Quirk", `Half-Cold Half-Hot`)
    .addField("Place of Birth", `Near Shizuoka Prefecture`)
    .addField("Occupation", `1st Year Student of UA High School`)
    .addField("Seat No.", `15`)
    .addField("Likes", `Zaru soba`);


      return message.channel.send(serverEmbed);
  }
  module.exports.help = {
    name: "todoroki"
}