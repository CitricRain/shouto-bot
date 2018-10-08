const Discord = require('discord.js');

exports.run = (bot, message, args) => {

  if(!args[3]) return message.channel.send(`Ask a full question.`);
  let replies = ["Yes", "No", "I don't know", "Of course", "I'd rather not say", "Definately not", "Definately", "Ask another time", "Of course not.", "Possibly"];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(1).join(" ");
  
  let sBallEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setImage("https://cdn.discordapp.com/attachments/457156771727933462/498897273254707201/thonk.png")
  .setColor("#4286f4")
  .addField("Question", question)
  .addField("Answer", replies[result]);
  
  message.channel.send(sBallEmbed);

}
module.exports.help = {
  name: "shotoball"
}