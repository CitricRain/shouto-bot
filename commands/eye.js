
const Discord = require('discord.js');

exports.run = async (bot, message, args) => { 
    await message.channel.send("Testing");
   const msgs = await message.channel.awaitMessage(msg => {
        console.log(msg.content);
        return msg.content.includes("hi");
    }, {time: 5000});

    message.channel.send(`test completed. Check console`)
    console.log(msgs);
}

module.exports.help = {
    name: "eye"
}