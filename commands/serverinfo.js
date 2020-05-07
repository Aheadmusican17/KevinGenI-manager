const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
let prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {

 let sicon = message.guild.displayAvatarURL;
 let bicon = bot.user.displayAvatarURL;

  let serverEmbed = new Discord.RichEmbed()
   .setTitle("Server Informatie")
   .setColor("#b229a4")
   .addField("Server naam", message.guild.name)
   .addField("Gemaakt op", message.guild.createdAt)
   .addField("Jij neemt deel sinds:", message.member.joinedAt)
   .addField("Totaal aantal members:", message.guild.memberCount)
   .addField("Regio", message.guild.region)
   .addField("Eigenaar", message.guild.owner)
   .addField("Server ID", message.guild.id)
   .setFooter("Frogbot | Informatie systeem", bicon);

   if(!message.content.startsWith(prefix)) return;
   return message.channel.send(serverEmbed);
}

module.exports.help = {
  name: "serverinfo"
}
