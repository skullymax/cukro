function doMagic8BallVoodoo() {
    var rand = ['davaguco:internet73',
    'adamboerema@gmail.com:acb7311988',
    'raziel.secur@gmail.com:z1x2q3c4',
    'gabebuscus6@gmail.com:huangdao1',
    'mephisto162:c3pha89kl'];

    return rand[Math.floor(Math.random()*rand.length)];
}

exports.run = (client, message, args) => {
  message.channel.send("**Generating...**");
    message.author.send(doMagic8BallVoodoo());
    message.author.send("Join to official discord https://discord.gg/VAwQKQG");

}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['getalt', 'generate', 'alt'],
  permLevel: 0
};

exports.help = {
  name: 'Classic Alts',
  description: 'Generate free minecraft accounts.',
  usage: 'generate'
};

