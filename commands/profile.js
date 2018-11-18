const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {

    if(args[0] == "aoyama")
    var serverEmbed = new Discord.RichEmbed()
    .setImage("https://vignette.wikia.nocookie.net/bokunoheroacademia/images/4/49/Yuga_Aoyama_full_body_hero_costume.png/revision/latest?cb=20161230185522")
    .setDescription("Yuga Aoyama")
    .setColor("#ebc4ff")
    .addField("Japanese Name", `青山優雅`)
    .addField("Hero Name", `Shining Hero: Can't Stop Twinkling`)
    .addField("Date of Birth", `May 30`)
    .addField("Gender", `Male`)
    .addField("Height", `168 cm (5'6")`)
    .addField("Blood Type", "O")
    .addField("Quirk", `Navel Laser`)
    .addField("Place of Birth", `France`)
    .addField("Occupation", `1st Year Student of UA High School`)
    .addField("Seat No.", `1`)
    .addField("Likes", `Himself`);

  if(args[0] == "ashido")
   var serverEmbed = new Discord.RichEmbed()
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

    if(args[0] == "asui")
    var serverEmbed = new Discord.RichEmbed()
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

    if(args[0] == "awase")
   var serverEmbed = new Discord.RichEmbed()
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
    .addField("Likes", `Mobile games`)


    if(args[0] == "bakugo")  
    var serverEmbed = new Discord.RichEmbed()
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

    if(args[0] == "dabi") 
   var daServerEmbed = new Discord.RichEmbed()
    .setImage("https://vignette.wikia.nocookie.net/bokunoheroacademia/images/b/b0/Dabi_anime_profile.png/revision/latest/scale-to-width-down/176?cb=20170923130039")     
    .setDescription("Dabi")
    .setColor("#1959c1")
    .addField("Japanese Name", `荼毘`)
    .addField("Villain Name", `Dabi`)
    .addField("Date of Birth", `Unknown`)
    .addField("Gender", `Male`)
    .addField("Height", `Unknown`)
    .addField("Blood Type", "Unknown")
    .addField("Quirk", `Cremation`)
    .addField("Place of Birth", `Unknown`)
    .addField("Occupation", `Leader of the Vanguard Action Squad`)
    .addField("Likes", `Unknown`);

    var daSecretServerEmbed = new Discord.RichEmbed()
    .setImage("https://66.media.tumblr.com/747a733f1dc648f6c5f9331d8d7003ff/tumblr_p7lk7yEiw61u9espno1_500.png")     
    .setDescription("Touya")
    .setColor("#ff0000")
    .addField("Japanese Name", `轟 燈矢`)
    .addField("I͙̤̦̜ṉ̷̘fo͉͔̳̪̘̹̕r̮͍̺͉m̛a̛̲̮̠͓̪̼͍t҉̱i̶͖̣͇̲o̵̞̙̞̲̝̗n͎̠͜", `The final Todoroki sibling.`)
    .setFooter("Credit: Keiid");

    let flip = Math.floor(Math.random() * 14)
    switch (flip) {
      case 0: 
        message.channel.send(daServerEmbed);
        break;
      case 1:
        message.channel.send(daSecretServerEmbed);
        break;
        case 2: 
        message.channel.send(daServerEmbed);
        break;
        case 3: 
        message.channel.send(daServerEmbed);
        break;
        case 3: 
        message.channel.send(daServerEmbed);
        break;
        case 4: 
        message.channel.send(daServerEmbed);
        break;
        case 5: 
        message.channel.send(daServerEmbed);
        break;
        case 6: 
        message.channel.send(daServerEmbed);
        break;
        case 7: 
        message.channel.send(daServerEmbed);
        break;
        case 8: 
        message.channel.send(daServerEmbed);
        break;
        case 9: 
        message.channel.send(daServerEmbed);
        break;
        case 10: 
        message.channel.send(daServerEmbed);
        break;
        case 11: 
        message.channel.send(daServerEmbed);
        break;
        case 12: 
        message.channel.send(daServerEmbed);
        break;
        case 13: 
        message.channel.send(daServerEmbed);
        break;

    }

    return message.channel.send(serverEmbed).catch(console.error)

};
module.exports.help = {
    name: "profile"
}