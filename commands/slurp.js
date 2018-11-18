const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    message.channel.send(`Sluuurp`, {files: ["./images/slurp.jpg"]}).catch(console.error);
}
module.exports.help = {
    name: "slurp"
}