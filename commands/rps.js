const Discord = require('discord.js');

exports.run = (bot, message, args) => { 
    const getUserChoice = (userInput) => {
        userInput = userInput.toLowerCase();
        if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
          return userInput;
        } else {
          message.channel.send('Play by the rules.')
        }
      };
      
      function getShotoChoice() {
        let randomNumber =
        Math.floor(Math.random() * 4)
        switch (randomNumber) {
          case 1:
            return 'rock';
          case 2:
            return 'paper';
          case 3:
            return 'scissors';
        }
      };
      
      const determineWinner = (userChoice, shotoChoice) => {
        if (userChoice === computerChoice) {
          return 'It`s a tie.';
        }
        if (userChoice === 'rock') {
          if(computerChoice === 'paper') {
            return 'I won.';
          } else {
            return 'You won.'
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
        if (userChoice === 'scissors') {
          if (computerChoice === 'rock') {
            return 'I won.';
          } else {
            return 'You won.'
          }
      }
    }
    
        const userChoice = args.join(" ");
        const shotoChoice =
              getshotoChoice();
        message.channel.send(`You chose ${userChoice}`);
        message.channel.send(`I chose ${shotoChoice}`);
        message.channel.send(determineWinner(userChoice, computerChoice));
    
    
    
};
module.exports.help = {
    name: "rps"
}