const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log(
    `Az Önce Bot Ping yedi, Sorun önemli değil merak etme. Hatayı düzelttik.`
  );
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const db = require('quick.db')
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const fs = require("fs");
const moment = require("moment");
moment.locale("tr")
const chalk = require("chalk");
require("./util/eventLoader")(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
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

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login( process.env.token);
////////////OtoCevap

//Nihad Design


const data = new Map();


//kurucunun mesajina tepki client olan / asagidakilarin hamisi eyni komutdu  // ADMIN MESAJLARINA TEPKI BASLANGIC



client.on('message', async msg => {  // admin simgesi
if (msg.author.id == '289464872222064651') {
await msg.react('826692052477542421')
}
});






//oz profilim benzer botu  tanitma ve sese soxma


//gif pp botumuzun tanaitmak ve sese sokmak 

const gifpp = new Discord.Client();
gifpp.login("Nzg0MDEyNDI3MzkzNDk5MTU3.X8jGeA.iAFZW0Pp02bzLleM321zbWYIu0o")//Hesap Tokeni Token

gifpp.on('ready', ()=>{
  setTimeout(() => {
gifpp.channels.cache.get('762566208070746149').join()// bi deq düzeldirem
     }, 1000)
})


// -------------------------------------------------------------------------------------------------------------

//BURDAN BUYAN UJE BLACK COFFEE AITDIR 

//EVVELA BASLIYAH BOTLARIMIZI TANIMLAYAG

//Barmen
// Fast Food
// Sinema
//Garson

const Barmen = new Discord.Client();
const FastFood = new Discord.Client();
const Sinema = new Discord.Client();
const Garson = new Discord.Client();
const Cafe = new Discord.Client();
const BlackCoffee = new Discord.Client();
const InternetCafe = new Discord.Client();
const ClupDj = new Discord.Client();




BlackCoffee.login("NzIzNjMyMTI1ODM2MDAxNDA2.Xu0c7w.eMBKEUu8sDc1i492JJOF1gAES2Y")//Hesap Tokeni Token
Barmen.login("NzczMDY2MTU3MjcxMjg1Nzcw.X6Dz9g.PtvWiUvitbqB0cQIORJWVX6OEv4")//Hesap Tokeni Token
FastFood.login("Nzc5NzcwMDc5NjY2NTAzNzUw.X7lXeg.yZg49zRSSKgt2hW2PEAs-8o5Gvo")//Hesap Tokeni Token
Sinema.login("NzczMDY2MjY2ODQ4MTMzMTgx.X6D0EA.msvUDsWabkx2RfOHSCe4yV2yt9E")//Hesap Tokeni Token
Garson.login("NzczMDY1NjEyMTIwODE3NjY2.X6DzdA.HQDY2NyovpxfbuBguS6Amo7Ae2U")//Hesap Tokeni Token
Cafe.login("NzIzMDU3ODk5ODk0NjAzNzg2.XusGJQ.1ohr3yPqonHLYWPxtET1CaQTTBA")//Hesap Tokeni Token
InternetCafe.login("Nzg1OTk3MTQ4NzA1MTI4NDU5.X8_-4w.Egp_TMy8u8mdmsXk-1r9BfkhDBg")//Hesap Tokeni Token
ClupDj.login("Nzg2MDU5MzM1NTExMDQ4MjIy.X9A4zQ.It76txU9TEP-KR74B-JPTI70znM")//Hesap Tokeni Token


BlackCoffee.on("ready", async () => {
   log("Durum başarıyla ayarlandı")
      BlackCoffee.user.setActivity("☕ Black Coffee 🖤", 
        { url: 'https://twitch.tv/.',
        type: 'STREAMING' }); 
})


Barmen.on("ready", async () => {
   log("Durum başarıyla ayarlandı")
      Barmen.user.setActivity("☕ Black Coffee 🖤", 
        { url: 'https://twitch.tv/.',
        type: 'STREAMING' }); 
})

FastFood.on("ready", async () => {
   log("Durum başarıyla ayarlandı")
      FastFood.user.setActivity("☕ Black Coffee 🖤", 
        { url: 'https://twitch.tv/.',
        type: 'STREAMING' }); 
})

Sinema.on("ready", async () => {
   log("Durum başarıyla ayarlandı")
      Sinema.user.setActivity("☕ Black Coffee 🖤", 
        { url: 'https://twitch.tv/.',
        type: 'STREAMING' }); 
})


Garson.on("ready", async () => {
   log("Durum başarıyla ayarlandı")
      Garson.user.setActivity("☕ Black Coffee 🖤", 
        { url: 'https://twitch.tv/.',
        type: 'STREAMING' }); 
})

Cafe.on("ready", async () => {
   log("Durum başarıyla ayarlandı")
      Cafe.user.setActivity("☕ Black Coffee 🖤", 
        { url: 'https://twitch.tv/.',
        type: 'STREAMING' }); 
})

InternetCafe.on("ready", async () => {
   log("Durum başarıyla ayarlandı")
      InternetCafe.user.setActivity("☕ Black Coffee 🖤", 
        { url: 'https://twitch.tv/.',
        type: 'STREAMING' }); 
})

ClupDj.on("ready", async () => {
   log("Durum başarıyla ayarlandı")
      ClupDj.user.setActivity("☕ Black Coffee 🖤", 
        { url: 'https://twitch.tv/.',
        type: 'STREAMING' }); 
})



BlackCoffee.on('ready', ()=>{
  setTimeout(() => {
BlackCoffee.channels.cache.get('834265543233765377').join()// bi deq düzeldirem
     }, 1000)
})


Barmen.on('ready', ()=>{
  setTimeout(() => {
Barmen.channels.cache.get('834341550925283349').join()// bi deq düzeldirem
     }, 1000)
})

FastFood.on('ready', ()=>{
  setTimeout(() => {
FastFood.channels.cache.get('834412947161612288').join()// bi deq düzeldirem
     }, 1000)
})

Sinema.on('ready', ()=>{
  setTimeout(() => {
Sinema.channels.cache.get('834342051926900776').join()// bi deq düzeldirem
     }, 1000)
})

Garson.on('ready', ()=>{
  setTimeout(() => {
Garson.channels.cache.get('834335926041051136').join()// bi deq düzeldirem
     }, 1000)
})

Cafe.on('ready', ()=>{
  setTimeout(() => {
Cafe.channels.cache.get('834406495592251412').join()// bi deq düzeldirem
     }, 1000)
})

InternetCafe.on('ready', ()=>{
  setTimeout(() => {
InternetCafe.channels.cache.get('834428840105082930').join()// bi deq düzeldirem
     }, 1000)
})

ClupDj.on('ready', ()=>{
  setTimeout(() => {
ClupDj.channels.cache.get('834700632358780938').join()// bi deq düzeldirem
     }, 1000)
})



//HG MESAJI


BlackCoffee.on('guildMemberAdd', (member, msg) => {
  const moment = require('moment')
	let günler = {
      "0": "Pazar",
      "1": "Pazartesi",
      "2": "Salı",
      "3": "Çarşamba",
      "4": "Perşembe",
      "5": "Cuma",
      "6": "Cumartesi",
	}
	  let aylar = {
			"01": "Ocak",
			"02": "Şubat",
			"03": "Mart",
			"04": "Nisan",
			"05": "Mayıs",
			"06": "Haziran",
			"07": "Temmuz",
			"08": "Ağustos",
			"09": "Eylül",
			"10": "Ekim",
			"11": "Kasım",
			"12": "Aralık"
    }
  let endAt = member.user.createdAt
      let gün = moment(new Date(endAt).toISOString()).format('DD')
      let ay = moment(new Date(endAt).toISOString()).format('MM').replace("01", "Ocak").replace("02","Şubat").replace("03","Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10","Ekim").replace("11","Kasım").replace("12","Aralık")
     let yıl =  moment(new Date(endAt).toISOString()).format('YYYY')
     let saat = moment(new Date(endAt).toISOString()).format('HH:mm')
let kuruluş = `${gün} ${ay} ${yıl} ${saat}`
   // let kuruluş = moment(user.author.createdAt).format('YYYY-MM-DD HH:mm:ss')
	//let kuruluş = user.createdAt.toDateString().replace("Sun","Pazar").replace("Mon","Pazartesi").replace("Tue","Salı").replace("Wed","Çarşamba").replace("Thu","Perşembe").replace("Fri","Cuma").replace("Sat","Cumartesi").replace("Jan","Ocak").replace("Feb","Şubat").replace("Mar","Mart").replace("Apr","Nisan").replace("May","Mayıs").replace("June","Haziran").replace("July","Temmuz").replace("Aug","Ağustos").replace("Sep","Eylül").replace("Oct","Ekim").replace("Nov","Kasım").replace("Dec","Aralık")   
	let oskobs = new Discord.MessageEmbed()
	.setColor("BLACK")
    .setDescription(`<a:44re:826680866214248458>** <@${member.id}> Aramıza Hoşgeldin Seninle Birlikte** \`${member.guild.memberCount}\` **Üyeye Ulaştık** \n<a:55ef4:802030217173401611>**Sunucumuzda Kanalları Görebilmen İçin Kayıt Olman Gerekli Bunun İçin İse Yanda Bulunan Ses Kanallarına Girerek Kayıt Olabilirsin**\n<a:balacasiemoji:728876419966304267>  **<@&834152265173958717> Adı Rolüne Sahip Kişiler Kayıt İşlemlerinle İlgilenecektir**\n <a:3_:826674876495560755> **Hesap Kuruluş Tarihi :** \`${kuruluş}\``)
.setImage("https://i.pinimg.com/originals/73/f7/ac/73f7ac7c4e48673ff7cb922a3a5705ff.gif")  
BlackCoffee.channels.cache.get("834334765947289610").send(oskobs)//kanalid
})




//tag

//tag yazanda tag atacaq

BlackCoffee.on("message" , async message => {

if(message.content==="tag")

message.channel.send("☕")
if(message.content != "☕") return
message.react("795235519444942869")

})



BlackCoffee.on("message" , async message => {

if(message.content==="TAG")

message.channel.send("☕")
if(message.content != "☕") return
message.react("795235519444942869")

})

BlackCoffee.on("message" , async message => {

if(message.content==="+tag")

message.channel.send("☕")
if(message.content != "☕") return
message.react("795235519444942869")

})

BlackCoffee.on("message" , async message => {

if(message.content==="!tag")

message.channel.send("☕")
if(message.content != "☕") return
message.react("795235519444942869")

})

//oto cevaplar


////////////////
BlackCoffee.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "sea") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin <a:AleykumSelamm:823672703814336552> ** "
    );
  }
});
////////////////
BlackCoffee.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "Sea") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin <a:AleykumSelamm:823672703814336552> ** "
    );
  }
});
//////////////
BlackCoffee.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "selam") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin  <a:AleykumSelamm:823672703814336552> ** "
    );
  }
});
////////////////
BlackCoffee.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "Selam") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin <a:AleykumSelamm:823672703814336552> ** "
    );
  }
});
///////////////
BlackCoffee.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "Selamun Aleyküm") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin  <a:AleykumSelamm:823672703814336552> ** "
    );
  }
});

