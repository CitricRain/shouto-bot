const Discord = require('discord.js');

exports.run = (bot, message, args) => {

    let clearEmbed = new Discord.RichEmbed()
    .setThumbnail("https://cdn1.iconfinder.com/data/icons/color-bold-style/21/08-512.png")
    .setDescription("Clear")
    .setColor("#70c168")
    .addField("Purpose", `Clears as many messages as requested`)
    .addField("Can Be Used By", "People with the permission `MANAGE MESSAGES`")
    .addField("Usage", "`s!clear <no. of messages to clear>`")

    if(args[0 === help]) return message.channel.send(clearEmbed);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No.");
    if(!args[0]) return message.channel.send("I can't delete nothing.");
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000))
    });
}
module.exports.help = {
    name: "clear"
}