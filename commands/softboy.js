const Discord = require('discord.js');

exports.run = (bot, message, args) => {

    let randomBoy = Math.floor(Math.random() * 31)
    let person = message.author
    switch (randomBoy) {
      case 0: 
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/softboy.jpg"]}).catch(console.error);
        break;
      case 1:
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/softboy2.jpg"]}).catch(console.error);
        break;
      case 2:
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/softboy3.jpg"]}).catch(console.error);
        break;
      case 3:
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/softboy4.jpg"]}).catch(console.error);
        break;  
    }
}
module.exports.help = {
    name: "softboy"
}