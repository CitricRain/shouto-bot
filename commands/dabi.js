const Discord = require('discord.js');

exports.run = (bot, message, args) => { 
   
    let serverEmbed = new Discord.RichEmbed()
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

    let secretServerEmbed = new Discord.RichEmbed()
    .setImage("https://66.media.tumblr.com/747a733f1dc648f6c5f9331d8d7003ff/tumblr_p7lk7yEiw61u9espno1_500.png")     
    .setDescription("Touya")
    .setColor("#ff0000")
    .addField("Japanese Name", `轟 燈矢`)
    .addField("I͙̤̦̜ṉ̷̘fo͉͔̳̪̘̹̕r̮͍̺͉m̛a̛̲̮̠͓̪̼͍t҉̱i̶͖̣͇̲o̵̞̙̞̲̝̗n͎̠͜", `The final Todoroki sibling/`)
    .addFooter("Credit: Keiid");

    let flip = Math.floor(Math.random() * 14)
    switch (flip) {
      case 0: 
        message.channel.send(serverEmbed);
        break;
      case 1:
        message.channel.send(secretServerEmbed);
        break;
        case 2: 
        message.channel.send(serverEmbed);
        break;
        case 3: 
        message.channel.send(serverEmbed);
        break;
        case 3: 
        message.channel.send(serverEmbed);
        break;
        case 4: 
        message.channel.send(serverEmbed);
        break;
        case 5: 
        message.channel.send(serverEmbed);
        break;
        case 6: 
        message.channel.send(serverEmbed);
        break;
        case 7: 
        message.channel.send(serverEmbed);
        break;
        case 8: 
        message.channel.send(serverEmbed);
        break;
        case 9: 
        message.channel.send(serverEmbed);
        break;
        case 10: 
        message.channel.send(serverEmbed);
        break;
        case 11: 
        message.channel.send(serverEmbed);
        break;
        case 12: 
        message.channel.send(serverEmbed);
        break;
        case 13: 
        message.channel.send(serverEmbed);
        break;

    }
 } 

module.exports.help = {
    name: "dabi"
}