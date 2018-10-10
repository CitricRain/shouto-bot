const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    let pingHelp = args.join("help").slice(22);
    if(pingHelp) { message.channel.send("Bot resonds with 'Pong!") 
} else message.channel.send("Pong!").catch(console.error);
};
module.exports.help = {
    name: "ping"
}