////////////
BlackCoffee.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "selamlar") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin  <a:AleykumSelamm:823672703814336552> ** "
    );
  }
});
//////////////
BlackCoffee.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "selamunaleyküm") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin <a:AleykumSelamm:823672703814336552> ** "
    );
  }
});
/////////////////
BlackCoffee.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "SelamunAleyküm") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin <a:AleykumSelamm:823672703814336552> ** "
    );
  }
});

//////////////
BlackCoffee.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "Selamun Aleyküm") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin <a:AleykumSelamm:823672703814336552> ** "
    );
  }
});

//////////////
BlackCoffee.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "Sa") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin <a:AleykumSelamm:823672703814336552> ** "
    );
  }
});

//////////////
BlackCoffee.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "SA") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin <a:AleykumSelamm:823672703814336552> ** "
    );
  }
});

//////////////
BlackCoffee.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "sa") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin **  <a:AleykumSelamm:823672703814336552> "
    );
  }
});

BlackCoffee.on("message" , async message => {

if(message.content==="Selamm")

message.channel.send("**Aleyküm Selam Hoşgeldin **  <a:AleykumSelamm:823672703814336552>")

})

BlackCoffee.on('ready', ()=>{
BlackCoffee.channels.cache.get('834692262624886824').startTyping()
})

