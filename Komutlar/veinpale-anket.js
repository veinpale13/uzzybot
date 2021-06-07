const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {

  const db = require('quick.db');
     const x = args.slice(0).join('');
    if (!x) return message.reply('Lütfen bir oylama içeriği giriniz');
    const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(`${client.user.username} - Oylama sistemi`)
        .addField('Oylama', x)
    let msg = await message.channel.send(embed)
        .then(function (msg) {
          msg.react("✅");
            msg.react("❌")           
        });
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["anket", "oylama-yap", "anket-aç"],
  permLevel: 3,
  kategori: "sunucu",

};

exports.help = {
  name: 'oylama',
  description: 'Sunucunuzda oylama yapmanızı sağlar.',
  usage: 'oylama <mesaj>',

};