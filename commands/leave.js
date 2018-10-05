const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    if(message.member.voiceChannel) {

        if(!message.guild.voiceConnection){

            message.member.voiceChannel.leave()
            .then(connection => {
                message.channel.send("If you say so.");
            })
        
        }
    }
    else {
        message.channel.send("Try joining a voice channel fist.");
    }
};
module.exports.help = {
    name: "leave"
}