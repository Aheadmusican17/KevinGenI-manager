const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
let prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Oeps! Ik kan de gebruiker niet vinden!");
    let rreason = args.join(" ").slice(22);
    let bicon = bot.user.displayAvatarURL;

    let reportEmbed = new Discord.RichEmbed()
    .setTitle("~Report Melding~")
    .setColor("#dd1acd")
    .addField("Gemelde gebruiker", `${rUser} met het ID: ${rUser.id}`)
    .addField("Gemeld door", `${message.author} met het ID: ${message.author.id}`)
    .addField("Kanaal", message.channel)
    .addField("Tijd", message.createdAt)
    .addField("Reden", rreason)
    .setFooter("Frogbot | Report Systeem", bicon);

    let reportschannel = message.guild.channels.find(`name`, "log-channel");
    if(!reportschannel) return message.channel.send("OOPS daar had ik even een fout, FaultCode:  L0g458R");

    if(!message.content.startsWith(prefix)) return;
    message.delete();
    message.channel.send(`Ik heb net ${rUser} voor je gemeld!`);
    reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "report"
}
