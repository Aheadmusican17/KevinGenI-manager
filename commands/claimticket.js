const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
let prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Dit kan alleen een staff team lid!")
let bicon = bot.user.displayAvatarURL;
let claimEmbed = new Discord.RichEmbed()
.setTitle("Ticket geclaimed!")
.setDescription("Alleen een HOGERE rank dan deze persoon mag opnieuw claimen!")
.setColor("#1a2add")
.addField("Geclaimed door", message.author.username)
.setFooter("Frogbot | Ticket systeem", bicon);


if(!message.content.startsWith(prefix)) return;
message.delete();
message.channel.send(claimEmbed);
}

module.exports.help = {
  name: "claimticket"
}
