const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let bicon = bot.user.displayAvatarURL;
let kiEmbed = new Discord.RichEmbed()
  .setTitle("Dit is de informatie over kevin!")
  .addField("Naam:", "Kevin")
  .setColor("#00cc00")
  .addField("Leeftijd:", "14 Jaar")
  .addField("Hobby's", "Mijn hobby's zijn; Gamen, Youtube filmpjes maken!")
  .addField("Woonplaats en adres:", "Ik zou dom zijn als ik dit ging zeggen:)")
  .addField("Extra verhaal :3", "Ik ben kevin en ik ben 14 jaar. Ik ben met Youtube begonnen omdat ik opzoek was naar iets nieuws. En ik ben blij dat ik aan youtoube begonnen ben.Ik zit nu 2de van MAVO en heb veel vrienden gemaakt. Ik heb veel nieuwe ervaringen opgedaan sinds ik overgestapt ben van school. Onderandere kan ik nu computers bouwen en programeren :3. Ik hoop dat je nu meer over me te weten gekomen ben!")
  .setFooter("Frogbot | Info Systeem", bicon);

  message.channel.send(kiEmbed);
}

module.exports.help = {
  name: "kevininfo"
}