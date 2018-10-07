const Discord = require('discord.js');

exports.run = (bot, message, args) => { 
  let guild = message.guild
    if(message.channel.type === "dm") return message.channel.send("But... There's no one else here.");
    if(!guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("I have not recieved my Provisional Banning License yet. I'll receieve it once I'm given the permission `Ban Members`");
    let bUser = message.guild.member(message.mentions.members.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send(`I couldn't find that user.`);
    let bReason = args.join(" ").slice(22);
    if(!bReason) return message.channel.send("Please provide a reason (e.g: `s!ban @endeavour for being a shitty dad`)")
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("I'm afriad I can't do that.");
    if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("I'm afraid I can't do that.")
  
    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#cc1c1c")
    .addField("Banned User", `${bUser} with ID: ${bUser.id}`)
    .addField("Banned By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);
  
    let bansChannel = message.guild.channels.find(`name`, "bans-log");
    if(!bansChannel) return;
    
    message.delete().catch(O_o=>{});
    message.guild.member(bUser).ban(bReason)
    bansChannel.send(banEmbed);
    message.channel.send(`${bUser} was banned for ${bReason}, send them to Tartarus!`)
  
    return;
  } 

  module.exports.help = {
    name: "ban"
  }