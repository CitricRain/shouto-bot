const Discord = require('discord.js');

exports.run = (bot, message, args) => {
   if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You can't do that, sorry.");
   if(!args[0]) return message.channel.send("I can't get rid of nothing, try again.");
   message.channel.bulkDelete(args[0]).then(() => {
       message.channel.send(`${args[0]} messages deleted.`).then(message => message.delete(5000));
   });
}
module.exports.help = {
    name: "clear"
}