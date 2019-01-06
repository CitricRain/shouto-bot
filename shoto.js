const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const fs = require('fs');
const Discord = require('discord.js');
const config = require("./config.json");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if(!file.endsWith(".js")) return;
    let eventFunction = require(`./commands/${file}`);

    let commandName = file.split(".")[0];
    bot.on(commandName, (...args) => eventFunction.run(bot, ...args));
  });
});
 

// Ready event
bot.on('ready', () => {
    console.log(`${bot.user.username} is ready to help ${bot.users.size} users, in ${bot.channels.size} channels in ${bot.guilds.size} server(s).`);
    console.log(bot.guilds.map(v=>v.name).join('\n'));
    let statuses = ["with cold soba. | use s!help", "with cold soba. | use s!help", "with cold soba. | use s!help", "Dabi is a Todoroki","with cold soba. | use s!help", "with cold soba. | use s!help"]
    setInterval(function() {
      let status = Math.floor((Math.random() * statuses.length));
      bot.user.setActivity(statuses[status])
    }, 30000)
  });

bot.commands = new Discord.Collection();

bot.on("guildMemberAdd", function(member) {
  console.log(`${member.user.username} has joined the server`);

  let todoRole = member.guild.roles.find(`name`, "Todohoe");
  member.addRole(todoRole);

  let welcomeChannel = member.guild.channels.find(`name`, "welcome");
  if(!welcomeChannel) return;

  let greetings = [`Now its your turn,${member}.... To join the server`, `A new hero joins the ranks! ${member} has joined.`, `Its okay now, why? Because ${member} is here!`];
  let welcome = Math.floor((Math.random() * greetings.length));
  welcomeChannel.send(greetings[welcome])

});

// Message event

bot.on('message' , (message) => {

if(message.channel.type === "dm") console.log(`[${message.author.username}] ${message.content}`);
 if(message.author.bot) return;
 if (!message.content.startsWith(config.prefix)) return;


 const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
 const command = args.shift().toLowerCase();

 try {
  let commandFile = require(`./commands/${command}.js`);
  commandFile.run(bot, message, args);
} catch (err) {
  console.error(err);
}

});


bot.login(process.env.TOKEN)