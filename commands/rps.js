
   const Discord = require('discord.js');

   module.exports.run = (bot, message, args) => {
    
    let userChoice = args[0];
    if(!args[0]) return message.channel.send("Please select rock, paper or scissors.")
 
  function getComputerChoice() {
    let randomNumber =
    Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return 'rock :full_moon:';
      case 1:
        return 'paper :newspaper:';
      case 2:
        return 'scissors :scissors:';
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
    if (userChoice == 'rock' && computerChoice === 'rock') {
      return 'It`s a tie!';
    } else if (userChoice == 'rock' && computerChoice === 'paper') {
        return 'I won!'
      } else if (userChoice == 'rock' && computerChoice === 'scissors') {
          return "You won!"
    } else if (userChoice == 'paper' && computerChoice === 'rock') {
        return "You won!"
    } else {
        return ":exlimation: Wait... That's not how this works. You have to use either `rock`, `paper` or `scissors`."
    }
}
   
    const userEmoji = getUserEmoji();
    const computerChoice = getComputerChoice();
   message.channel.send(`You chose ${userChoice} ${userEmoji}`);
message.channel.send(`I chose \`${computerChoice}\``);
   message.channel.send(determineWinner(userChoice, computerChoice));
  
  };
 