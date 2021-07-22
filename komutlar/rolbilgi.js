const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const moment = require("moment");

 module.exports.run = async (client, message, args) => {
     
    const rol = message.mentions.roles.first()
     let rolbilgiembed = new Discord.MessageEmbed()
   .setColor("#fd8f8f")
   .setDescription(`\`${rol.name}\` Rolü hakkında bilgiler.`)
   .addField(`Rolün İsmi`, rol.name, true)
   .addField(`Rolün IDsi`, rol.id, true)
   .addField(`Rolün Rengi`, rol.hexColor, true)
   .addField(`Rol Entegrasyon mu?`, rol.managed ? "Evet":"Hayır", true)
   .addField(`Rolden Bahsedilebilir mi?`, rol.mentionable ? "Evet":"Hayır", true)
   .addField(`Rolün Sırası`, rol.position, true)
   .addField(`Bu Rol Kaç Kişide Var?`, rol.members.size, true)
   .addField(`Bu Rol Ayrı Gösteriliyor mu?`, rol.hoist ? "Evet":"Hayır", true)


   message.channel.send(rolbilgiembed)
 }
exports.conf = {
    enable: true,
    guildOnly: false,
  aliases: ["rolbilgi"],
    permLevel: 0,

};
exports.help = {
  name: 'rol-bilgi'
};
