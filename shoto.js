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
const debug = require('debug');


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
    bot.user.setActivity('with cold soba. | use s!help')
  });

bot.on("guildMemberAdd", async member => {
  console.log(`${member.id} joined the server`);

  let welcomeChannel = member.guild.channels.find(`name`, "welcome");
  welcomeChannel.send(`${member} has joined the server.`)
});

// Message event

bot.on('message' , (message) => {

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


bot.login(config.token)