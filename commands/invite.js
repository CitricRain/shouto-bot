const Discord = require('discord.js');

module.exports.run = (bot, message, args) => { 
    message.channel.send(`Use this link right here to invite me to your server:
https://discordapp.com/oauth2/authorize?&client_id=477032652793315338&scope=bot&permissions=2146958583`).catch(console.error);
}
module.exports.help = {
    name: "invite"
}