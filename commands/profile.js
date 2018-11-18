const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {

    if(args[0] == "bakugo")  
    let serverEmbed = new Discord.RichEmbed()
    .setImage("https://vignette.wikia.nocookie.net/bokunoheroacademia/images/e/e8/Katsuki_Bakugo_Hero_Costume_Full_Body.png/revision/latest/scale-to-width-down/249?cb=20170718224312")  
    .setDescription("Katsuki Bakugo")
    .setColor("#fc7425")
    .addField("Japanese Name", `爆豪勝己`)
    .addField("Nickname", `Kacchan`)
    .addField("Date of Birth", `April 20th`)
    .addField("Gender", `Male`)
    .addField("Height", `172 cm (5' 7¾")`)
    .addField("Blood Type", "A")
    .addField("Quirk", `Explosion`)
    .addField("Place of Birth", `Near Shizuoka Prefecture`)
    .addField("Occupation", `1st Year Student of UA High School`)
    .addField("Seat No.", `17`)
    .addField("Likes", `Spicy food, Mountain Climbing`);


      return message.channel.send(serverEmbed);

};
module.exports.help = {
    name: "profile"
}