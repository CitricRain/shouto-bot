const Discord = require('discord.js');

exports.run = (bot, message, args) => {

    let randomBoy = Math.floor(Math.random() * 4)
    switch (randomBoy) {
      case 0: 
        message.channel.send(`A soft boy`, {files: ["./images/softboy.jpg"]}).catch(console.error);
        break;
      case 1:
        message.channel.send(`A soft boy`, {files: ["./images/softboy2.jpg"]}).catch(console.error);
        break;
      case 2:
        message.channel.send(`A soft boy`, {files: ["./images/softboy3.jpg"]}).catch(console.error);
        break;
      case 3:
        message.channel.send(`A soft boy`, {files: ["./images/softboy4.jpg"]}).catch(console.error);
        break;  
    }
}
module.exports.help = {
    name: "softboy"
}