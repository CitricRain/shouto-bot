const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    message.channel.send(`A perfect boy`, {files: ["./images/perfectboy.png"]}).catch(console.error);
}
module.exports.help = {
    name: "perfectboy"
}