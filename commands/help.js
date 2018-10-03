const Discord = require('discord.js');

exports.run = (bot, message, args) => { 
    message.channel.send(`Hello, I am Shoto Bot. I'm currently only a work in progress bot, so please contact my creator if you find any bugs or problems, thanks.
    
    **Basic:** *help*, *ping*, *hello*

    **Fun:** *slurp*, *handcrusher*, *selfie*, *punkboy*, *perfectboy*, *rowdyboy*, *garbageboy*, *fight*

    **Information:** *botinfo*, *serverinfo*

    **Mod Only:** *kick*, *ban*

    **Extra:** *Use the name of any character and I'll send you a full character sheet 

    *Use the report command to report a user to an admin*)

   *Please remember to use the prefix 's!' before any command, or I wont respond*
  
    ***More commands to be added soon***
    `)

  }
  module.exports.help = {
    name: "help"
  }