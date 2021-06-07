const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    const member = message.mentions.users.first() || message.author;
    const chars = [...
        "================================================="
    ];
    var kaccm = Math.floor((Math.random() * 50) + 1);
    const x = [...Array(kaccm)].map(i => chars[Math.random() * chars.length | 0]).join ``;
    await message.channel.send(`${x}>\n ${member} ${kaccm} **CM KARDEŞİM**`)
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["kaçcm", "kaccm"],
    permLevel: 0,
  }
  
  exports.help = {
    name: "kaçcm"
  };