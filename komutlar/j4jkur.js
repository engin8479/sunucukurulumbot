const discord = require('discord.js');
exports.run = async(client, message, args) => {
    if(message.author.id !== message.guild.owner.id) return message.channel.send('Bu komutu sadece **sunucu sahibi** kullanabilir')
message.guild.channels.cache.filter(enginar => {
enginar.delete()
})
message.guild.channels.create("özel-chat", "text").then(özelkanal => {
    özelkanal.updateOverwrite(özelkanal.guild.roles.everyone, { VIEW_CHANNEL: false });
    })
message.guild.channels.create('▬▬ J4J ▬▬', { type: 'category'}).then(katagori1 => {
message.guild.channels.create("🎀・j4j fast", "text").then(fastj4j => {
fastj4j.setParent(katagori1.id)
})
message.guild.channels.create("🎀・j4j ads", "text").then(adsj4j => {
    adsj4j.setParent(katagori1.id)
})
message.guild.channels.create("🎀・j4j bot reports", "text").then(reportj4j => {
    reportj4j.setParent(katagori1.id)
})
})
message.guild.channels.create('▬▬ ANNOUNCEMENTS ▬▬', { type: 'category'}).then(katagori1 => {
    message.guild.channels.create("📜・kurallar", "text").then(kurallar => {
        kurallar.setParent(katagori1.id)
    })
    message.guild.channels.create("📢・duyurular", "text").then(duyurular => {
        duyurular.setParent(katagori1.id)
    })
    message.guild.channels.create("🎁・Reklam", "text").then(reportj4j => {
        reportj4j.setParent(katagori1.id)
    })
    message.guild.channels.create("🏆・Yenilikler").then(yenilikler=> {
    yenilikler.setParent(katagori1.id)
    })
    message.guild.channels.create("🥇・level log").then(level => {
    level.setParent(katagori1.id)
    })
})
message.guild.channels.create('▬▬ USER CHANNELS ▬▬', { type: 'category'}).then(katagori2 => {
    message.guild.channels.create("💬・Sohbet").then(sohbet => {
    sohbet.setParent(katagori2.id)
    })
    message.guild.channels.create("🎨・galeri").then(galeri => {
    galeri.setParent(katagori2.id)
    })
message.guild.channels.create("💼・bot komut").then(komut => {
komut.setParent(katagori2.id)
})
})
message.guild.channels.create('▬▬ ADS ▬▬', { type: 'category'}).then(katagori3 => {
message.guild.channels.create("🎪・Exay-Esports").then(reklam => {
reklam.setParent(katagori3)
const embed = new discord.MessageEmbed()
.setTitle('Exay-Esports #Code #Botlist')
.setURL("https://discord.gg/W2ZjTfQBBG")
.setDescription('Harika kodlar, altyapılar ve sunucumuza bot ekletmek isteyen herkesi bekleriz!')
reklam.send(embed)
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
    name: "j4j-sunucu-kur"
    }