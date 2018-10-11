const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    
    let owos = ["Wats dis?", "Misew Obama?", "OwO?", "... Why am I doing this", "UwU", "*nuzzles u*", "I hwave dwaddy issuwes!", "I don't even know what this means","Then Perish."];

    let options = Math.floor((Math.random() * owos.length));
   
 message.channel.send(owos[options]);

};
module.exports.help = {
    name: "owo"
}