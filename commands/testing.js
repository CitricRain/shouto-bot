
const Discord = require('discord.js');

exports.run = async (bot, message, args) => { 
   
    if (args[0] == "this") return message.channel.send("This works.")
    if (args[0] == "it") return message.channel.send("It works.")

}

module.exports.help = {
    name: "testing",
    description: ""
}