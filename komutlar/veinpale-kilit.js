const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
exports.run = async (client, message, args) => {
if (!message.member.hasPermission('ADMINISTRATOR')) return ;

  if(!args[0]) {
     const kilit = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setDescription(`<:714261458418008104:844938313186148393> Kanal başarıyla kilitlendi,`)
  .setColor(ayarlar.kirmizi)
      message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.send(kilit)
  }) }

  if(args[0] == "aç") {
     const kilit = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setDescription("<:714261458418008104:844938313186148393> Kanalın kilidi başarıyla açıldı.")
  .setColor(ayarlar.yesil)
      message.channel.createOverwrite(message.guild.id, {
     SEND_MESSAGES: null
    }).then(() => {
      message.channel.send(kilit)
  }) }
};
exports.conf = {
  aliases: ["kilit"]
};
exports.help = {
  name: "kilit"
};
