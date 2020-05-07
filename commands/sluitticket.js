const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
let prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Dit kan alleen een staff lid!")
let bicon = bot.user.displayAvatarURL;

let sluitEmbed = new Discord.RichEmbed()
.setTitle("Ticket gesloten!")
.setColor("#1a2add")
.setDescription("Wacht op lead staff om de ticket helemaal te closen!")
.setFooter("Frobot | Ticket systeem", bicon);

if(!message.content.startsWith(prefix)) return;
message.delete();
message.channel.send(sluitEmbed);



}

module.exports.help = {
  name: "sluitticket"
}
