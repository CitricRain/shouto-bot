const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    message.channel.send(`A punk boy`, {files: ["./images/punkboy.jpeg"]}).catch(console.error);
}
module.exports.help = {
    name: "punkboy"
}