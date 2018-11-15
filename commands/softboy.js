const Discord = require('discord.js');

exports.run = (bot, message, args) => {

    let randomBoy = Math.floor(Math.random() * 6)
    switch (randomBoy) {
      case 1: 
        message.channel.send(`A soft boy`, {files: ["./images/softboy.jpg"]}).catch(console.error);
        break;
      case 2:
        message.channel.send(`A soft boy`, {files: ["./images/softboy2.jpg"]}).catch(console.error);
        break;
      case 3:
        message.channel.send(`A soft boy`, {files: ["./images/softboy3.jpg"]}).catch(console.error);
        break;
      case 4:
        message.channel.send(`A soft boy`, {files: ["./images/softboy4.jpg"]}).catch(console.error);
        break;  
      case 5:
        message.channel.send(`A soft boy`, {files: ["./images/softboy5.jpg"]}).catch(console.error);
        break;  
      case 6:
        message.channel.send(`A soft boy`, {files: ["./images/softboy6.jpg"]}).catch(console.error);
        break;  
      case 6:
        message.channel.send(`A soft boy`, {files: ["./images/softboy7.jpg"]}).catch(console.error);
        break;  
    }
}
module.exports.help = {
    name: "softboy"
}