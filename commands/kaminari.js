const Discord = require('discord.js');

module.exports.run = (bot, message, args) => { 

    let serverEmbed = new Discord.RichEmbed()
    .setImage("https://vignette.wikia.nocookie.net/bokunoheroacademia/images/2/20/Denki_Kaminari_2nd_Hero_Costume.png/revision/latest?cb=20180727224509")
    .setDescription("Denki Kaminari")
    .setColor("#fffb3d")
    .addField("Japanese Name", `上鳴電気`)
    .addField("Hero Name", `Stun Gun Hero: Chargebolt`)
    .addField("Date of Birth", `June 29th`)
    .addField("Gender", `Male`)
    .addField("Height", `168 cm (5'6")`)
    .addField("Blood Type", "O")
    .addField("Quirk", `Electrification`)
    .addField("Place of Birth", `Saitama Prefecture`)
    .addField("Occupation", `1st Year Student of UA High School`)
    .addField("Seat No.", `7`)
    .addField("Likes", `Hamburgers, Trendy things`);


      return message.channel.send(serverEmbed);
  }
  module.exports.help = {
    name: "kaminari"
}