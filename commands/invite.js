exports.run = (client, message, args) => {
    message.channel.send("https://discordapp.com/oauth2/authorize?client_id=434814153107177484&scope=bot&permissions=66137103");

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['getbot', 'invite'],
  permLevel: 0
};

exports.help = {
  name: 'Invite',
  description: 'Invite the bot.',
  usage: 'invite'
};
