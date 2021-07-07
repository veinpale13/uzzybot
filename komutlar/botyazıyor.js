const Discord = require('discord.js');
exports.run = async (client, message, args) => {
message.channel.startTyping()
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bot-yazıyor',
  description: "abcssdsaasd"

};
