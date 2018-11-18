const Discord = require('discord.js');

module.exports.run = (bot, message, args) => { 

    let serverEmbed = new Discord.RichEmbed()
    .setImage("https://vignette.wikia.nocookie.net/bokunoheroacademia/images/b/ba/Togaru_Kamakiri_Anime_Profile.png/revision/latest/scale-to-width-down/150?cb=20181020231015")
    .setDescription("Togaru Kamakiri")
    .setColor("#c4f7a0")
    .addField("Japanese Name", `鎌切尖`)
    .addField("Hero Name", `Unknown`)
    .addField("Date of Birth", `January 7`)
    .addField("Gender", `Male`)
    .addField("Height", `189 cm (6'2")`)
    .addField("Blood Type", "A")
    .addField("Quirk", `Razor Sharp`)
    .addField("Place of Birth", `Nagasaki Prefecture`)
    .addField("Occupation", `1st Year Student of UA High School`)
    .addField("Likes", `Collecting insects`);


      return message.channel.send(serverEmbed);
  }
  module.exports.help = {
    name: "kamakiri"
}