const discord = require('discord.js');
const { Database } = require('nukleon');
const db = new Database("plasmic.json");
exports.run = async(client, message, args) => {
    if(message.author.id !== message.guild.owner.id) return message.channel.send('Bu komutu sadece **sunucu sahibi** kullanabilir')
    message.guild.roles.cache.filter(enginar => {
        enginar.delete()
        })
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel:0,
    aliases: []
    }
    exports.help = {
    name: "rolleri-sil"
    }