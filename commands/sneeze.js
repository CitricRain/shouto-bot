const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {

    let randomSneeze = Math.floor(Math.random() * 5)
    switch (randomSneeze) {
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
module.exports.help = {
    name: "sneeze"
}
