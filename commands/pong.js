const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let bicon = bot.user.displayAvatarURL;

message.channel.send("Ping :)");
}

module.exports.help = {
  name: "pong"
}