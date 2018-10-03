const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    message.channel.send(`Is this thing on?`);
}
module.exports.help = {
    name: "test"
}