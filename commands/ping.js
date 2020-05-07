const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let bicon = bot.user.displayAvatarURL;

    message.channel.send("Pong :)");
};

module.exports.help = {
  name: "ping"
}