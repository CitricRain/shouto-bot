const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    
    var user = client.users.get("351480748005523466");
    message.channel.send("Done. Check the console.")
    console.log(user);

}
module.exports.help = {
    name: "dm"
}