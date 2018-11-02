const Discord = require('discord.js');

exports.run = (bot, message, args) => { 

    let serverEmbed = new Discord.RichEmbed()
    .setImage("https://vignette.wikia.nocookie.net/bokunoheroacademia/images/c/c4/Yosetsu_Awase_Anime_Profile.png/revision/latest/scale-to-width-down/154?cb=20181020201427")
    .setDescription("Yosetsu Awase")
    .setColor("#639fff")
    .addField("Japanese Name", `泡瀬洋雪`)
    .addField("Hero Name", `Unknown`)
    .addField("Date of Birth", `November 7th`)
    .addField("Gender", `Male`)
    .addField("Height", `172 cm (5'7½")`)
    .addField("Blood Type", "O")
    .addField("Quirk", `Weld`)
    .addField("Place of Birth", `Niigata Prefecture`)
    .addField("Occupation", `1st Year Student of UA High School`)
    .addField("Likes", `Mobile games`);


      return message.channel.send(serverEmbed);
  }
  module.exports.help = {
    name: "awase"
}