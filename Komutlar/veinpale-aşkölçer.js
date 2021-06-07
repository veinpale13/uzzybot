exports.run = async (client, msg, args) => {
    let ask=[
      "**Aşkölçer %3 Gösteriyor. (Sizden bir bok olmaz kanksss)**",
      "**Aşkölçer %6 Gösteriyor. (Sevmiyor seni anla artık)**",
      "**Aşkölçer %9 Gösteriyor. (Sevmiyor seni anla artık)**",
      "**Aşkölçer %12 Gösteriyor. (Sevmiyor seni anla artık)**",
      "**Aşkölçer %18 Gösteriyor. (Sevmiyor seni anla artık)**",
      "**Aşkölçer %20 Gösteriyor. (Sevmiyor seni anla artık)**",
      "**Aşkölçer %23 Gösteriyor. (Sevmiyor seni anla artık)**",
      "**Aşkölçer %26 Gösteriyor. (Sevmiyor seni anla artık)**",
      "**Aşkölçer %29 Gösteriyor. (Sevmiyor seni anla artık)**",
      "**Aşkölçer %30 Gösteriyor. (Sevmiyor seni anla artık)**",
      "**Aşkölçer %40 Gösteriyor. (Sevmiyor seni anla artık)**",
      "**Aşkölçer %50 Gösteriyor. (Karar veremedim seviyor mu? sevmiyor mu? Ona sor bakalım)**",
      "**Aşkölçer %60 Gösteriyor. (Fena değil hiç yoktan iyidir)**",
      "**Aşkölçer %70 Gösteriyor. (İlerleme var bir daha dene :) )**",
      "**Aşkölçer %73 Gösteriyor. (Olacak sizden hadiiii)**",
      "**Aşkölçer %76 Gösteriyor. (Kardeşim biraz daha sabret olacak)**",
      "**Aşkölçer %79 Gösteriyor. (Az kaldıııı hadiii laaa)**",
      "**Aşkölçer %82 Gösteriyor. (Oluyoooorr gelliiyoooo)**",
      "**Aşkölçer %85 Gösteriyor. (Bu sefer oldu sizden işte)**",
      "**Aşkölçer %88 Gösteriyor. (Var bir şeyler var :) )**",
      "**Aşkölçer %90 Gösteriyor. (İşte gerçek aşk & sevgi!!!! )**",
      "**Aşkölçer %91 Gösteriyor. (İşte gerçek aşk & sevgi!!!! )**",
      "**Aşkölçer %92 Gösteriyor. (İşte gerçek aşk & sevgi!!!! )**",
      "**Aşkölçer %93 Gösteriyor. (İşte gerçek aşk & sevgi!!!! )**",
      "**Aşkölçer %94 Gösteriyor. (İşte gerçek aşk & sevgi!!!! )**",
      "**Aşkölçer %95 Gösteriyor. (İşte gerçek aşk & sevgi!!!! )**",
      "**Aşkölçer %96 Gösteriyor. (İşte gerçek aşk & sevgi!!!! )**",
      "**Aşkölçer %97 Gösteriyor. (İşte gerçek aşk & sevgi!!!! )**",
      "**Aşkölçer %98 Gösteriyor. (İşte gerçek aşk & sevgi!!!! )**",
      "**Aşkölçer %99 Gösteriyor. (İşte gerçek aşk & sevgi!!!! )**",
      "**Aşkölçer %100 Gösteriyor. (İşte gerçek aşk & sevgi!!!! )**",
    ]
      let member = msg.mentions.members.first()
     if(!member)return msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (':no_entry_sign: **Kimi Sevdiğini etiketlemelisin..**')
  }});
 
 
 
    else{
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`${member} ${ask[Math.floor(Math.random() * 30)]}.`)
    }})
    }
 
 
  }
 
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
   };
 
  exports.help = {
    name: 'aşkölçer',
    description: 'Aşk Ölçmeni sağlar.',
    usage: 'aşkölçer'
   }