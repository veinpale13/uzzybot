const Discord = require('discord.js');//
const client = new Discord.Client();//
const ayarlar = require('./ayarlar.json');//
const chalk = require('chalk');//
const moment = require('moment');//
var Jimp = require('jimp');//
const { Client, Util } = require('discord.js');//
const fs = require('fs');//
const db = require('quick.db');//
const express = require('express');//
require('./util/eventLoader.js')(client);//
const path = require('path');//
const snekfetch = require('snekfetch');//
const ms = require('ms');//
const tags = require('common-tags')
//

var prefix = ayarlar.prefix;//
//
const log = message => {//
    console.log(`${message}`);//
};

client.commands = new Discord.Collection();//
client.aliases = new Discord.Collection();//
fs.readdir('./komutlar/', (err, files) => {//
    if (err) console.error(err);//
    log(`‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
    ${files.length} komut yüklenecek.
‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒`);//
    files.forEach(f => {//
        let props = require(`./komutlar/${f}`);//
        log(`[KOMUT] | ${props.help.name} Eklendi.`);//
        client.commands.set(props.help.name, props);//
        props.conf.aliases.forEach(alias => {//
            client.aliases.set(alias, props.help.name);//
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }

    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });
client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});
client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

//------------------------------------------------------------------------------------------------------------\\

client.on("message", message => {
    if(message.content.toLowerCase() == ".naz") 
    return message.channel.send(`**Nammm Nammm Nammm**`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".naz2") 
    return message.channel.send(`**Tek haneli IQ seviyesine sahip ama MÜKEMMEL BİR İNSAN 🤍**`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".mükemmelliyet") 
    return message.channel.send(`**<@732373977657245778>**`)
});


client.on("message", message => {
    if(message.content.toLowerCase() == ".uzay") 
    return message.channel.send(`💰**SUGAR DADDY**💰`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".uzay2") 
    return message.channel.send(`**KİMSELER BAŞ@ HAHAHAHAHAHAHYYTT**`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".kurucum") 
    return message.channel.send(`**🤍🖤  <@355301540682006528>   🖤🤍**`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".instagram") 
    return message.channel.send(`**☑️ _uzay.dll**`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".yiğit") 
    return message.channel.send(`**Yiğit mi? Hani şu uzay'ın OROSPUSU olan mı?**`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".ayça") 
    return message.channel.send(`**Ayça mı? Hani şu dünyalar tatlısı olan :D ** <@796821448231747584>`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".ipek") 
    return message.channel.send(`**I PEK KILLEEEEEEERRRR**`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".ipek2") 
    return message.channel.send(`**Uzay'ın kelebeği**`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".davet") 
    return message.channel.send(`**Botumuzu Sunucunuza Davet Edebilirsiniz.** https://discord.com/oauth2/authorize?client_id=834559309764362301&scope=bot&permissions=805314622  `)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".bjk") 
    return message.channel.send(`**🦅🤍 EN BÜYÜK BEŞİKTAŞŞŞŞŞŞŞ 🤍🦅**`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".şampiyon") 
    return message.channel.send(`**🦅🤍 BEŞİKTAŞŞŞŞŞŞŞ 🤍🦅**`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".rita") 
    return message.channel.send(`**AYYY GÖTÜMMMM :)**`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".hatun") 
    return message.channel.send(`**Aaaa Has Hatun Gelmişş :))**`)
});


//------------------------------------------------------------------------------------------------------------\\

