
   const Discord = require('discord.js');

   module.exports.run = (bot, message, args) => {

   let userInput = args.slice(' ')
    if (!userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') return message.channel.send("Please play fairly. (Use either rock, paper or scissors.)")
      
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
  
  const playGame = () => {

    const computerChoice =
          getComputerChoice();
    console.log(`You chose ${userChoice}`);
    console.log(`The computer chose ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  }
  };
  