const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "-";
const developers = ["469427192011423764"]
const adminprefix = "-";
client.on('message', message => {
    if (message.content.startsWith("-bc")) {
    if (message.channel.type === 'dm') return ;
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`:x: **| You Don't Have Permission 'ADMINSTRATOR' ليس لديك صلاحية **`)
    if(!message.guild.member(client.user).hasPermission('ADMINISTRATOR'))return message.channel.send(`**:x: | I Don't Have Permission 'ADMINSTRATOR' ليس لدي صلاحية **`)
    let args = message.content.split(' ').slice(1).join(' ')
    if (!args) return message.reply('You Must Write Message To Send Brodcast|يجب وضع رسالة لأرسال البرودكاست');
    message.reply(`**Are You Sure ? | [yes|نعم] | هل انت متاكد ؟**`).then(() => {
        message.channel.awaitMessages(msg => msg.content == 'yes' || msg.content == "نعم", {
            max: 1,
            time: 10000,
            errors: ['time']
        })
            .then(() => {
             message.channel.send('Wait... | ...انتظر قليلا').then(function(m) {
             setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓]1`)
             }, 1000)
             setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓]2%`)
             }, 3000)
               setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓]3%`)
             }, 5000)
             setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓]4%`)
             }, 7000)
               setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓]15%`)
             }, 9000)
               setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓]23%`)
             }, 10000)
               setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓▓▓▓]46%`)
             }, 12000)
               setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓▓▓▓▓]59%`)
             }, 14000)
               setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓▓▓▓▓▓▓]68%`)
             }, 16000)
                setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓▓▓▓▓▓▓▓▓]75%`)
             }, 18000)
                setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]87%`)
             }, 20000)
                setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]95%`)
             }, 21000)
                setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]96%`)
             }, 23000)
                setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]97%`)
             }, 24000)
                setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]98%`)
             }, 25000)
                setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]99%`)
             }, 26000)
                setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]100%`)
             }, 27000)
             setTimeout(function() {
               m.edit(`☑|I Sended The Message To ${message.guild.memberCount} | تم أرسال الرسالة لـ|☑`)
             }, 29000)
              }); 

                //message.guild.members.filter(m=> m.presence.status !== 'offline').forEach(m => {
                message.guild.members.forEach(m => {
						var bc = new Discord.RichEmbed()
						.setColor('RANDOM')
						.addField('Server :', message.guild.name)
						.addField('Sender :', message.author.username)
						.addField('Message : ', args)
						.setThumbnail(message.guild.iconURL)
						.setAuthor(message.author.username, message.author.avatarURL)
						m.send(bc)                

   
                });
            });
    });
}
 });
      

  client.on('message', message => {
    if (message.content.startsWith("-Link")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 10,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**تم ارسال الرابط على الخاص**")

message.author.send(`**مدة الرابط : يـوم
عدد استخدامات الرابط : 2**`)


    }
});


client.on('message', function(message) {
    if (message.content == "-clear") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})
        }
    }

});

  client.on('message', message => {
      if(message.content.startsWith ("-marry")) {
      if(!message.channel.guild) return message.reply('** This command only for servers **')
      var proposed = message.mentions.members.first()
     
      if(!message.mentions.members.first()) return message.reply(' ?? **لازم تطلب ايد وحدة**').catch(console.error);
      if(message.mentions.users.size > 1) return message.reply(' ?? **ولد ما يصحلك الا حرمة وحدة كل مرة**').catch(console.error);
       if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
        if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
              message.channel.send(`**${proposed} 
 بدك تقبلي عرض الزواج من ${message.author} 
 العرض لمدة 15 ثانية  
 اكتبي موافقة او لا**`)

const filter = m => m.content.startsWith("موافقة");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
    message.channel.send(` **${message.author} و ${proposed} الف الف مبروك الله , يرزقكم الذرية الصالحة** `);
})

   const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
   message.channel.send(`  **${message.author} تم رفض عرضك اعمل نفسك ميت** `);
})
        
  }
});

client.on('message',  (message) => {
        if(message.content.startsWith('-kf')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let slaps = [
    'https://i.giphy.com/media/3XlEk2RxPS1m8/giphy.gif',
    'https://i.giphy.com/media/mEtSQlxqBtWWA/giphy.gif',
    'https://i.giphy.com/media/j3iGKfXRKlLqw/giphy.gif',
    'https://i.giphy.com/media/2M2RtPm8T2kOQ/giphy.gif',
    'https://i.giphy.com/media/l3YSimA8CV1k41b1u/giphy.gif',
    'https://i.giphy.com/media/WLXO8OZmq0JK8/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} ضربك كف بنص وجهك ${user.username}!`,
      image: {
        url: slaps[Math.floor(Math.random() * slaps.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});



client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`**شكرا لك لاضافة البوت لسيرفرك فهو متواجد في**`)
         .addField("Servers :", client.guilds.size)
       .addField("Users :",  client.users.size)
	   .addField("Channels :", client.channels.size)
	   .addField("Bot Support : https://discord.gg/Dajw6FM")
	   .setFooter('DK BOT' , client.user.avatarURL)
      guild.owner.send(embed)
});

	client.on('guildDelete', guild => {
  var embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`**شكرا لك لاستعمال البوت فهو متواجد في **`)
       .addField("Servers :", client.guilds.size)
       .addField("Users :",  client.users.size)
	   .addField("Channels :", client.channels.size)
	   .addField("Bot Support : https://discord.gg/Dajw6FM")
	   .setFooter('DK BOT' , client.user.avatarURL)
      guild.owner.send(embed)
});



