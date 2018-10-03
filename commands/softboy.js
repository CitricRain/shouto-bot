const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    message.channel.send(`A soft boy`, {files: ["./images/softboy.jpg"]}).catch(console.error);
}
module.exports.help = {
    name: "softboy"
}