const Discord = require('discord.js');

exports.run = (bot, message, args) => {
 
    message.channel.send(`Is this thing on? - Took ${new Date().getTime() - message.createdTimestamp}ms`);
    
    }

module.exports.help = {
    name: "test"
}