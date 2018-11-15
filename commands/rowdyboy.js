const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    message.channel.send(`A rowdy boy`, {files: ["./images/rowdyboy.jpg"]}).catch(console.error);
    const Discord = require('discord.js');

exports.run = (bot, message, args) => {

    let randomRBoy = Math.floor(Math.random() * 5)
    switch (randomRBoy) {
      case 1: 
        message.channel.send(`A rowdy boy`, {files: ["./images/rowdyboy.jpg"]}).catch(console.error);
        break;
      case 2:
        message.channel.send(`A rowdy boy`, {files: ["./images/rowdyboy2.jpg"]}).catch(console.error);
        break;
      case 3:
        message.channel.send(`A rowdy boy`, {files: ["./images/rowdyboy3.jpg"]}).catch(console.error);
        break;
      case 4:
        message.channel.send(`A rowdy boy`, {files: ["./images/rowdyboy4.png"]}).catch(console.error);
        break; 
        case 5:
        message.channel.send(`A rowdy boy`, {files: ["./images/rowdyboy5.jpg"]}).catch(console.error);
        break; 
    }
}
}
module.exports.help = {
    name: "rowdyboy"
}
