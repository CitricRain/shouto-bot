const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    message.guild.createRole({
		name: message.content.arguments[1],
		position: 7,
	})
		.then(newrole => message.member.addRole(newrole));
}
module.exports.help = {
    name: "addrole"
}