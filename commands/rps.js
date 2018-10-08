const Discord = require('discord.js');

exports.run = (bot, message, args) => { 
    const getUserChoice = (userInput) => {
        userInput = userInput.toLowerCase();
        if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
          return userInput;
        } else {
          console.log('Error!')
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
        const userChoice = getUserChoice('scissors');
        const computerChoice =
              getComputerChoice();
        console.log(`You chose ${userChoice}`);
        console.log(`The computer chose ${computerChoice}`);
        console.log(determineWinner(userChoice, computerChoice));
      };
    
    
}
module.exports.help = {
    name: "rps"
}