const Discord = require('discord.js');

    const userInput = args.slice(0).join(" ");
    if (!userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log('Play by the rules.')
    }
  };
  
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
      return 'It`s a tie.';
    }
    if (userChoice === 'rock') {
      if(computerChoice === 'paper') {
        return 'I won.';
    } else {
      return 'You won'
    }
}
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'I won.';
      } else {
        return 'You won.'
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'I won.';
      } else {
        return 'You won.'
      }
    }

    const computerChoice =
          getComputerChoice();
    message.channel.send(`You chose ${userChoice}`);
    message.channel.send(`The computer chose ${computerChoice}`);
    message.channel.send(determineWinner(userChoice, computerChoice));
  };
  
module.exports.help = {
    name: "rps"
}