
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => { 

    message.channel.send('this works...')
    .then((msg)=>{
    setTimeout(function(){
    msg.edit('this also works!');
    }, 1000)});

}

module.exports.config = {
    name: "testing",
    description: "This is a test"
}