client.on('message', message => {

    if (message.content === "-mc") {
                        if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات ? ")
           });
             }
if (message.content === "-umc") {
    if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات?")
           });
             }



});


client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 

${member}  

**مرحبا بك بالسيرفر | Welcome To Server

Bot Name | اسم البوت : 👑ƵŦ Bot👑#6669 
Servers | السيرفرات : ${client.guilds.size} 🌍
Users | المستخدمين : ${client.users.size} 👥
Bot Prefix | بريفكس البوت : [-]
Help Command | امر المساعدة : -help
Owner Bot | صاحب البوت : LuZoNa#5083

لآضافة البوت من هاذا الرابط | You Can Invite Bot From This Link
**
https://discordapp.com/oauth2/authorize?scope=bot&client_id=547131839945637888&permissions=70642768
`) 
}).catch(console.error)
})


client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setplaying')) {
    client.user.setGame(argresult);
      message.channel.send(`**Done You Have Been Changed The Playing To ${argresult}**✅ `)
  } else 
     if (message.content === (adminprefix + "dkbotleave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setwatching')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**Done You Have Been Changed The Watching To ${argresult}**✅`)
  } else 
  if (message.content.startsWith(adminprefix + 'setlistening')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**Done You Have Been Changed The Listening To ${argresult}**✅`)
  } else 
  if (message.content.startsWith(adminprefix + 'setstreaming')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**Done You Have Been Changed The Streaming To ${argresult}**✅`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`**Changing The Name To ..${argresult}** ✅`)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`**Changing The Avatar To :${argresult}** ✅`);
}


});


 client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var DK = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setTitle('``I have received a new DM !``')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`From **${message.author.tag} (${message.author.id})**`)
    client.channels.get("548477685806923776").send({embed:DK});
    }
});   


  client.on('message', async message => {
  if(message.content.startsWith(prefix + "apply")) {
    await message.channel.send("**الاسم**").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.delete();
     message.channel.send('**العمر**').then(m => {
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        m.delete();
message.channel.send('**ماذا تستطيع ان تقدم للسيرفر**').then(ms => {
let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(col => {
  br = col.first().content
        col.first().delete()

ms.delete()

 message.channel.send('جاري التقديم ..').then(b => {
        setTimeout(() => {
  b.edit(`**تم التقديم وسيتم الرد فـ اقرب وقت**`)
        },2000);
var gg = message.guild.channels.find('name', 'التقديمات')
if(!gg) return;
if(gg) {
gg.send({embed : new Discord.RichEmbed()
.setDescription(`**  الاسم :question:  : \n ${lan}\nالعمر :link: :\n ${md} \n ماذا تستطيع ان تقدم للسيرفر :question: :\n ${br}  \nتم التقديم بواسطة  : <@${message.author.id}> **`)  
          .setFooter(`ادارة السيرفر`)
.setTimestamp()
});
}        
})
})
})
})
})
})
})
 }
})

