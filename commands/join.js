const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    if(message.member.voiceChannel) {

        if(!message.guild.voiceConnection){

            message.member.voiceChannel.join()
                 .then(connection => {
                     message.chennel.send("I'm here.");
                 })
        }
    }
    else {
        message.channel.send("Try joining a voice channel fist.");
    }
};
module.exports.help = {
    name: "join"
}