const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    
    let randomPicture = Math.floor(Math.random() * 21)
    let person = message.author
    switch (randomPicture) {
      case 0: 
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/shoto1.jpg"]}).catch(console.error);
        break;
      case 1:
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/shoto2.jpg"]}).catch(console.error);
        break;
      case 2:
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/shoto3.jpeg"]}).catch(console.error);
        break;
      case 3:
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/shoto4.jpg"]}).catch(console.error);
        break;
      case 4:
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/shoto5.jpg"]}).catch(console.error);
        break;
      case 5:
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/shoto6.jpg"]}).catch(console.error);
        break;
      case 6:
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/shoto7.png"]}).catch(console.error);
        break;
      case 7:
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/shoto8.png"]}).catch(console.error);
        break;
      case 8:
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/shoto9.png"]}).catch(console.error);
        break;
      case 9:
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/shoto10.png"]}).catch(console.error);
        break;
      case 10:
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/shoto11.png"]}).catch(console.error);
        break;
      case 11:
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/shoto12.png"]}).catch(console.error);
        break;
      case 12:
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/shoto13.png"]}).catch(console.error);
        break;
      case 13:
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/shoto14.jpg"]}).catch(console.error);
        break;
      case 14:
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/shoto15.jpeg"]}).catch(console.error);
        break;
      case 15:
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/shoto16.png"]}).catch(console.error);
        break;
      case 16:
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/shoto17.png"]}).catch(console.error);
        break;
      case 17:
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/shoto18.jpg"]}).catch(console.error);
        break;
      case 18:
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/shoto19.png"]}).catch(console.error);
        break;
      case 19:
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/shoto20.png"]}).catch(console.error);
        break;

    }
}
module.exports.help = {
  name: "selfie"
}