client.on('message', message =>{
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let prefix = '-';
     
    if(cmd === `${prefix}report`){
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("Idk who 2 report ??");
        let reason = args.join(" ").slice(22);
        if(!reason) return message.channel.send("شو السبب ??");
    
        let reportEmbed = new Discord.RichEmbed()
        .setTitle("User just reported...")
        .setColor("#f7abab")
        .addField("- Reported User :", `${rUser} (${rUser.id})`)
        .addField("- Reported By :", `${message.author} (${message.author.id})`)
        .addField("- Reported In :", message.channel)
        .addField("- Report Time :", message.createdAt.toLocaleString(),true)
        .addField("- Reason :", reason);
    
        let reportschannel = message.guild.channels.find(`name`, "reports");
        if(!reportschannel) return message.channel.send("علشان ارد عليك Support Team يزلمه سوي روم اسمه");
    
    
        message.delete().catch(O_o=>{});
        message.author.send(`<@${rUser.id}>, Reported Successfully!!`)
        reportschannel.send(reportEmbed);
    };
});



client.on('guildCreate', guild => {
  client.channels.get("548460774096633867")
const embed = new Discord.RichEmbed()
   .setAuthor(`Joined New Server ✅`)
   .setDescription(`
Server name: __${guild.name}__
Server owner: __${guild.owner}__`)
         .setColor("#09fa2a")
         .setFooter('DK BOT' , client.user.avatarURL)
           client.channels.get("548460774096633867").send({embed});
}

);

         
client.on('guildDelete', guild => {
  client.channels.get("548460774096633867")
const embed = new Discord.RichEmbed()
   .setAuthor(`Left From Server ❌`)
   .setDescription(`
Server name: __${guild.name}__
Server owner: __${guild.owner}__`)
         .setColor("#ff0000")
         .setFooter('DK BOT' , client.user.avatarURL)
           client.channels.get("548460774096633867").send({embed});
}

);


client.on('message', message =>{
    let args = message.content.split(' ');
    let prefix = '-'; 
    
    if(args[0] === `${prefix}avatar`){
        let mentions = message.mentions.members.first()
        if(!mentions) {
          let sicon = message.author.avatarURL
          let embed = new Discord.RichEmbed()
          .setImage(message.author.avatarURL)
          .setColor("#f7abab") 
          .setDescription(`**${message.author.username}#${message.author.discriminator}**'s avatar :`);
          message.channel.send({embed})
        } else {
          let sicon = mentions.user.avatarURL
          let embed = new Discord.RichEmbed()
          .setColor("#f7abab")
          .setDescription(`**${mentions.user.username}#${mentions.user.discriminator}**'s avatar :`)
          .setImage(sicon)
          message.channel.send({embed})
        }
    };
});

