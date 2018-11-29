
const Discord = require('discord.js');

module.exports.run = (bot, message, args) => { 

    function getHero() {
        let hRandomNumber =
        Math.floor(Math.random() * 26)
        switch (hRandomNumber) {
          case 0:
            return 'Shoto Todoroki';
          case 1:
            return 'Katsuki Bakugo';
          case 3:
            return 'Izuku Midoriya'
          case 4:
            return 'Yuga Aoyama'
          case 5:
            return 'Mina Ashido'
          case 6:
            return 'Tsuyu Asui'
          case 7:
            return 'Toru Hagakure'
          case 8:
            return 'Tenya Iida'
          case 9:
            return 'Kyoka Jiro'
          case 10:
            return 'Denki Kaminari'
          case 11:
            return 'Eijiro Kirishima'
          case 12:
            return 'Koji Koda'
          case 13:
            return 'Mashirao Ojiro'
          case 14:
            return 'Rikido Sato'
          case 15:
            return 'Hanta Sero'
          case 16:
            return 'Mezo Shoji'
          case 17:
            return 'Fumikage Tokoyami'
          case 18:
            return 'Ochaco Uraraka'
          case 19:
            return 'Momo Yaoyorozu'
          case 20:
            return 'All Might'
          case 21:
            return 'Endeavour'
          case 22:
            return 'Eraser Head'
          case 23:
            return 'Present Mic'
          case 24:
            return 'Hawks'
          case 25:
            return 'Best Jeanist'

        }
    }

  function getVillain() {
    let vRandomNumber =
    Math.floor(Math.random() * 9)
    switch (vRandomNumber) {
      case 0:
        return 'Overhaul';
      case 1:
        return 'Shigaraki Tomura';
      case 2:
        return 'Toga Himiko';
      case 3:
        return 'Dabi';
      case 4:
        return 'Magne';
      case 5:
        return 'Muscular';
      case 6:
        return 'Moonfish';
      case 7:
        return 'Mr Compress';
      case 8:
      return 'Stain';
    }
}
function getHFight() {
  let fRandomNumber =
  Math.floor(Math.random() * 9)
  switch (fRandomNumber) {
    case 0:
      return 'throws a punch at';
    case 1:
      return 'kicks';
    case 2:
      return "uppercuts";
    case 3:
      return 'uses their quirk against';
    case 4:
      return 'dodges';
    case 5:
      return 'trips up';
    case 6:
      return 'slaps';
    case 7:
      return 'smacks';
    case 8:
    return 'grabs something nearby to use against';
  }
}function getVFight() {
  let fRandomNumber =
  Math.floor(Math.random() * 9)
  switch (fRandomNumber) {
    case 0:
      return 'throws a punch at';
    case 1:
      return 'kicks';
    case 2:
      return "uppercuts";
    case 3:
      return 'uses their quirk against';
    case 4:
      return 'dodges';
    case 5:
      return 'trips up';
    case 6:
      return 'slaps';
    case 7:
      return 'smacks';
    case 8:
    return 'grabs something nearby to use against';
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
    const hero = getHero(``);
    const fight = getHFight(``);
    const vfight = getVFight(``)
    //message.channel.send(`${hero} encounters ${villain}`);
    //message.channel.send(`${hero} and ${villain} prepare to fight!`);
    //message.channel.send(getWinner());
    message.channel.send(`${hero} encounters ${villain}`);
    message.channel.send(`${hero} and ${villain} prepare to fight!`);
    (message.channel.send(`${hero} ${fight} ${villain}!`))
    .then((msg)=>{
      setTimeout(function(){
      msg.edit(`${villain} ${vfight} ${hero}!`);
      }, 3000)});

    return;
  };
     //message.channel.send('this works...')
   // .then((msg)=>{
    //setTimeout(function(){
    //msg.edit('this also works!');
    //}, 1000)});

module.exports.help = {
    name: "fight"
}