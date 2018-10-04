const Discord = require('discord.js');

exports.run = (bot, message, args) => { 
    message.channel.send(`Use this link right here to invite me to your server.
    https://discordapp.com/oauth2/authorize?&client_id=494899991903469579&scope=bot&permissions=2146958839`).catch(console.error);
}
module.exports.help = {
    name: "invite"
}