client.on('message', message => {
    if (message.content.startsWith("-bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`${bans.size} عدد اشخاص المبندة من السيرفر `))
  .catch(console.error);
}
});

client.on("message", (message) => {
if (message.content.startsWith("-ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("يزلمه معيش اهدي الخاصيه اعطيني الخاصيه عشان اسويلك يلي بدك اياه");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});
client.on("message", (message) => {
if (message.content.startsWith("-cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("يزلمه معيش اهدي الخاصيه اعطيني الخاصيه عشان اسويلك يلي بدك اياه");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
}
});


client.on('message',async message => {
    if(message.content.startsWith(prefix + "setVoice")) {
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
    message.channel.send('✅| **تم عمل الروم بنجاح**');
    message.guild.createChannel(`Voice Quiet : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
      console.log(`Voice Quiet channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName(`Voice Quiet : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
      },1000);
    });
    }
  });
	
	
client.on("guildMemberAdd", member => {
  client.channels.find('id', '555787209563701259).send(`**welcome to 4K : [ ${member} ]**`)
});
	
	
client.on('message', message => {
    var prefix = "-";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }}});
 
  client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

}
});



client.on("message", function(message) {
let messageArray = message.content.split(" ");
let command = messageArray[0];
let anarg = message.content.split(' ').slice(1).join(' ')
         var currentTime = new Date(),
          hours = currentTime.getHours() + 2 ,
          minutes = currentTime.getMinutes(),
          seconds = currentTime.getSeconds(),
          Year = currentTime.getFullYear() - 2000,
          Month = currentTime.getMonth() + 1,
          Day = currentTime.getDate();
          var suffix = 'AM';
          if (hours >= 12) {
             suffix = 'PM';
              hours = hours - 12;
         }
          if (hours == 0) {
              hours = 12;
          }
let DM = new Discord.RichEmbed()
    .setColor("ORANGE")
    .addField("**•DM Messages**","**"+anarg+"**")
if(command === `-DM`) {
    if(!message.channel.guild) return
 if (message.author.id !== '469427192011423764') return message.reply('** This Command Only For Bot Owner هذا الأمر قفط لصاحب البوت و شكراًً **')
 if(!message.author.id === '469427192011423764') return;
    let toSend = message.mentions.users.first();
if(!toSend) return message.reply("** :x: |Sorry i Can't Find This Person | اسف لم اجد شخص بهاد الاسم| :x:** ")
    if(toSend.bot) return message.reply("**:x: |I Can't Send Message To Bot | لا أستطيع ارسال رسالة لبوت| :x:**");
    if(anarg < 1) return message.reply("**-_-** ");
    toSend.send({embed:DM});
    message.reply("**Done |✅| تم**")
 }
});




	


client.on('message', async msg => {
	if (msg.author.bot) return undefined;
	
	if (!msg.content.startsWith(prefix)) return undefined;
	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)

	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return 
		
		msg.channel.send('You Must Be In Voice Room | يجب توآجد حضرتك بروم صوتي ');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			
			return msg.channel.send('I Can Not Connect To This Room | لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('I Do Not Have Permission To Speak In This Room | لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}

		if (!permissions.has('EMBED_LINKS')) {
			return msg.channel.sendMessage("I Do Not Have Permission **EMBAD_LINKS** لا يـوجـد لـدي صلاحـيـة")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return msg.channel.send(`Added To PlayList Menu | **${playlist.title}** | تم الإضآفة إلى قأئمة التشغيل`);
		} else {
			try {

				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
					const embed1 = new Discord.RichEmbed()
			        .setDescription(`**الرجآء من حضرتك إختيآر رقم المقطع | Please Select Video Number **
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)

                  .setFooter('DK BOT' , client.user.avatarURL)
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
					
	
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('No Sound Track Selected | لم يتم إختيآر مقطع صوتي');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(' No Search Results Available :X: لا يتوفر نتآئج بحث ');
				}
			}

			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === `skip`) {
		if (!msg.member.voiceChannel) return msg.channel.send('You Are Not In Voice Room | أنت لست بروم صوتي');
		if (!serverQueue) return msg.channel.send('No Clip Available To Skip it | لا يتوفر مقطع لتجآوزه');
		serverQueue.connection.dispatcher.end('This Clip Has Been Skiped | تم تجآوز هذآ المقطع');
		return undefined;
	} else if (command === `stop`) {
		if (!msg.member.voiceChannel) return msg.channel.send('You Are Not In Voice Room | أنت لست بروم صوتي');
		if (!serverQueue) return msg.channel.send('No Clip Available To Stop it | لا يتوفر مقطع لإيقآفه');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('This Clip Has Been STopped | تم إيقآف هذآ المقطع');
		return undefined;
	} else if (command === `vol`) {
		if (!msg.member.voiceChannel) return msg.channel.send('You Are Not In Voice Room | أنت لست بروم صوتي');
		if (!serverQueue) return msg.channel.send('Nothing Works | لا يوجد شيء شغآل');
		if (!args[1]) return msg.channel.send(`:loud_sound: مستوى الصوت Volume Level**${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
		return msg.channel.send(`:speaker: تم تغير الصوت الي Volume Level Has Been Changed To **${args[1]}**`);
	} else if (command === `np`) {
		if (!serverQueue) return msg.channel.send('There Is Nothing Currently In Progress | لا يوجد شيء حالي ف العمل');
		const embedNP = new Discord.RichEmbed()
	.setDescription(`:notes: الان يتم تشغيل | Now It Is Running : **${serverQueue.songs[0].title}**`)
		return msg.channel.sendEmbed(embedNP);
	} else if (command === `queue`) {
		
		if (!serverQueue) return msg.channel.send('There Is Nothing Currently In Progress | لا يوجد شيء حالي ف العمل');
		let index = 0;
		
		const embedqu = new Discord.RichEmbed()

.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`)
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('Music paused | تم إيقاف الموسيقى مؤقتا');
		}
		return msg.channel.send('There Is Nothing Currently In Progress | لا يوجد شيء حالي ف العمل');
	} else if (command === "resume") {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('Music Resumed | استأنفت الموسيقى بالنسبة لك');
		}
		return msg.channel.send('لThere Is Nothing Currently In Progress | ا يوجد شيء حالي في العمل');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	

	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`لا أستطيع دخول هذآ الروم | i Can Not Enter This Room ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائمة | The Song Has Been Added To The Menu`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`Start | بدء تشغيل : **${song.title}**`);
}
	
	
	
	
	
	
client.on('message', message => {
const prefix = "-";
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("يزلمه معيش خاصية الطرد اعطيني الخاصيه").then(msg => msg.delete(5000));
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("يزلمه معيش خاصية الطرد اعطيني الخاصيه");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.reply("منشن شخص");
  if(!reason) return message.reply ("اكتب سبب الطرد");
  if (!message.guild.member(user)
  .bannable) return message.reply("لايمكنني طرد شخص اعلى من رتبتي");

  message.guild.member(user).kick(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor('Kicked !', user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("User:",  `[ + ${user.tag} + ]`)
  .addField("By:", `[  + ${message.author.tag} +  ]`)
  .addField("Reason:", `[ + ${reason} +  ]`)
  client.channels.get("469427192011423764").send({embed : banembed})
}
});

client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let mention = message.mentions.members.first();
    if(!mention) return  message.channel.send('').then(msg => { 
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(mention.id === message.author.id) return message.channel.send('**:x:You Cannot give mute to your self**').then(msg => {
      msg.delete(3500);
      message.delete(3500); 
    });
   
    if(mention.hasPermission('ADMINISTRATOR')) return message.channel.send(`**:x: لا يمكن آعطاء ميوت لادارة السيرفر**`); 
 
    if(message.guild.member(mention).roles.find('name', 'Muted')) return message.channel.send(`**:information_source: ${mention.user.username} Already Muted**`);
 
   
    if(mention.position >= message.guild.member(message.author).positon) return message.channel.send('You Donot Have Permission **Muted_Members** ').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
   
    if(mention.positon >= message.guild.member(client.user).positon) return message.channel.send('I Donot Have Permission **Muted_Members**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
   
    let duration = args[2];
    if(!duration) message.channel.send(`**:hash: You Can Use ${prefix}mute @user Time Reason**`).then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(isNaN(duration))  message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = " [ **لم يذكر لماذا** ] ";
 
    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('**تم آعطائك ميوت**')
    .addField('**__السيرفر__**',[ message.guild.name ]) 
    .addField('**__تم آعطائك ميوت بواسطة__**', [ message.author ])
    .addField('**__آلسبب__**',reason)
    .addField('**__وقت الميوت__**',duration)
 
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0 
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false,
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      }); 
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username}  Muted! :zipper_mouth:  **  `);
      mention.setMute(true); 
    });
    setTimeout(() => {
      if(duration === 0) return;
      mention.setMute(false);
      mention.removeRole(role)
    },duration * 60000); 
  }
});
client.on('message', async message => {
    let mention = message.mentions.members.first();
let command = message.content.split(" ")[0];
     command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);  
if(command === `unmute`) {2
  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**You Donot HavePermission Mute_Members**").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I donot Have Permission Mute_Members**").then(msg => msg.delete(6000))
 
  let kinggamer = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
     if(!kinggamer) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500); 
    });
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !kinggamer.roles.has(role.id)) return message.channel.sendMessage(`**:information_source:${mention.user.username} لقد تم فك الميوت عنه مسبقا**`)
 
  await kinggamer.removeRole(role) 
  message.channel.sendMessage(`**:white_check_mark: ${mention.user.username}  Unmuted! **`);
 
  return;
 
  }
 
});


  client.on('message', message => {
    if (message.content === "-rooms") {
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
        
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
    if (message.content === "-roles") {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('الرتب:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});
client.on('message' , message => {
  var prefix = "-";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);
 })
  }  
 });
 
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');


   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
client.on('message', message => {
    const prefix = '-'
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |??.";
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField(': ?? | اسمك',`**<@` + `${z.id}` + `>**`, true)
.addField(': ?? | ايديك', "**"+ `${z.id}` +"**",true)
.addField(': ? | Playing','**'+y+'**' , true)
.addField(': ?? | تاق حق حسابك',"**#" +  `${z.discriminator}**`,true)
.addField('**: ?? | التاريح الذي انشئ فيه حسابك**', message.author.createdAt.toLocaleString())
.addField("**: ? | تاريخ دخولك للسيرفر**", message.member.joinedAt.toLocaleString())    

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ? **').catch(console.error);

}

});

client.on("message", (message) => {
    /// ALPHA CODES
   if (message.content.startsWith("-new")) {     /// ALPHA CODES
        const reason = message.content.split(" ").slice(1).join(" ");     /// ALPHA CODES
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`لازم تسوي رتبة اسمها \`Support Team\` وتنطي البوت ادمنيتر حتا يقدر يسوي الرومات ويعدل برمشنات`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`); 
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: تم انشاء تذكرتك, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `الرجاء الانتظار ان شاء الله سيتم الرد عليك قريبا @support team`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("قفل")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`هل انت متأكد من اقفالك للتذكرة اذا متأكد اكتب نعم`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === 'نعم', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })    
                   .then((collected) => {
                       message.channel.delete();
                   })    
                   .catch(() => {
                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});
 

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : EX Clan`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : LuZoNa ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`-help | Test,"http://twitch.tv/DJ")
client.user.setStatus("dnd")
});
 
 


client.on("message", message => {
 if (message.content === "-help") {
  const embed = new Discord.RichEmbed()  
      .setColor("#FABE16") 
      		 .setFooter('DK BOT' , client.user.avatarURL)
      .setDescription(`
	  
	      **Select One:**
			 
**[ -help-public ✨  أوامر عامة ]**

**[ -help-admin 🙏 أوامر إدارية ]**
			 
**[ -help-games 🎮 أوامر الاألعاب ]**

**[ -help-info ✨ أوامر معلومات ]**

**[ -help-owner 🔒 أوامر صاحب البوت ]**
	  `)
   message.channel.sendEmbed(embed)
    
   }
   }); 


client.on("message", message => {
	var prefix = "-";
 if (message.content === "-help-public") {
    message.reply(`**
	
    شيك على الخاص
	 Check Your DM
	 **`)
  const here = new Discord.RichEmbed() 
      .setColor("GOLD")
      .setFooter('DK BOT' , client.user.avatarURL)
      .setDescription(`
**  📌 Public Commands | أوامر عامة 📌**
📍**-bot** = معلومات عن البوت | Bot Stats
📍**-mb** = معرفة حالة الاعضاء | Members Stats
📍**-say** = كتابة في امبيد | Write In Embad
📍**-ping** = سرعة اتصال البوت | Bot Ping
📍**-id** = الايدي | Your ID
📍**-perms** = لرؤية صلاحياتك | Your Permissions
📍**-rooms** = لرؤية كل الرومات | See All Rooms

`)
 message.author.sendEmbed(here)
}
   }); 


   client.on("message", message => {
	var prefix = "-";
 if (message.content === "-help-admin") {
    message.reply(`**
	
    شيك على الخاص
	 Check Your DM
	 **`)
  const here = new Discord.RichEmbed() 
      .setColor("GOLD")
      .setFooter('DK BOT' , client.user.avatarURL)
      .setDescription(`
 ** 📌 Admin Commands | أوامر إدارية 📌**
📍**-mute** = لأعطاء شخص ميوت | Mute Member
📍**-clear** = لمسح الشات | Clear ChaT
📍**-bc** = برودكاست للجميع | BroDCasT All MemBers
📍**-kick** = لطرد عضو | Kick MemBer
📍**-ban** = لتبنيد عضو | Ban MemBer
📍**-mc** = لقفل الشات | Mute ChanneL
📍**-umc** = لفتح الشات | UnMute ChanneL


`)
 message.author.sendEmbed(here)
}
   }); 
   
   

      client.on("message", message => {
	var prefix = "-";
 if (message.content === "-help-games") {
    message.reply(`**
	
    شيك على الخاص
	 Check Your DM
	 **`)
  const here = new Discord.RichEmbed() 
      .setColor("GOLD")
      .setFooter('DK BOT' , client.user.avatarURL)
      .setDescription(`
 ** 📌 Games Commands | أوامر الألعاب 📌**
📍**-marry**
`)
 message.author.sendEmbed(here)
}
   }); 


      client.on("message", message => {
	var prefix = "-";
 if (message.content === "-help-owner") {
	  if (message.author.id !== '469427192011423764') return message.reply(' :x: **You Are Not Bot Owner | أنت لست صاحب البوت** :x: ')
 if(!message.author.id === '469427192011423764') return;
    message.reply(`**
	
    شيك على الخاص
	 Check Your DM
	 **`)
  const here = new Discord.RichEmbed() 
      .setColor("GOLD")
	  .setFooter('DK BOT' , client.user.avatarURL)
      .setDescription(`
 ** 📌 Owner Commands | أوامر الأونر 📌**
📍**-ownerbot**
📍**-setplaying**
📍**-setlistening**
📍**-setwatching**
📍**-setstreaming**
📍**-setname**
📍**-setavatar**
📍**-DM**
`)
 message.author.sendEmbed(here)
}
   }); 




      client.on("message", message => {
	var prefix = "-";
 if (message.content === "-help-info") {
    message.reply(`**
	
    شيك على الخاص
	 Check Your DM
	 **`)
  const here = new Discord.RichEmbed() 
      .setColor("GOLD")
	  .setFooter('DK BOT' , client.user.avatarURL)
      .setDescription(`
 ** 📌 Info Commands | معلومات عامة 📌**
📍 **باللغة العربية :**

انشئ روم بأسم **welcome**
ليرحب البوت بكل واحد يدخل السيرفر

انشئ روم بأسم **left**
ليودع البوت كل واحد يغادر السيرفر

انشئ روم بأسم **suggestions**
سيكون الروم مخصص للاقتراحات 
لحتى يتمكنوا الاعضاء من الاقتراح
يجب استخدام هذا الامر **-sug**


📍 **English Language :**

Create a **welcome ** Room
To welcome the bot every one enters the server

Create a **left** Room
To put out the bot each one leaves the server

Create a **suggestions** Room
The room will be for suggestions
Even members can Suggest
Members must use this command **-sug**
`)
 message.author.sendEmbed(here)
}
   }); 



      client.on('message', message => {
    if (message.content.startsWith("-afk")) {
if(!message.channel.guild) return;
if(!message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES")) return message.reply("i Don't Have Permission ``MANAGE_NICKNAMES`` :x: ")
      if(message.highestRole >= message.guild.member(client.user).highestRole.positon) return message.reply('**Your Rank HIGH OF My Rank**')
    if(!message.guild.owner) return message.reply("You Are Server Owner");
   message.member.setNickname('[AFK]-'+message.author.username)
      message.reply("**You Are Now AFK... **")
   
    }});
    
       client.on('message', message => {
    if (message.content.startsWith("-back")) {
if(!message.channel.guild) return;
if(!message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES")) return message.reply("i Don't Have Permission ``MANAGE_NICKNAMES`` :x: ")
   if(!message.guild.owner) return message.reply("You Are Server Owner");
   message.member.setNickname('')
   message.reply("**You Longer AFK... Welcome Back**")
   
    }});


 
client.login(process.env.BOT_TOKEN);
