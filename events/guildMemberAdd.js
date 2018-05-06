module.exports = member => {
  let guild = member.guild;
  guild.channel.send(`Please welcome ${member.user.username} to the server!`);
};
