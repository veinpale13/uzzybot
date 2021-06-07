const Discord = require("discord.js");

exports.run = (client, message, args) => {

  let mesaj = args.slice(0).join(" ");
  if (mesaj.length < 1) return message.channel.send("**Kimin memesini açacaksın .d?**");

const EmbedFwhyCode = new Discord.MessageEmbed()

    .setAuthor(" ")
    .setColor(`ORANGE`)
    .setDescription(
      message.author.username +
        ` **adlı kullanıcı, ${mesaj} adlı kullanıcının memesini açtı.**`
    )

    .setImage(
      `https://media.giphy.com/media/BTV0lqUbjps4xy34AH/giphy.gif`, `https://media.giphy.com/media/acsuncK8bCr6w/giphy.gif` 
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
  name: "memeaç",
  description: "memesini açar .d",
  usage: "memeaç"
};