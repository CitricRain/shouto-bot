const Discord = require('discord.js');
const math = require('mathjs');

module.exports.run = async (bot, message, args) => { 

    if(!args[0]) return message.channel.send("If I'm going to help you, you at least need to tell me what I'm helping you with.");
    
    let resp;
    try {
        resp = math.eval(args.join(' '));
    } catch (e) {
        return message.channel.send("Please ask a proper question. (Tip: The symbol for divide is '/' e.g: `s!calc 4/2 = 2` and the symbol for multiply is '*' e.g: `s!calc 3*3 = 9`");
    }
    const calcEmbed = new Discord.RichEmbed()
    .setColor("#ffffff")
    .setTitle("Calculation")
    .addField("Question", `\`\`\`${args.join(' ')}\`\`\``)
    .addField("Answer", `\`\`\`${resp}\`\`\``);

    message.channel.send(calcEmbed);
}
module.exports.help = {
    name: "calc"
}