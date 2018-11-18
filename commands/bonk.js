const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    
    message.channel.send(``, {files: ["./images/bonk.png"]}).catch(console.error);
};
module.exports.config = {
    name: "bonk",
    aliases: [],
    description: "Sends an image of Shoto getting bonked",
    permissions: "None",
    type: "Image",
    usage: "s!bonk",
    extra: "None"

  }