//https://discord.gg/8rSC4Sj4CW

BlackCoffee.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "link") {
    msg.reply(
      "https://discord.gg/RhjqbJG5C2"
    );
  }
});

BlackCoffee.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "LINK") {
    msg.reply(
      "https://discord.gg/RhjqbJG5C2"
    );
  }
});

BlackCoffee.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "Link") {
    msg.reply(
      "https://discord.gg/RhjqbJG5C2"
    );
  }
});


//Garson botunun sistemi



Garson.on("message" , async message => {

if(message.content==="Cola")

message.channel.send("https://media3.giphy.com/media/v2YxCO2pwHjji/giphy.gif")
if(message.content != "Burger") return
message.react("heavy_check_mark")

})

Garson.on("message" , async message => {

if(message.content==="Çay")

message.channel.send("https://media1.tenor.com/images/256e1e27e061c5fb1a571099bb324975/tenor.gif?itemid=17825685")
if(message.content != "Burger") return
message.react("heavy_check_mark")

})






//Barmen Botunun sistemi

Barmen.on("message" , async message => {

if(message.content==="Votka")

message.channel.send("https://i0.wp.com/harikalardiyarikackini.com/wp-content/uploads/2019/12/bartender.gif?resize=480%2C238&ssl=1")
if(message.content != "Burger") return
message.react("heavy_check_mark")

})


