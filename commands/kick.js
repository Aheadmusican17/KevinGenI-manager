const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
let prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
     if(!kUser) return message.channel.send("Ik kan de persoon niet vinden");
     let kReason = args.join(" ").slice(22);
     if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je hebt de verkeerde permissies!");
     if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Ik kan die persoon niet kicken. Het is een staff team lid.");
     let bicon = bot.user.displayAvatarURL;

     let kickEmbed = new Discord.RichEmbed()
     .setTitle("~Kick Melding~")
     .setColor("#dda01a")
     .addField("Persoon:", `${kUser} met het ID ${kUser.id}`)
     .addField("Moderator:", `<@${message.author.id}> met het ID ${message.author.id}`)
     .addField("Kanaal", message.channel)
     .addField("Tijd", message.createdAt)
     .addField("Reden", kReason)
     .setFooter("Frogbot | Moderator", bicon);

     let kickChannel = message.guild.channels.find(`name`, "log-channel");
     if(!kickChannel) return message.channel.send("Mijn excuus. Ik heb deze persoon niet kunnen kicken. Fault code:l0g2312K2 ");
     if(!message.content.startsWith(prefix)) return;
     kUser.send(`Hallo ${kUser} U bent zojuist gekickt in ${message.channel.guild}. De reden was: ${kReason}`)
     message.channel.send(`Ik heb zojuist ${kUser} voor je gekickt!`);
     message.guild.member(kUser).kick(kReason);
     message.delete();
     kickChannel.send(kickEmbed);

}

module.exports.help = {
  name: "kick"
}
