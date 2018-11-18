const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {

    if(message.guild.id === "489941049427492864") return;
    
    let owos = ["Wats dis?", "Mistew Obama?", "OwO?", "... Why am I doing this", "UwU", "*nuzzles u*", "I hwave dwaddy issuwes!", "I don't even know what this means","Then Perish."];

    let options = Math.floor((Math.random() * owos.length));
   
 message.channel.send(owos[options]);

};
module.exports.help = {
    name: "owo"
}