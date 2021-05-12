const discord = require('discord.js');
const { Database } = require('nukleon');
const db = new Database("plasmic.json");
exports.run = async(client, message, args) => {
const embed = new discord.MessageEmbed()
.setTitle(':book:  Sunucu Kurulum :book:')
.setDescription(`:tools:  !kanalları-sil = Sunucudaki kanalları siler. \n \n :tools:  !rolleri-sil = Sunucudaki rolleri siler. \n \n :tools:  !j4j-sunucu-kur = J4j sunucu kurar. \n \n :tools:  !sohbet-sunucu-kur = Sohbet sunucu kurar. \n \n :tools:  !reward-sunucu-kur = Reward sunucu kurar.`)
return message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel:0,
    aliases: []
    }
    exports.help = {
    name: "yardım"
    }