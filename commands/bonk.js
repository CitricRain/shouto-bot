const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    
    message.channel.send(``, {files: ["./images/bonk.png"]}).catch(console.error);
};
module.exports.help = {
    name: "bonk"
}