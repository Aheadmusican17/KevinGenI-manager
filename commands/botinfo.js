const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let bicon = bot.user.displayAvatarURL;

let botEmbeld = new Discord.RichEmbed()
  .setDescription("Botinformatie!")
  .setColor("#00cc00")
  .addField("Naam bot:", bot.user.username)
  .addField("Gemaakt op:", bot.user.createdAt)
  .addField("Gemaakt door:", "(kevin) let kevin = /home/main/JS/Kevin/ en (bram) <html>Bram</html>")
  .setFooter("BeppieDeFjordManager | Info systeem", bicon);


  return message.channel.send(botEmbeld);
}

module.exports.help = {
  name: "botinfo"
}