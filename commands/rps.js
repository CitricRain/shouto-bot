
   const Discord = require('discord.js');

   module.exports.run = (bot, message, args) => {
    
    let userChoice = args[0];
    if(!args[0]) return message.channel.send("Please select rock, paper or scissors.")
    if(!userChoice == 'rock' || !userChoice == 'paper' || !userChoice == 'scissors') message.channel.send(":exclamation: | Please play fairly (Use either `rock`, `paper` or `scissors`.")
 
  function getComputerChoice() {
    let randomNumber =
    Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice == 'rock' && computerChoice === 'rock') {
      return 'It`s a tie!';
    } else if (userChoice == 'rock' && computerChoice === 'paper') {
        return 'I won!'
      } else if (userChoice == 'rock' && computerChoice === 'scissors') {
          return "You won!"
    } 
}
   

    const computerChoice =
          getComputerChoice();
   message.channel.send(`You chose ${userChoice}`);
message.channel.send(`I chose ${computerChoice}`);
   message.channel.send(determineWinner(userChoice, computerChoice));
  
  };
 