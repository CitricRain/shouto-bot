const Discord = require('discord.js');

exports.run = (bot, message, args) => { 

    let serverEmbed = new Discord.RichEmbed()
    .setImage("https://vignette.wikia.nocookie.net/bokunoheroacademia/images/1/16/Minoru_Mineta_Full_Body_Hero_Costume_Anime.png/revision/latest?cb=20160118115800")
    .setDescription("Minoru Mineta")
    .setColor("#863ec1")
    .addField("Japanese Name", `峰田実`)
    .addField("Hero Name", `Fresh Picked Hero: Grape Juice`)
    .addField("Date of Birth", `October 8th`)
    .addField("Gender", `Male`)
    .addField("Height", `108 cm (3' 6½")`)
    .addField("Blood Type", "A")
    .addField("Quirk", `Pop Off`)
    .addField("Place of Birth", `Kanagawa Prefecture`)
    .addField("Occupation", `1st Year Student of UA High School`)
    .addField("Seat No.", `19`)
    .addField("Likes", `Girls`);


    message.channel.send(serverEmbed)
    message.channel.send("ew...").then(msg => msg.delete(5000))
    return;
      
  }
  module.exports.help = {
    name: "mineta"
}