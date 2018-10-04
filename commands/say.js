const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    let shotomessage = args.join(" ");
    message.delete().catch();
    message.channel.send(shotomessage);
}
module.exports.help = {
    name: "say"
}