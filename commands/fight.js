
const Discord = require('discord.js');

exports.run = (bot, message, args) => { 

    function getHero() {
        let hRandomNumber =
        Math.floor(Math.random() * 3)
        switch (hRandomNumber) {
          case 0:
            return ('Shoto Todoroki', {files: ["./images/todoroki.png"]}).catch(console.error);
          case 1:
            return ('Katsuki Bakugo', {files: ["./images/bakugo.png"]}).catch(console.error);
          case 2:
            return ('Izuku Midoriya', {files: ["./images/midoriya.png"]}).catch(console.error);
        }
    }

  function getVillain() {
    let vRandomNumber =
    Math.floor(Math.random() * 9)
    switch (vRandomNumber) {
      case 0:
        return ('Overhaul', {files: ["./images/overhaul.jpg"]}).catch(console.error);
      case 1:
        return ('Tomura Shigaraki', {files: ["./images/shigaraki.png"]}).catch(console.error);
      case 2:
        return ('Toga Himiko', {files: ["./images/toga.jpg"]}).catch(console.error);
      case 3:
        return ('Dabi', {files: ["./images/dabi.jpg"]}).catch(console.error);
      case 4:
        return ('Magne', {files: ["./images/magne.png"]}).catch(console.error);
      case 5:
        return ('Muscular', {files: ["./images/muscular.png"]}).catch(console.error);
      case 6:
        return ('Moonfish', {files: ["./images/moonfish.jpg"]}).catch(console.error);
      case 7:
        return ('Mr Compress', {files: ["./images/mrcompress.jpg"]}).catch(console.error);
      case 8:
      return ('Stain', {files: ["./images/stain.jpg"]}).catch(console.error);
    }
}
   getWinner
   function getWinner() {
    let vRandomNumber =
    Math.floor(Math.random() * 2)
    switch (vRandomNumber) {
      case 0:
        return `The Hero wins! The villain is sent to Tartarus!`;
      case 1:
        return 'The Villain wins! The hero is defeated.';
    }
   }
    const villain = getVillain(``);
    const hero = getHero(``)
    message.channel.send(`${hero} encounters ${villain}`);
    message.channel.send(`${hero} and ${villain} prepare to fight!`);
    message.channel.send(getWinner());
    return;
  };

module.exports.help = {
    name: "fight"
}