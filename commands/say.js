const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

const Zegtekst = args.join(" ");
message.delete().catch();
message.channel.send(Zegtekst);

}

module.exports.help = {
  name: "say"
}