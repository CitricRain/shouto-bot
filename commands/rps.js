
   const Discord = require('discord.js');

   module.exports.run = (bot, message, args) => {

   let userChoice = args.slice(' ')
    if (!args[0] === 'rock' || !args[0] === 'paper' || !args[0] === 'scissors') return message.channel.send("Please play fairly. (Use either rock, paper or scissors.)")
    
    if(!args[0]) return message.channel.send("Please select rock, paper or scissors.")

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
    if (userChoice === computerChoice) {
      return 'It`s a tie!';
    }
    if (userChoice === 'rock') {
      if(computerChoice === 'paper') {
        return 'You won!'
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer won!';
      } else {
        return 'You won!'
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won!';
      } else {
        return 'You won!'
      }
    }
  }
  

    const computerChoice =
          getComputerChoice();
   message.channel.send(`You chose ${userChoice}`);
message.channel.send(`I chose ${computerChoice}`);
   message.channel.send(determineWinner(userChoice, computerChoice));
  
  };
  