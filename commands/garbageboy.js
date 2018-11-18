const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    message.channel.send(`A garbage boy`, {files: ["./images/garbageboy.png"]}).catch(console.error);
}
module.exports.help = {
    name: "garbageboy"
}