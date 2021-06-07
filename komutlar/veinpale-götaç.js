const Discord = require("discord.js");

exports.run = (client, message, args) => {

  let mesaj = args.slice(0).join(" ");
  if (mesaj.length < 1) return message.channel.send("**Kimin götünü açacaksın .d?**");

const EmbedFwhyCode = new Discord.MessageEmbed()

    .setAuthor(" ")
    .setColor(`ORANGE`)
    .setDescription(
      message.author.username +
        ` **, ${mesaj} adlı kullanıcının götünü açtı.**`
    )

    .setImage(
      `https://media.giphy.com/media/9XFWpgdYiRJOVY2IkX/giphy.gif`, `https://media.giphy.com/media/acsuncK8bCr6w/giphy.gif` 
    );
  return message.channel.send(EmbedFwhyCode);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  kategori: "eğlence",
  permLevel: 0
};

exports.help = {
  name: "götaç",
  description: "götünü açar .d",
  usage: "götaç"
};
