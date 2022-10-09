const Discord = require('discord.js');
const client = new Discord.Client();
const token = ‘OTc1MTYzMjkxNTczODEzMjY5.GUsI8k.0B1cLGvUYeYDODBBaUfrGdP92V6Hm3BxhXoIeE’

client.once('ready', () => {
   console.log(‘Félicitations, votre bot Discord a été correctement initialisé !');
});

client.login(token);


const kick = require("../commands/kick")
module.exports = (client, message) => {
  if (message.content.startsWith("!kick")) {
    return kick(message)
  }
}

