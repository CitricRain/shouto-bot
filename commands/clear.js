const Discord = require('discord.js');

exports.run = (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No.");
    if(!args[0]) return message.channel.send("I can't delete nothing.");
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(8000))
    });
}
module.exports.help = {
    name: "clear"
}