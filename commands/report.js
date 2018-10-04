const Discord = require('discord.js');

exports.run = (bot, message, args) => { 
    if(message.channel.type === "dm") return message.channel.send("But... There's no one else here.");
    let rUser = message.guild.member(message.mentions.members.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send(`I couldn't find that user.`);
  let rReason = args.join(" ").slice(22);
  if(!rReason) return message.channel.send("Please provide a reason (e.g: `s!report @endeavour for being a shitty dad`)")

  let reportEmbed = new Discord.RichEmbed()
  .setDescription("~Report~")
  .setColor("#fffb47")
  .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
  .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
  .addField("Channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", rReason);

  let reportsChannel = message.guild.channels.find(`name`, "reports-log");
  if(!reportsChannel) return;
  
  message.delete().catch(O_o=>{});
  reportsChannel.send(reportEmbed);

  return;
 }

 module.exports.help = {
    name: "report"
}