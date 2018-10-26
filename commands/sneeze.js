const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    message.channel.send(`A rowdy boy`, {files: ["./images/rowdyboy.jpg"]}).catch(console.error);
    const Discord = require('discord.js');

exports.run = (bot, message, args) => {

    let randomRBoy = Math.floor(Math.random() * 5)
    switch (randomRBoy) {
      case 1: 
        message.channel.send(`Achoo!`, {files: ["./images/sneeze.png"]}).catch(console.error);
        break;
      case 2:
        message.channel.send(`I didn't think I could catch colds.`, {files: ["./images/sneeze.png"]}).catch(console.error);
        break;
      case 3:
        message.channel.send(`Someone must be talking about me.`, {files: ["./images/sneeze.png"]}).catch(console.error);
        break;
      case 4:
        message.channel.send(`Stop doing that.`, {files: ["./images/sneeze.png"]}).catch(console.error);
        break;  
    }
}
}
module.exports.help = {
    name: "rowdyboy"
}
