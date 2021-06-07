const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const embed = new Discord.MessageEmbed()

.setColor('RANDOM')
  .setTitle('Veinpale Priv Bot Yardım')

  .setDescription(`

==============================================
:white_small_square: | **.afk:** = Afk moduna geçersiniz.
:white_small_square: | **.alarm:** = Belirlediğiniz zaman sizi etiketler.
:white_small_square: | **.oylama:** = Anket açar.
:white_small_square: | **.aşkölçer:** = Etiketlediğin kişi ile aşkınızı ölçer.
:white_small_square: | **.avatar:** = Avatarınızı gösterir.
:white_small_square: | **.espiri:** = Botu silmenize sebep olacak iğrenç espiriler yapar.
:white_small_square: | **.gel:** = Seste bulunan kişiyi yanınza çeker.
:white_small_square: | **.git:** = Seste bulunan kişinin yanına gidersiniz.
:white_small_square: | **.kaçcm:** = Muzunuzun kaç cm olduğunu söyler.
:white_small_square: | **.kes:** = Seste olan kişinin bağlantısını keser.
:white_small_square: | **.kilit:** = Kanal kilitler <.kilit aç , .kilit kapat>.
:white_small_square: | **.kurucu:** = Botun sahibini gösterir.
:white_small_square: | **.küfürengel:** = Chatte küfüre engel olur.
:white_small_square: | **.lafat:** = Botu engellemize neden olacak laf sokar.
:white_small_square: | **.memeaç:** = Bunu kullanmanızı tavsiye etmiyorum :D.
:white_small_square: | **.mute:** = Chatten mute atar.
:white_small_square: | **.öp:** = Belirttiğiniz kişiyi öper. 
:white_small_square: | **.snipe:** = Silinen son mesajı gösterir.
:white_small_square: | **.temizle:** = Belirttiğiniz sayı kadar mesajı siler <0-100> arası.
:white_small_square: | **.unmute:** = Chatten atılan muteyi kaldırır.
:white_small_square: | **.unvmute:** = Sesliden atılan muteyi kaldırır.
:white_small_square: | **.vmute:** = Sesli sohbet üzerinden mute atar.
:white_small_square: | **.ping:** = Botun pingini gösterir.
:white_small_square: | **.profil:** = Hesabınız hakkında detalı bilgi verir.
===============================================

Bağlantılar 
**» Davet Linki** [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=834559309764362301&permissions=8&scope=bot)
`)

 message.channel.send(embed) 
}
exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ["help"]

}

exports.help = {

  name: 'yardım',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}