Barmen.on("message" , async message => {

if(message.content==="Cappuccino")

message.channel.send("https://img.paratic.com/dosya/2017/01/kahvenizi-de-alip-soyle-guzel-bir-balkon-sefasi-yapin.gif")
if(message.content != "Burger") return
message.react("heavy_check_mark")

})






//FastFood Botunun sistemi


FastFood.on("message" , async message => {

if(message.content==="Burger")

message.channel.send("https://data.whicdn.com/images/287381454/original.gif")
if(message.content != "Burger") return
message.react("heavy_check_mark")

})

FastFood.on("message" , async message => {

if(message.content==="Pizza")

message.channel.send("https://media1.giphy.com/media/4ayiIWaq2VULC/200.gif")
if(message.content != "Burger") return
message.react("heavy_check_mark")

})

FastFood.on("message" , async message => {

if(message.content==="Lahmacun")

message.channel.send("https://media.tenor.com/images/2e8c18a9702ecb97c84ca84d8243dacd/tenor.gif")
if(message.content != "Burger") return
message.react("heavy_check_mark")

})


FastFood.on("message" , async message => {

if(message.content==="Patates")

message.channel.send("https://media.discordapp.net/attachments/834692262624886824/835031887822192680/patates-kizartmasi.gif?width=400&height=240")
if(message.content != "Burger") return
message.react("heavy_check_mark")

})







//Sinema Botunun sistemi










//Garson Botunun sistemi

Garson.on("message" , async message => {

if(message.content==="Döner")

message.channel.send("https://thumbs.gfycat.com/AmbitiousHastyHoneycreeper-size_restricted.gif")
if(message.content != "Burger") return
message.react("heavy_check_mark")

})

Garson.on("message" , async message => {

if(message.content==="Rakı")

message.channel.send("https://64.media.tumblr.com/60ca335c819c3edc9f6f6669b710b517/tumblr_inline_p27g1zYwsj1u429ij_500.gifv")
if(message.content != "Burger") return
message.react("heavy_check_mark")

})

Garson.on("message" , async message => {

if(message.content==="Puding")

message.channel.send("https://media.discordapp.net/attachments/827698885279219743/835046039110156288/OfBa.gif?width=400&height=226")
if(message.content != "Burger") return
message.react("heavy_check_mark")

})


Garson.on("message" , async message => {

if(message.content==="Pasta")

message.channel.send("https://media.discordapp.net/attachments/827698885279219743/835046277870911488/ee8211ae85f8f741a280fe323fe26b56.gif?width=200&height=250")
if(message.content != "Burger") return
message.react("heavy_check_mark")

})






//Cafe Botunun sistemi


Cafe.on("message" , async message => {

if(message.content==="Pancake")

message.channel.send("https://media1.tenor.com/images/15881949a61fa73092a544b63c412f23/tenor.gif?itemid=9338685")
if(message.content != "Burger") return
message.react("heavy_check_mark")

})