client.on("message", message => {
    if(message.content.toLowerCase() == "sa") 
    return message.channel.send(`${message.author}, **Aleyküm Selam.**`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "selamın aleyküm") 
    return message.channel.send(`${message.author}, **Aleyküm Selam.**`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "selam") 
    return message.channel.send(`${message.author}, **Selam hoşgeldin.**`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "merhaba") 
    return message.channel.send(`${message.author}, **Merhaba hoşgeldin.**`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "uzay") 
    return message.channel.send(`**Uzay adamdır :heart: :heart:**`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "uzayy") 
    return message.channel.send(`**Suyun içinde klorür senin kalbinde bir ömür...**`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == " <@355301540682006528> ") 
    return message.channel.send(`${message.author}, **Bebeğim, Ruhum, Bir tanemi neden etiketliyorsun bilader??**`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "s.a") 
    return message.channel.send(`${message.author}, **Aleyküm Selam.**`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "mrb") 
    return message.channel.send(`${message.author}, **Aleyküm Selam.**`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "slm") 
    return message.channel.send(`${message.author}, **Selam hoşgeldin.**`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "günaydın") 
    return message.channel.send(`${message.author}, **Günaydın canım gününde senin gibi güzel geçsin.**`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "murat") 
    return message.channel.send(`${message.author}, **Murat bey diyeceksiniz.**`)
});

//------------------------------------------------------------------------------------------------------------\\


client.on("message" , async msg => {
  
  if(!msg.guild) return;
  if(msg.content.startsWith(ayarlar.prefix+"afk")) return; 
  
  let afk = msg.mentions.users.first()
  
  const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)
  
  const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
 if(afk){
   const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)
   const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
   if(msg.content.includes(kisi3)){

       msg.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`<@` + msg.author.id + `> Etiketlediğin Kişi Afk \nSebep : ${sebep}`))
   }
 }
  if(msg.author.id === kisi){

       msg.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`<@${kisi}> Başarıyla Afk Modundan Çıktınız`))
   db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
    msg.member.setNickname(isim)
    
  }
  
});


//--------------------------------------------------------------------------------------\\

client.on('guildMemberAdd', async(member) => {
let rol = member.guild.roles.cache.find(r => r.name === "CEZALI ROLÜNÜN ADI NEYSE YAZ");
let cezalımı = db.fetch(`cezali_${member.guild.id + member.id}`)
let sürejail = db.fetch(`süreJail_${member.id + member.guild.id}`)
if (!cezalımı) return;
if (cezalımı == "cezali") {
member.roles.add(ayarlar.JailCezalıRol)
 
member.send("Cezalıyken Sunucudan Çıktığın için Yeniden Cezalı Rolü Verildi!")
 setTimeout(function(){
    // msg.channel.send(`<@${user.id}> Muten açıldı.`)
db.delete(`cezali_${member.guild.id + member.id}`)
    member.send(`<@${member.id}> Cezan açıldı.`)
    member.roles.remove('cezalı rol id');
  }, ms(sürejail));
}
})

//--------------------------------------------------------------------------------------\\

client.on('guildMemberAdd', async(member) => {
let mute = member.guild.roles.cache.find(r => r.name === "MUTELİ ROLÜNÜN ADI NEYSE YAZ");
let mutelimi = db.fetch(`muteli_${member.guild.id + member.id}`)
let süre = db.fetch(`süre_${member.id + member.guild.id}`)
if (!mutelimi) return;
if (mutelimi == "muteli") {
member.roles.add(ayarlar.MuteliRol)
 
member.send("Muteliyken Sunucudan Çıktığın için Yeniden Mutelendin!")
 setTimeout(function(){
    // msg.channel.send(`<@${user.id}> Muten açıldı.`)
db.delete(`muteli_${member.guild.id + member.id}`)
    member.send(`<@${member.id}> Muten açıldı.`)
    member.roles.remove('muteli rol id');
  }, ms(süre));
}
})

//--------------------------------------------------------------------------------------\\


client.on('guildMemberAdd', async member => {
const data = require('quick.db')
const asd = data.fetch(`${member.guild.id}.jail.${member.id}`)
if(asd) {
let data2 = await data.fetch(`jailrol_${member.guild.id}`)
let rol = member.guild.roles.cache.get(data2)
if(!rol) return;
let kişi = member.guild.members.cache.get(member.id)
kişi.roles.add(rol.id);
kişi.roles.cache.forEach(r => {
kişi.roles.remove(r.id)
data.set(`${member.guild.id}.jail.${kişi.id}.roles.${r.id}`, r.id )})
    data.set(`${member.guild.id}.jail.${kişi.id}`)
  const wasted = new Discord.MessageEmbed()
  .setAuthor(member.user.tag, member.user.avatarURL({ dynamic : true }))
  .setColor(`#0x800d0d`)
  .setDescription(`Dostum hadi ama !!! Jaildan Kaçamazsın ikimizde birbirimizi kandırmayalım...!`)
  .setTimestamp()
    member.send(wasted)
} 
  
  
})

