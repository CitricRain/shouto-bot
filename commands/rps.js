
   const Discord = require('discord.js');

   module.exports.run = (bot, message, args) => {
    
    let userChoice = args[0];
    if(!args[0]) return message.channel.send("Please select rock, paper or scissors.")
 
  function getComputerChoice() {
    let randomNumber =
    Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return '`rock` :full_moon:';
      case 1:
        return '`paper` :newspaper:';
      case 2:
        return '`scissors` :scissors:';
    }
  };
  
  function getUserEmoji() {
      if (userChoice == 'rock') {
          return ":full_moon:"
      } else if (userChoice == 'paper') {
           return ":newspaper:"
      } else if (userChoice == 'scissors') {
           return ":scissors:"
  } else {
    return ":no_entry_sign:"
  }
};


  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice == 'rock' && computerChoice === '`rock` :full_moon:') {
        return 'It`s a tie! :loop:';
    } else if (userChoice == 'rock' && computerChoice === '`paper` :newspaper:') {
        return 'I won! :trophy:'
    } else if (userChoice == 'rock' && computerChoice === '`scissors` :scissors:') {
        return "You won! :trophy:"
    } else if (userChoice == 'paper' && computerChoice === '`rock` :full_moon:') {
        return "You won! :trophy:"
    } else if (userChoice == 'paper' && computerChoice === '`paper` :newspaper:') {
        return "It's a tie! :loop:"
    } else if (userChoice == 'paper' && computerChoice === '`scissors` :scissors:') {
        return "I won! :trophy:"
    } else if (userChoice == 'scissors' && computerChoice === '`rock` :full_moon:') {
        return "I won! :trophy:"
    } else if (userChoice == 'scissors' && computerChoice === '`paper` :newspaper:') {
        return 'You won! :trophy:'
    } else if (userChoice == 'scissors' && computerChoice === '`scissors` :scissors:') {
        return "It's a tie! :loop:"
    } else {
        return "Wait... That's not how this works. You have to use either `rock`, `paper` or `scissors`. :exclamation:"
    }
}
   
    const userEmoji = getUserEmoji();
    const computerChoice = getComputerChoice();
   message.channel.send(`You chose \`${userChoice}\` ${userEmoji}`);
   message.channel.send(`I chose ${computerChoice}`);
   message.channel.send(determineWinner(userChoice, computerChoice));
  
  };
 