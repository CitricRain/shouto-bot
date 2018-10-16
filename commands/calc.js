const Discord = require('discord.js');
const math = require('mathjs');

exports.run = async (bot, message, args) => { 

    if(!args[0]) return message.channel.send("If I'm going to help you, you at least need to tell me what I'm helping you with.");
    
    let resp;
    try {
        resp = math.eval(args.join(' '));
    } catch (e) {
        return message.channel.send("Please ask a proper question.");
    }
    const calcEmbed = new Discord.RichEmbed()
    .setColour("#ffffff")
    .setTitle("Calculation")
    .addField("Question", `\`\`\`${args.join(' ')}\`\`\``)
    .addField("Answer", `\`\`\`js${resp}\`\`\``)
}
module.exports.help = {
    name: "calc"
}