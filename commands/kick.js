const Discord = require('discord.js');

exports.run = (bot, message, args) => { 
    let kUser = message.guild.member(message.mentions.members.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send(`I couldn't find that user.`);
    let kReason = args.join(" ").slice(22);
    if(!kReason) return message.channel.send("Please provide a reason (e.g: `s!kick @endeavour for being a shitty dad`)")
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("I'm afriad I can't do that.");
    if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("I'm afraid I can't do that.")
  
    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#ff853f")
    .addField("Kicked User", `${kUser} with ID: ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason);
  
    let kicksChannel = message.guild.channels.find(`name`, "kicks-log");
    if(!kicksChannel) return;
  
    message.delete().catch(O_o=>{});
    message.guild.member(kUser).kick(kReason)
    kicksChannel.send(kickEmbed);
    message.channel.send(`${kUser} was kicked for ${kReason}, a true villain.`)
  
    return;
   }

   module.exports.help = {
       name: "kick"
   }