//--------------------------------------------------------------------------------------\\

client.on("message", async msg => {
  
  
 const i = await db.fetch(`kufur_${msg.guild.id}`)
    if (i == "acik") {
        const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "napim", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "amm", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "", "amq", "s2m",];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                          
                      return msg.channel.send(new Discord.MessageEmbed().setDescription(`${msg.author} Kardeşim sen hayırdır? bu ne saygısızlık.`).setColor('0x800d0d').setAuthor(msg.member.displayName, msg.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});

client.on("messageUpdate", (oldMessage, newMessage) => {
  
  
 const i = db.fetch(`${oldMessage.guild.id}.kufur`)
    if (i) {
        const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "", "amq","amguard","seksüel","sekssüel"];
        if (kufur.some(word => newMessage.content.includes(word))) {
          try {
            if (!oldMessage.member.hasPermission("BAN_MEMBERS")) {
                  oldMessage.delete();
                          
                      return oldMessage.channel.send(new Discord.MessageEmbed().setDescription(`${oldMessage.author} Kardeşim sen hayırdır? bu ne saygısızlık.`).setColor('0x800d0d').setAuthor(oldMessage.member.displayName, oldMessage.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});


//--------------------------------------------------------------------------------------\\


//--------------------------------------------------------------------------------------\\

client.on("message", msg => {
 if(!db.has(`reklam_${msg.guild.id}`)) return;
        const reklam = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",];
        if (reklam.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                    return msg.channel.send(new Discord.MessageEmbed().setDescription(`${msg.author} Bu sunucuda reklam filtresi etkin.`).setColor('0x800d0d').setAuthor(msg.member.displayName, msg.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
 
  msg.delete(3000);                              
 
            }              
          } catch(err) {
            console.log(err);
          }
        }
    });

//--------------------------------------------------------------------------------------\\

client.on('messageDelete', message => {
  const data = require("quick.db")
  data.set(`snipe.mesaj.${message.guild.id}`, message.content)
  data.set(`snipe.id.${message.guild.id}`, message.author.id)

})

client.on("ready", () =>{
    client.channels.cache.get('848876324906467330').join()
    })


client.on('ready', () => {
  var botdurum = [
"👌🏼 :)))))))",      
"👑 Twitch: Veinpalle",      
"👽 Veinpale",
"💰 Mutlak değer içindeki X gibiyim.",
   //Burdaki Maddeleri Kendinize Göre Değiştirin 
]


setInterval(function() {

        var random = Math.floor(Math.random()*(botdurum.length-0+1)+0);
       client.user.setActivity(botdurum[random], { type: 'LISTENING' });
        }, 1 * 3000);//3000 Yerine Kaç Saniyede Değişmesini İstedini Kendinize Göre Ayarlayabilirsiniz 1000=1 Saniye Olarak 
  console.log(`Hareketli Durum Çalışıyor. `);




});

client.on('guildMemberAdd', member => {
    const girişçıkış = member.guild.channels.cache.find(channel => channel.name === '「genel・sohbet」');
    girişçıkış.send(`**Aramıza Hoş Geldin **, ${member}`).then(x => x.delete({timeout: 5000}))
    
});

client.on('guildMemberRemove', member => {
    const girişçıkış = member.guild.channels.cache.find(channel => channel.name === 'gi̇ri̇ş-çikiş');
    girişçıkış.send(`**Güle Güle :(** ${member}`);
});

client.on('messageDelete', message => {
    const data = require("quick.db")
    data.set(`snipe.mesaj.${message.guild.id}`, message.content)
    data.set(`snipe.id.${message.guild.id}`, message.author.id)
  
  })

client.login(ayarlar.json)