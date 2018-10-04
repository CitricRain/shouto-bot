const Discord = require('discord.js');

exports.run = (bot, message, args) => { 
    message.channel.send(`I am 15 years old.`).catch(console.error);
}
module.exports.help = {
    name: "yaoi"
}