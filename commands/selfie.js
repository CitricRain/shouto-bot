const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    
    let randomPicture = Math.floor(Math.random() * 31)
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
      case 20:
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/shoto21.jpg"]}).catch(console.error);
        break;
      case 21:
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/shoto22.jpg"]}).catch(console.error);
        break;
      case 22:
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/shoto23.jpg"]}).catch(console.error);
        break;
      case 23:
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/shoto24.jpg"]}).catch(console.error);
        break;
      case 24:
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/shoto25.jpg"]}).catch(console.error);
        break;
      case 25:
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/shoto26.jpg"]}).catch(console.error);
        break;
      case 26:
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/shoto27.jpg"]}).catch(console.error);
        break;
      case 27:
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/shoto28.jpg"]}).catch(console.error);
        break;
      case 28:
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/shoto29.jpg"]}).catch(console.error);
        break;
      case 29:
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/shoto30.jpg"]}).catch(console.error);
        break;
      case 30:
        message.channel.send(`If you insist, ${person}.`, {files: ["./images/shoto31.jpg"]}).catch(console.error);
        break;


    }
}
module.exports.help = {
  name: "selfie"
}