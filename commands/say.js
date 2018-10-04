const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    let shotomessage = args.join(" ");
    if(!shotomessage) return message.channel.send("You can't tell me to say nothing. Try again.")
    if(shotomessage = args.join("Endeavour is a good dad")) return message.channel.send("I dont lie.")
    message.delete().catch();
    message.channel.send(shotomessage);
}
module.exports.help = {
    name: "say"
}