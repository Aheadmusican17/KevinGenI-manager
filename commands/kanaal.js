const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let bicon = bot.user.displayAvatarURL;

message.channel.send("Kanaal link: https://www.youtube.com/channel/UC0LvfEsYAInD2WFWWG2D4jQ?view_as=subscriber Vergeet je de abboneer knop niet in te drukken als je we gaat ;)");
}

module.exports.help = {
  name: "kanaal"
}