const Discord = require('discord.js');

exports.run = (bot, message, args) => { 

    let serverEmbed = new Discord.RichEmbed()
    .setImage("https://vignette.wikia.nocookie.net/bokunoheroacademia/images/8/88/Tsuyu_Asui_Full_Body_Hero_Costume_Anime.png/revision/latest/scale-to-width-down/224?cb=20160118114942")     
    .setDescription("Tsuyu Asui")
    .setColor("#a5ff91")
    .addField("Japanese Name", `蛙吹梅雨`)
    .addField("Hero Name", `Rainy Season Hero: Froppy`)
    .addField("Date of Birth", `February 12`)
    .addField("Gender", `Female`)
    .addField("Height", `150 cm (4'11")`)
    .addField("Blood Type", "B")
    .addField("Quirk", `Frog`)
    .addField("Place of Birth", `Aichi Prefecture`)
    .addField("Occupation", `1st Year Student of UA High School`)
    .addField("Seat No.", `3`)
    .addField("Likes", `Jelly/Jello`);


      return message.channel.send(serverEmbed);
  }
  module.exports.help = {
    name: "asui"
}