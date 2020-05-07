const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
let prefix = botconfig.prefix;


module.exports.run = async (bot, message, args) => {
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
     if(!bUser) return message.channel.send("Ik kan de persoon niet vinden.");
     let bReason = args.join(" ").slice(22);
     if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Sorry, Jij hebt de verkeerde permissies!");
     if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Die persoon kan ik niet kicken. Hij is een admin! Verwijder de admin rollen.");
     let bicon = bot.user.displayAvatarURL;

     let banEmbed = new Discord.RichEmbed()
     .setTitle("~Ban melding~")
     .setColor("#ff0000")
     .addField("Persoon", `${bUser} met het ID ${bUser.id}`)
     .addField("Moderator:", `<@${message.author.id}> met het ID ${message.author.id}`)
     .addField("Kanaal", message.channel)
     .addField("Tijd", message.createdAt)
     .addField("Reden", bReason)
     .setFooter("BeppieDeFjordManager | Moderator", bicon);

     let incidentchannel = message.guild.channels.find(`name`, "log-channel");
     if(!incidentchannel) return message.channel.send("Ik kan niet loggen. Maak een kanaal aan genaamd: `log-channel`");

     if(!message.content.startsWith(prefix)) return;
     message.guild.member(bUser).ban(bReason);
     bUser.send(`Hallo ${bUser} U bent zojuist verbannen in ${message.channel.guild}. De reden was: ${bReason}`)
     message.channel.send(`ik heb zojuist ${bUser} voor je verbannen!`)
    message.delete();
    incidentchannel.send(banEmbed);

}

module.exports.help = {
  name: "ban"
}
