const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {

  let replies = ["Yes", "No", "I don't know", "Of course", "Perhaps", "Definitely not", "Definitely", "Maybe", "Of course not", "Possibly"];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(0).join(" ");
  if(!question) return message.channel.send("Please ask a question. (eg. `s!shotoball <question>`)");
  
  let sBallEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setThumbnail("https://cdn.discordapp.com/attachments/498229156815962133/498899034698809355/thonk.png")
  .setColor("#4286f4")
  .addField("Question", question)
  .addField("Answer", replies[result]);
  
  message.channel.send(sBallEmbed);

}
module.exports.help = {
  name: "shotoball"
}