const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    message.channel.send(`A rowdy boy`, {files: ["./images/rowdyboy.jpg"]}).catch(console.error);
}
module.exports.help = {
    name: "rowdyboy"
}