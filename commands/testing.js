
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => { 
   
    message.channel.send("This is working...").then(msg => msg.edit(5000("This is also working!")))
return;

}

module.exports.config = {
    name: "testing",
    description: "This is a test"
}