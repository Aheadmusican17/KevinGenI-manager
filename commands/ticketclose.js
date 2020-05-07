const discord = require("discord.js");
const botconfig = require("../botconfig.json");
let prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Sorry, Deze command is alleen voor een lead staff!");
  if(!message.content.startsWith(prefix)) return;
let bicon = bot.user.displayAvatarURL;
  var embedVerkeerdKanaal = new discord.RichEmbed()
    .setTitle("Gebruik dit in een ticket kanaal!")
    .setColor("#1a2add")
    .setDescription("Dit command is om een ticket te closen.. Niet om een kanaal te verwijderen")
    .setFooter("Frogbot | Ticket systeem", bicon);
    // Id van category van tickets.
    const categoryId = "540160978772426782";

    // Als bericht in ticket kanaal is dan verwijder kanaal ander zend bericht
    if (message.channel.parentID == categoryId) {

        message.channel.delete();

    } else {

        message.channel.send(embedVerkeerdKanaal);

    }



    var embedCloseTicket = new discord.RichEmbed()
        .setTitle("TICKET GESLOTEN")
        .setColor("#1a2add")
        .setDescription("Ticket:  " + message.channel.name + "  is geclosed!")
        .setFooter("Frogbot | Ticket systeem", bicon);

    // Vind kanaal voor de logs.
    var logChannel = message.guild.channels.find("name", "log-channel");
    if (!logChannel) return message.channel.send("Oeps! Hier ging iets fout! Fault code: l0g12k23");

    logChannel.send(embedCloseTicket);

}

module.exports.help = {
    name: "close"
}
