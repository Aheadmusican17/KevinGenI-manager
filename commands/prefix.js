const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
let prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {
let bicon = bot.user.displayAvatarURL;
  let prefixEmbed = new Discord.RichEmbed()

  .setTitle("Prefix menu")
  .setDescription("Mijn prefix is: :")
  .setColor("#1addd7")
  .setFooter("Frogbot | Help systeem", bicon);
if(!message.content.startsWith(prefix)) return;
  message.channel.send(prefixEmbed);
}
module.exports.help = {
  name: "prefix"
}
