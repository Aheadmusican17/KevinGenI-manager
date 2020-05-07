const discord = require("discord.js");
const botconfig = require("../botconfig.json");
let prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  if(!message.content.startsWith(prefix)) return;

    // ID van de categorie van de tickets.
    const categoryId = "540160978772426782";

    // Verkrijg Gebruikersnaam
    var userName = message.author.username;
    // Verkrijg discriminator
    var userDiscriminator = message.author.discriminator;
    // verkrijg de redeb
    let tReason = args.join(" ").slice(0);


    // Als ticket al gemaakt is
    var bool = false;

    var alangemaaktEmbed = new discord.RichEmbed()
    .setTitle("Je hebt al een ticket!")
    .setColor("#1a2add")
    .setDescription("Kan je hem niet vinden? Contacteer een stafflid!")
    .setFooter("Frogbot | Ticket systeem", bicon);

    // Kijk na als ticket al gemaakt is.
    message.guild.channels.forEach((channel) => {

        // Als ticket is gemaakt, zend bericht.
        if (channel.name == "ticket" + "-" + userName.toLowerCase()) {
            message.channel.send(alangemaaktEmbed);

            bool = true;

        }

    });

    // Als ticket return code.
    if (bool == true) return;

    var embedCreateTicket = new discord.RichEmbed()
        .setTitle("Hallo, " + message.author.username)
        .setColor("#1a2add")
        .setDescription("Ticket succesvol aangemaakt!")
        .setFooter("Frobot | Ticket systeem", bicon);

    message.channel.send(embedCreateTicket);

    // Maak kanaal en zet in juiste categorie.
    message.guild.createChannel("ticket" + "-" + userName.toLowerCase(), "text").then((createdChan) => { // Maak kanaal

        createdChan.setParent(categoryId).then((settedParent) => { // Zet kanaal in category.

            // Zet perms voor iedereen
            settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "READ_MESSAGES": false });
            settedParent.overwritePermissions(message.guild.roles.find('name', "Support team"), {
              "READ_MESSAGES": true, "SEND_MESSAGES": true,
              "ATTACH_FILES": true,
            });
            // Zet perms voor de gebruiker die ticket heeft aangemaakt.
            settedParent.overwritePermissions(message.author, {

                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true,
                "MENTION_EVERYONE": false,
            });

            var embedParent = new discord.RichEmbed()
                .setTitle("Hallo " + message.author.username.toString())
                .setColor("#1a2add")
                .setDescription("Een Support team lid komt u zo snel mogelijk helpen! Leg alvast u probleem uit! dan kunnen we u sneller helpen!")
                .addField("Reden:", tReason)
                .setFooter("Frogbot | Ticket systeem");

            settedParent.send(embedParent);

        }).catch(err => {
            message.channel.send("ERROR Faultcode:t11.");
        });

    }).catch(err => {
        message.channel.send("ERROR Faultcode:T12.");
    });

}

module.exports.help = {
    name: "ticket"
}