Cafe.on("message" , async message => {

if(message.content==="Omlet")

message.channel.send("https://thumbs.gfycat.com/AppropriateSadAsianlion-size_restricted.gif")
if(message.content != "Burger") return
message.react("heavy_check_mark")

})

Cafe.on("message" , async message => {

if(message.content==="Simit")

message.channel.send("https://i.pinimg.com/originals/75/c0/fd/75c0fd328a5f287272b0e91c73d6e409.gif")
if(message.content != "Burger") return
message.react("heavy_check_mark")

})


Cafe.on("message" , async message => {

if(message.content==="Tost")

message.channel.send("https://i.pinimg.com/originals/86/da/f8/86daf88c3937ffaacf532fb186067f3e.gif")
if(message.content != "Burger") return
message.react("heavy_check_mark")

})





//InternetCafe Botunun sistemi










//ClupDj Botunun sistemi



//T K SECRET INSAN HESAOLARINA OXSAYAN BOTLAR

const Farketmez = new Discord.Client();
const Aero = new Discord.Client();
const Rotwein = new Discord.Client();
const Dark = new Discord.Client();


Farketmez.login("Nzk4NzUzMjg4NjA2MDU2NTA4.X_5m-A._zicoZsxAVrUA_z2Y3l9XdqZ9SE")//Hesap Tokeni Token
Aero.login("Nzk5MDcyNjQ5ODM3Njc0NTM2.X_-QZQ.gbM3LI2RZn8_xOO3JcLzHWsE-QM")//Hesap Tokeni Token
Rotwein.login("ODM1NjEwNjE4ODk4OTM5OTQ1.YIR9CA.ZlJHzKvKmo2vF7wiBp9USZ722-g")//Hesap Tokeni Token
Dark.login("ODM1NjA5MzQ2NTMyNDQyMTcy.YIR72Q.4yVK319vTEzBogxXKL19d2fVgcc")//Hesap Tokeni Token




Farketmez.on('ready', ()=>{
  setTimeout(() => {
Farketmez.channels.cache.get('835495220253818881').join()// bi deq düzeldirem
     }, 1000)
})

Aero.on('ready', ()=>{
  setTimeout(() => {
Aero.channels.cache.get('835495220253818881').join()// bi deq düzeldirem
     }, 1000)
})

Rotwein.on('ready', ()=>{
  setTimeout(() => {
Rotwein.channels.cache.get('835495220253818881').join()// bi deq düzeldirem
     }, 1000)
})

Dark.on('ready', ()=>{
  setTimeout(() => {
Dark.channels.cache.get('835495220253818881').join()// bi deq düzeldirem
     }, 1000)
})



//Entry card bilgiler ve dm log

const Entrycard = new Discord.Client();

Entrycard.login("ODM1NzU2ODI5MDQ4NTY5ODU3.YIUFMw.1mCI0F9b-GeGqUNuvkC02UP9hrE")//Hesap Tokeni Token


Entrycard.on("ready", async () => {
   log("Durum başarıyla ayarlandı")
      Entrycard.user.setActivity("☕ Black Coffee 🖤", 
        { url: 'https://twitch.tv/.',
        type: 'STREAMING' }); 
})

Entrycard.on("message", msg => {
var dm = Entrycard.channels.cache.get("835773848191893534")
if(msg.channel.type === "dm") {
if(msg.author.id === client.user.id) return;
const botdm = new Discord.MessageEmbed()
.setTitle(`<a:ewe:834693611277910056> Yeni Bir Mesajım Var`)
.setTimestamp()
.setColor("black")
.setThumbnail(`${msg.author.avatarURL()}`)
.addField("Müşteri <a:bu:835770486616883200>", msg.author.tag)
.addField("Müşteri ID <a:buu:835770486754639872>", msg.author.id)
.addField("Sipariş <a:buuu:835770497110114325>", msg.content)

dm.send(botdm)

}
if(msg.channel.bot) return;
});


Entrycard.on('ready', ()=>{
Entrycard.channels.cache.get('835752555786665994').startTyping()
})

Entrycard.on('ready', ()=>{
Entrycard.channels.cache.get('835752617288269875').startTyping()
})

Entrycard.on('ready', ()=>{
Entrycard.channels.cache.get('835773848191893534').startTyping()
})


//





