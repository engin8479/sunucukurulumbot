const discord = require('discord.js');
exports.run = async(client, message, args) => {
    if(message.author.id !== message.guild.owner.id) return message.channel.send('Bu komutu sadece **sunucu sahibi** kullanabilir')
message.guild.channels.cache.filter(enginar => {
enginar.delete()
})
message.guild.channels.create("özel-chat", "text").then(özelkanal => {
    özelkanal.updateOverwrite(özelkanal.guild.roles.everyone, { VIEW_CHANNEL: false });
    })
message.guild.channels.create('▬▬ NİTRO GİVEAWAY ▬▬', { type: 'category'}).then(katagori1 => {
message.guild.channels.create("🎉・Nitro 1").then(nitro => {
nitro.setParent(katagori1.id)
})
message.guild.channels.create("🎉・Nitro 2").then(nitro1 => {
    nitro1.setParent(katagori1.id)
    })
    message.guild.channels.create("🎉・Nitro 3").then(nitro2 => {
        nitro2.setParent(katagori1.id)
        })
    })
message.guild.channels.create("▬▬ ANNOUNCEMENTS ▬▬", {type: 'category'}).then(katagori2 => {
message.guild.channels.create("📜・Rules").then(rules => {
rules.setParent(katagori2.id)
})
message.guild.channels.create("📢・Announcements").then(duyurular => {
duyurular.setParent(katagori2.id)
})
message.guild.channels.create("🚧・Boost").then(boost => {
boost.setParent(katagori2.id)
})
message.guild.channels.create("🔎・Proofs").then(proof => {
proof.setParent(katagori2.id)
})
message.guild.channels.create("⭐・Vouches").then(vouches => {
vouches.setParent(katagori2.id)
})
message.guild.channels.create("🌙・Supports").then(support => {
support.setParent(katagori2.id)
})
message.guild.channels.create("🎪・Special").then(special => {
special.setParent(katagori2.id)
})
})
message.guild.channels.create("▬▬ GİVEAWAY ▬▬", {type: 'category'}).then(katagori3 => {
message.guild.channels.create("🎉・Giveaway 1").then(giveaway1 => {
giveaway1.setParent(katagori3.id)
})
message.guild.channels.create("🎉・Giveaway 2").then(giveaway2 => {
    giveaway2.setParent(katagori3.id)
    })
    message.guild.channels.create("🎉・Giveaway 3").then(giveaway3 => {
        giveaway3.setParent(katagori3.id)
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
    name: "reward-sunucu-kur"
    }