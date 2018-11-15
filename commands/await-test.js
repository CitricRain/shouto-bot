
const Discord = require('discord.js');

exports.run = async (bot, message, args) => { 
   const filter = m => m.author.id === m.author.id;
   message.reply("Testing the await function... Will expire in 15 seconds").then(r => r.delete(15000));
   message.channel.awaitMessages(filter, {max: 1, time: 15000}).then(collected => {

    if (collected.first().content === "test"){
    return message.reply("Successful");
    }


   }).catch(err => {
       console.log(err)
   })
}

module.exports.help = {
    name: "eye"
}