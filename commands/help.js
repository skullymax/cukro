const settings = require('../settings.json');
exports.run = (client, message, params) => {
  message.channel.send("Check commands here: http://eyzalts.us/alts/bot/");

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Displays all the available commands for your permission level.',
  usage: 'help [command]'
};
