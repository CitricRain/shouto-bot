
const Discord = require('discord.js');

module.exports.run = (bot, message, args) => { 
    message.channel.send(`Hello, ${message.author.username}`).catch(console.error);
}
module.exports.help = {
    name: "hello"
}