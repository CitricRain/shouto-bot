
const Discord = require('discord.js');

exports.run = (bot, message, args) => { 
    const getHero = (userHero) => {
        userHero = args.join(" ").slice(22);
        if (userHero === 'bakugo' || userHero === 'midoriya' || userHero === 'todoroki') {
          return userHero;
        } else {
          console.log('Error!')
        }
      };    
  function getVillain() {
    let vRandomNumber =
    Math.floor(Math.random() * 8)
    switch (vRandomNumber) {
      case 0:
        return 'Overhaul';
      case 1:
        return 'Shigaraki Tomura';
      case 2:
        return 'Toga Himiko'
      case 3:
        return 'Dabi'
      case 4:
        return 'Magne'
      case 5:
        return 'Muscular'
      case 6:
        return 'Moonfish'
      case 7:
        return 'Mr Compress';
    }
}
   getWinner
   function getWinner() {
    let vRandomNumber =
    Math.floor(Math.random() * 8)
    switch (vRandomNumber) {
      case 0:
        return `The Hero wins! The villain is sent to Tartarus!`;
      case 1:
        return 'The Villain wins! The hero is defeated.';
    }
   }
   const fight = () => {
    const hero = getUserChoice();
    const villain = getComputerChoice();
    message.channel.send(`${hero} encounters ${villain}`);
    message.channel.send(`${hero} and ${villain} prepare to fight!`);
    message.channel.send(getWinner());
   }
   message.channel.send(fight);
  };

module.exports.help = {
    name: "fight"
}