const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    if (args[0] == "I love my dad") return message.channel.send("I'm not a liar.")
    if (args[0] == "I love Endeavour") return message.channel.send("I'm not a liar.")
    if (args[0] == "I like my dad") return message.channel.send("I'm not a liar.")
    if (args[0] == "I like Endeavour") return message.channel.send("I'm not a liar.")
    if(message.channel.type === "dm") return message.channel.send("Sorry, but using this command in a dm will break my code.")
    let shotomessage = args.join(" ");
    if(!shotomessage) return message.channel.send("You can't tell me to say nothing. Try again.")
    message.delete().catch();
    message.channel.send(shotomessage);
}
module.exports.help = {
    name: "say"
}