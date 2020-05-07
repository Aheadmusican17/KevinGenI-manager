const Discord = require('discord.js');
const botconfig = require('../botconfig.json');
let prefix = botconfig.prefix;
module.exports.run = async (bot, message, args) => {
  let totalSeconds = (bot.uptime / 1000);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = Math.round(totalSeconds % 60);
  let bicon = bot.user.displayAvatarURL;
  let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;

  let uptimeEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#b229a4")
  .setDescription(`My uptime is ${uptime}.`)
  .setFooter("Frogbot | Informatie systeem", bicon);

  message.channel.send(uptimeEmbed);
}
module.exports.help = {
  name: "uptime"
}
