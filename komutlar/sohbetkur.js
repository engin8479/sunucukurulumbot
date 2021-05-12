const discord = require('discord.js');
exports.run = async(client, message, args) => {
    if(message.author.id !== message.guild.owner.id) return message.channel.send('Bu komutu sadece **sunucu sahibi** kullanabilir')
    message.guild.channels.cache.filter(enginar => {
        enginar.delete()
        })
message.guild.channels.create("özel-chat", "text").then(özelkanal => {
    özelkanal.updateOverwrite(özelkanal.guild.roles.everyone, { VIEW_CHANNEL: false });
    })
message.guild.channels.create('▬▬ ÖNEMLİ ▬▬', { type: 'category'}).then(katagori1 => {
message.guild.channels.create("📜・Kurallar", "text").then(kurallar => {
const embed = new discord.MessageEmbed()
.setTitle(':book:  Sunucu Kuralları  :book:')
.setDescription(`:clipboard:  Küfür ve argo yasaktır. \n \n :clipboard:  +18 konuşmak yasaktır. \n  \n :clipboard:  Dm reklam, self bot gibi sunucuya zararı dokunacak şeyleri yapmak yasaktır. \n \n :clipboard:  Unutmayın her kural yazılı olarak belirtilmek zorunda değildir!`)
kurallar.send(embed)
kurallar.setParent(katagori1.id)
})
message.guild.channels.create("📢・Duyurular", "text").then(duyuru => {
duyuru.setParent(katagori1.id)
})
message.guild.channels.create("🔰・Hoşgeldin", "text").then(hg => {
    hg.setParent(katagori1.id)
    })
    message.guild.channels.create("🔢・Sayaç", "text").then(sayaç => {
        sayaç.setParent(katagori1.id)
        })
message.guild.channels.create("📊・Oylama", "text").then(oylama => {
    oylama.setParent(katagori1.id)
    })
    message.guild.channels.create("🎉・Çekilişler", "text").then(giveaway => {
        giveaway.setParent(katagori1.id)
        })
})
message.guild.channels.create('▬▬ KULLANICI ▬▬', { type: 'category'}).then(katagori2 => {
message.guild.channels.create("💬・sohbet", "text").then(sohbet => {
sohbet.setParent(katagori2)
})
message.guild.channels.create("🎀・galeri", "text").then(galeri => {
galeri.setParent(katagori2)
})
message.guild.channels.create("🚧・bot-komut", "text").then(botkomut => {
botkomut.setParent(katagori2)
})
message.guild.channels.create("⭐・sunucu-destek").then(destek => {
destek.setParent(katagori2)
})
})
message.guild.channels.create('▬▬ SES ▬▬', { type: 'category'}).then(katagori3 => {
    message.guild.channels.create('🔊・Sohbet 1',{ type: 'voice'}).then(sohbet1 => {
    sohbet1.setParent(katagori3)
    })
    message.guild.channels.create('🔊・Sohbet 2',{ type: 'voice'}).then(sohbet2 => {
        sohbet2.setParent(katagori3)
        })
        message.guild.channels.create('🔊・Sohbet 3',{ type: 'voice'}).then(sohbet3 => {
            sohbet3.setParent(katagori3)
            })
            message.guild.channels.create('🔓・Toplantı 1',{ type: 'voice'}).then(toplantı => {
                toplantı.setParent(katagori3)
                })
                message.guild.channels.create('🔓・Toplantı 2',{ type: 'voice'}).then(toplantı1 => {
                    toplantı1.setParent(katagori3)
                    })
})
message.guild.roles.create({ data: { name: 'Muted', permissions: [] , color: "BLUE"} })
message.guild.roles.create({ data: { name: 'Üye', permissions: ['VIEW_CHANNEL', 'SEND_MESSAGES'] , color: "GREEN"} })
message.guild.roles.create({ data: { name: 'Özel üye', permissions: ['VIEW_CHANNEL', 'SEND_MESSAGES'] , color: "YELLOW"} })
message.guild.roles.create({ data: { name: 'Destek ekibi', permissions: [] , color: "PURPLE"} })
message.guild.roles.create({ data: { name: 'Mod', permissions: [] , color: "BROWN"} })
message.guild.roles.create({ data: { name: 'Admin', permissions: [] , color: "YELLOW"} })
message.guild.roles.create({ data: { name: 'Kurucu', permissions: [] , color: "YELLOW"} }).then(rol => {
client.guilds.cache.get(message.guild.id).members.cache.get(message.guild.owner.id).roles.add(rol)
})
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel:0,
    aliases: []
    }
    exports.help = {
    name: "sohbet-sunucu-kur"
    }