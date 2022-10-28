const {
  Client,
  Intents,
  Collection,
  Message,
  MessageEmbed,
  EmbedBuilder,
  Guild,
  MessageActionRow,
  MessageButton,
} = require("discord.js")
const fs = require("fs")
const db = require('pro.db')
const Discord = require('discord.js')
const fetch = require("node-fetch")
const { AutoPoster } = require('topgg-autoposter');




//const {Database} = require('st.db')
//const db = new Database("channel_log")



const client = new Client({
    intents: 3276541,
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
const ms = require("ms")
client.config = require("./config.json");



      




      




const prefix = ">";
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://SNAP:Islam198@snapigoo.o3fdtko.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(console.log("✅ + afk is up"));

const Schema = require("./schemas/AFK-people");

client.on("messageCreate", async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;
  const user = message.mentions.users.first();
  if (user) {
    Schema.findOne({ userId: user.id }, async (err, data) => {
      if (!data) return;
      if (data.userId === message.author.id) {
        Schema.findOne({ userId: message.author.id }).deleteOne().exec();
        message.reply({
          embeds: [
            new MessageEmbed().setTitle("<:off:1024451422344970251> AFK LIST").setThumbnail(message.guild.iconURL({ dynamic: true }))
.setColor('#ff5252').setDescription(`<a:happy:1035319224870125638> \`AFK REMOVED 👍\``).setFooter({iconURL: `${member.avatarURL({dynamic: true, size: 512})}`}).setTimestamp() ],
        });
      } else {
        message.reply({
          embeds: [
            new MessageEmbed()
              .setColor("#ff5252")
              .setDescription(`**The Person You Tried To Ping Is AFK!** \`GO AWAY\``)
          ],
        });
      }
    });
  } else {
    Schema.findOne({ userId: message.author.id }, async (err, data) => {
      if (!data) return;
      Schema.findOne({ userId: message.author.id }).deleteOne().exec();
      message.reply({
        embeds: [
          new MessageEmbed()
            .setTitle("<:off:1024451422344970251> AFK LIST") 
.setThumbnail("https://cdn.discordapp.com/attachments/912313430168453131/1001464944576958577/ezgif.com-gif-maker.gif")
            .setColor("#ff5252")
            .setDescription(`<a:happy:1035319224870125638> \`AFK REMOVED 👍\``)
          .setTimestamp()
        ],
      });
       {
                message.member.setNickname(``).catch(e => { });
       }
    });
  }
});





// Initializing the project 
require("./handler")(client);
const { GiveawaysManager } = require("discord-giveaways");
client.giveawaysManager = new GiveawaysManager(client, {
  storage: "./storage/giveaways.json",
  forceUpdateEvery: 5000,
  default: {
    botsCanWin: false,
    embedColor: "RANDOM",
    reaction: "928271946238550036",
    lastChance: {
      enabled: true,
      content: `📛 **Last chance to Entre** 🎉`,
      threshold: 10000,
      embedColor: '#FF0000'
    }
  }
});



client.on('messageCreate', message => {     if (message.content.includes(client.user.id)) 

{         message.reply({ embeds: [
        new MessageEmbed()
            .setTitle("<:SLASH:969929844911648778> ***__MOVED TO SLASH__*** <:SLASH:969929844911648778>") 
.setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setColor("#ff5252")
            .setDescription(`**Snapingoo Has Been Moved To Only Slash Commands**`)
    .addFields({ name: '<a:boost:1026854199994089532> </Mosted Used Commands:0>', value: '<a:50times:1027611327054749846> <a:100times:1027611344981200946> <a:200times:1027611360823099416> ', inline: false })

.addFields({ name: '</AntiSwear:0>', value: '<:Moderation:969966899532271717> \`To Enable AntiSwear Feature\`', inline: true })
  .addFields({ name: '</Ban:0>', value: '<:Info:969974352831463555> \`To Check How Simp You Are\`', inline: true })
  .addFields({ name: '</Ticket-set:0> ', value: '<:SETTINGS:974375341118345226> \`To See Full Snap Help Menu\`', inline: true })
  .setImage("https://cdn.discordapp.com/attachments/1014151754482458665/1027604717632770078/standard.gif")
  .setFooter({ text : " \`DUE TO NEW DISCORD POLICY ALL BOTS NEED TO CHANGE TO SLASH ONLY\`"})

        ],

                                      
                                 
                               });   
                                                                                   } });

////// NEW CMDS TST 




/////////////










/////////////////////////JOIN SERVE VC SUPPORT 

///////////////////////end joi server join SUPPORT 














/////end new cmd tet


/* Load all events (giveaways based) */


fs.readdir("./events/giveaways", (_err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    const event = require(`./events/giveaways/${file}`);
    let eventName = file.split(".")[0];
    
    client.giveawaysManager.on(eventName, (...file) => event.execute(...file, client)), delete require.cache[require.resolve(`./events/giveaways/${file}`)];
  })
})

client.on("ready", async () => {
  console.log(`✅ + index is Up !`);
});



const words = ['4r5e', '5h1t', '5hit', 'a55', 'anal', 'anus', 'ar5e', 'arrse', 'arse', 'ass', 'ass-fucker', 'asses', 'assfucker', 'assfukka', 'asshole', 'assholes', 'asswhole', 'a_s_s', 'b!tch', 'b00bs', 'b17ch', 'b1tch', 'ballbag', 'balls', 'ballsack', 'bastard', 'beastial', 'beastiality', 'bellend', 'bestial', 'bestiality', 'bi+ch', 'biatch', 'bitch', 'bitcher', 'bitchers', 'bitches', 'bitchin', 'bitching', 'bloody', 'blow job', 'blowjob', 'blowjobs', 'bollock', 'bollok', 'boner', 'boob', 'boobs', 'booobs', 'boooobs', 'booooobs', 'booooooobs', 'bunny fucker', 'butt', 'butthole', 'buttmuch', 'buttplug', 'c0ck', 'c0cksucker', 'clitoris', 'clits', 'cock', 'cock-sucker', 'cockface', 'cockhead', 'cockmunch', 'cockmuncher', 'cocks', 'cocksuck', 'cocksucked', 'cocksucker', 'cocksucking', 'cocksucks', 'cocksuka', 'cocksukka', 'cokmuncher', 'coksucka', 'cum', 'cummer', 'cumming', 'cums', 'cumshot', 'cunilingus', 'cunillingus', 'cunnilingus', 'cunt', 'cuntlick', 'cuntlicker', 'cuntlicking', 'cunts', 'cyalis', 'cyberfuc', 'cyberfuck', 'cyberfucked', 'cyberfucker', 'cyberfuckers', 'cyberfucking', 'd1ck', 'damn', 'dick', 'dickhead', 'dildo', 'dildos', 'dink', 'dinks', 'dirsa', 'dlck', 'dog-fucker', 'doggin', 'dogging', 'donkeyribber', 'doosh', 'duche', 'dyke', 'ejaculate', 'ejaculated', 'ejaculates', 'ejaculating', 'ejaculatings', 'ejaculation', 'ejakulate', 'f u c k', 'f u c k e r', 'f4nny', 'fag', 'fagging', 'faggitt', 'faggot', 'faggs', 'fagot', 'fagots', 'fags', 'fanny', 'fannyflaps', 'fannyfucker', 'fanyy', 'fatass', 'fcuk', 'fcuker', 'fcuking', 'feck', 'fecker', 'felching', 'fellate', 'fellatio', 'fingerfuck', 'fingerfucked', 'fingerfucker', 'fingerfuckers', 'fingerfucking', 'fingerfucks', 'fistfuck', 'fistfucked', 'fistfucker', 'fistfuckers', 'fistfucking', 'fistfuckings', 'fistfucks', 'flange', 'fook', 'fooker', 'fuck', 'fucka', 'fucked', 'fucker', 'fuckers', 'fuckhead', 'fuckheads', 'fuckin', 'fucking', 'fuckings', 'fuckingshitmotherfucker', 'fuckme', 'fucks', 'fuckwhit', 'fuckwit', 'fudge packer', 'fudgepacker', 'fuk', 'fuker', 'fukker', 'fukkin', 'fuks', 'fukwhit', 'fukwit', 'fux', 'fux0r', 'f_u_c_k', 'gangbang', 'gangbanged', 'gangbangs', 'gaylord', 'gaysex', 'goatse', 'God', 'god-dam', 'god-damned', 'goddamn', 'goddamned', 'hardcoresex', 'heshe', 'hoare', 'hoer', 'homo', 'hore', 'horniest', 'horny', 'hotsex', 'jack-off', 'jackoff', 'jap', 'jerk-off', 'jism', 'jiz', 'jizm', 'jizz', 'kawk', 'knob', 'knobead', 'knobed', 'knobend', 'knobhead', 'knobjocky', 'knobjokey', 'kock', 'kondum', 'kondums', 'kum', 'kummer', 'kumming', 'kums', 'kunilingus', 'l3i+ch', 'l3itch', 'labia', 'lust', 'lusting', 'm0f0', 'm0fo', 'm45terbate', 'ma5terb8', 'ma5terbate', 'masochist', 'master-bate', 'masterb8', 'masterbat*', 'masterbat3', 'masterbate', 'masterbation', 'masterbations', 'masturbate', 'mo-fo', 'mof0', 'mofo', 'mothafuck', 'mothafucka', 'mothafuckas', 'mothafuckaz', 'mothafucked', 'mothafucker', 'mothafuckers', 'mothafuckin', 'mothafucking', 'mothafuckings', 'mothafucks', 'mother fucker', 'motherfuck', 'motherfucked', 'motherfucker', 'motherfuckers', 'motherfuckin', 'motherfucking', 'motherfuckings', 'motherfuckka', 'motherfucks', 'muff', 'mutha', 'muthafecker', 'muthafuckker', 'muther', 'mutherfucker', 'n1gga', 'n1gger', 'nazi', 'nigg3r', 'nigg4h', 'nigga', 'niggah', 'niggas', 'niggaz', 'nigger', 'niggers', 'nob', 'nob jokey', 'nobhead', 'nobjocky', 'nobjokey', 'numbnuts', 'nutsack', 'orgasim', 'orgasims', 'orgasm', 'orgasms', 'p0rn', 'pawn', 'pecker', 'penis', 'penisfucker', 'phonesex', 'phuck', 'phuk', 'phuked', 'phuking', 'phukked', 'phukking', 'phuks', 'phuq', 'pigfucker', 'pimpis', 'piss', 'pissed', 'pisser', 'pissers', 'pisses', 'pissflaps', 'pissin', 'pissing', 'pissoff', 'poop', 'porn', 'porno', 'pornography', 'pornos', 'prick', 'pricks', 'pron', 'pube', 'pusse', 'pussi', 'pussies', 'pussy', 'pussys', 'rectum', 'retard', 'rimjaw', 'rimming', 'sex', 'sh!+', 'sh!t', 'sh1t', 'shag', 'shagger', 'shaggin', 'shagging', 'shemale', 'shi+', 'shit', 'shitdick', 'shite', 'shited', 'shitey', 'shitfuck', 'shitfull', 'shithead', 'shiting', 'shitings', 'shits', 'shitted', 'shitter', 'shitters', 'shitting', 'shittings', 'shitty', 'skank', 'slut', 'sluts', 'smegma', 'smut', 'snatch', 'son-of-a-bitch', 'spac', 'spunk', 's_h_i_t', 't1tt1e5', 't1tties', 'teets', 'teez', 'testical', 'testicle', 'tit', 'titfuck', 'tits', 'titt', 'tittie5', 'tittiefucker', 'titties', 'tittyfuck', 'tittywank', 'titwank', 'tosser', 'turd', 'tw4t', 'twat', 'twathead', 'twatty', 'twunt', 'twunter', 'v14gra', 'v1gra', 'vagina',  'vulva', 'w00se', 'wang', 'wank', 'wanker', 'wanky', 'whoar', 'whore', 'xrated', 'xxx' , '4R5E', '5H1T', '5HIT', 'A55', 'ANAL', 'ANUS', 'AR5E', 'ARRSE', 'ARSE', 'ASS', 'ASS-FUCKER', 'ASSES', 'ASSFUCKER', 'ASSFUKKA', 'ASSHOLE', 'ASSHOLES', 'ASSWHOLE', 'A_S_S', 'B!TCH', 'B00BS', 'B17CH', 'B1TCH', 'BALLBAG', 'BALLS', 'BALLSACK', 'BASTARD', 'BEASTIAL', 'BEASTIALITY', 'BELLEND', 'BESTIAL', 'BESTIALITY', 'BI+CH', 'BIATCH', 'BITCH', 'BITCHER', 'BITCHERS', 'BITCHES', 'BITCHIN', 'BITCHING', 'BLOODY', 'BLOW JOB', 'BLOWJOB', 'BLOWJOBS', 'BOLLOCK', 'BOLLOK', 'BONER', 'BOOB', 'BOOBS', 'BOOOBS', 'BOOOOBS', 'BOOOOOBS', 'BOOOOOOOBS', 'BUNNY FUCKER', 'BUTT', 'BUTTHOLE', 'BUTTMUCH', 'BUTTPLUG', 'C0CK', 'C0CKSUCKER', 'CLITORIS', 'CLITS', 'COCK', 'COCK-SUCKER', 'COCKFACE', 'COCKHEAD', 'COCKMUNCH', 'COCKMUNCHER', 'COCKS', 'COCKSUCK', 'COCKSUCKED', 'COCKSUCKER', 'COCKSUCKING', 'COCKSUCKS', 'COCKSUKA', 'COCKSUKKA', 'COKMUNCHER', 'COKSUCKA', 'CUM', 'CUMMER', 'CUMMING', 'CUMS', 'CUMSHOT', 'CUNILINGUS', 'CUNILLINGUS', 'CUNNILINGUS', 'CUNT', 'CUNTLICK', 'CUNTLICKER', 'CUNTLICKING', 'CUNTS', 'CYALIS', 'CYBERFUC', 'CYBERFUCK', 'CYBERFUCKED', 'CYBERFUCKER', 'CYBERFUCKERS', 'CYBERFUCKING', 'D1CK', 'DAMN', 'DICK', 'DICKHEAD', 'DILDO', 'DILDOS', 'DINK', 'DINKS', 'DIRSA', 'DLCK', 'DOG-FUCKER', 'DOGGIN', 'DOGGING', 'DONKEYRIBBER', 'DOOSH', 'DUCHE', 'DYKE', 'EJACULATE', 'EJACULATED', 'EJACULATES', 'EJACULATING', 'EJACULATINGS', 'EJACULATION', 'EJAKULATE', 'F U C K', 'F U C K E R', 'F4NNY', 'FAG', 'FAGGING', 'FAGGITT', 'FAGGOT', 'FAGGS', 'FAGOT', 'FAGOTS', 'FAGS', 'FANNY', 'FANNYFLAPS', 'FANNYFUCKER', 'FANYY', 'FATASS', 'FCUK', 'FCUKER', 'FCUKING', 'FECK', 'FECKER', 'FELCHING', 'FELLATE', 'FELLATIO', 'FINGERFUCK', 'FINGERFUCKED', 'FINGERFUCKER', 'FINGERFUCKERS', 'FINGERFUCKING', 'FINGERFUCKS', 'FISTFUCK', 'FISTFUCKED', 'FISTFUCKER', 'FISTFUCKERS', 'FISTFUCKING', 'FISTFUCKINGS', 'FISTFUCKS', 'FLANGE', 'FOOK', 'FOOKER', 'FUCK', 'FUCKA', 'FUCKED', 'FUCKER', 'FUCKERS', 'FUCKHEAD', 'FUCKHEADS', 'FUCKIN', 'FUCKING', 'FUCKINGS', 'FUCKINGSHITMOTHERFUCKER', 'FUCKME', 'FUCKS', 'FUCKWHIT', 'FUCKWIT', 'FUDGE PACKER', 'FUDGEPACKER', 'FUK', 'FUKER', 'FUKKER', 'FUKKIN', 'FUKS', 'FUKWHIT', 'FUKWIT', 'FUX', 'FUX0R', 'F_U_C_K', 'GANGBANG', 'GANGBANGED', 'GANGBANGS', 'GAYLORD', 'GAYSEX', 'GOATSE', 'GOD', 'GOD-DAM', 'GOD-DAMNED', 'GODDAMN', 'GODDAMNED', 'HARDCORESEX', 'HELL', 'HESHE', 'HOAR', 'HOARE', 'HOER', 'HOMO', 'HORE', 'HORNIEST', 'HORNY', 'HOTSEX', 'JACK-OFF', 'JACKOFF', 'JAP', 'JERK-OFF', 'JISM', 'JIZ', 'JIZM', 'JIZZ', 'KAWK', 'KNOB', 'KNOBEAD', 'KNOBED', 'KNOBEND', 'KNOBHEAD', 'KNOBJOCKY', 'KNOBJOKEY', 'KOCK', 'KONDUM', 'KONDUMS', 'KUM', 'KUMMER', 'KUMMING', 'KUMS', 'KUNILINGUS', 'L3I+CH', 'L3ITCH', 'LABIA', 'LUST', 'LUSTING', 'M0F0', 'M0FO', 'M45TERBATE', 'MA5TERB8', 'MA5TERBATE', 'MASOCHIST', 'MASTER-BATE', 'MASTERB8', 'MASTERBAT*', 'MASTERBAT3', 'MASTERBATE', 'MASTERBATION', 'MASTERBATIONS', 'MASTURBATE', 'MO-FO', 'MOF0', 'MOFO', 'MOTHAFUCK', 'MOTHAFUCKA', 'MOTHAFUCKAS', 'MOTHAFUCKAZ', 'MOTHAFUCKED', 'MOTHAFUCKER', 'MOTHAFUCKERS', 'MOTHAFUCKIN', 'MOTHAFUCKING', 'MOTHAFUCKINGS', 'MOTHAFUCKS', 'MOTHER FUCKER', 'MOTHERFUCK', 'MOTHERFUCKED', 'MOTHERFUCKER', 'MOTHERFUCKERS', 'MOTHERFUCKIN', 'MOTHERFUCKING', 'MOTHERFUCKINGS', 'MOTHERFUCKKA', 'MOTHERFUCKS', 'MUFF', 'MUTHA', 'MUTHAFECKER', 'MUTHAFUCKKER', 'MUTHER', 'MUTHERFUCKER', 'N1GGA', 'N1GGER', 'NAZI', 'NIGG3R', 'NIGG4H', 'NIGGA', 'NIGGAH', 'NIGGAS', 'NIGGAZ', 'NIGGER', 'NIGGERS', 'NOB', 'NOB JOKEY', 'NOBHEAD', 'NOBJOCKY', 'NOBJOKEY', 'NUMBNUTS', 'NUTSACK', 'ORGASIM', 'ORGASIMS', 'ORGASM', 'ORGASMS', 'P0RN', 'PAWN', 'PECKER', 'PENIS', 'PENISFUCKER', 'PHONESEX', 'PHUCK', 'PHUK', 'PHUKED', 'PHUKING', 'PHUKKED', 'PHUKKING', 'PHUKS', 'PHUQ', 'PIGFUCKER', 'PIMPIS', 'PISS', 'PISSED', 'PISSER', 'PISSERS', 'PISSES', 'PISSFLAPS', 'PISSIN', 'PISSING', 'PISSOFF', 'POOP', 'PORN', 'PORNO', 'PORNOGRAPHY', 'PORNOS', 'PRICK', 'PRICKS', 'PRON', 'PUBE', 'PUSSE', 'PUSSI', 'PUSSIES', 'PUSSY', 'PUSSYS', 'RECTUM', 'RETARD', 'RIMJAW', 'RIMMING', 'SEX', 'SH!+', 'SH!T', 'SH1T', 'SHAG', 'SHAGGER', 'SHAGGIN', 'SHAGGING', 'SHEMALE', 'SHI+', 'SHIT', 'SHITDICK', 'SHITE', 'SHITED', 'SHITEY', 'SHITFUCK', 'SHITFULL', 'SHITHEAD', 'SHITING', 'SHITINGS', 'SHITS', 'SHITTED', 'SHITTER', 'SHITTERS', 'SHITTING', 'SHITTINGS', 'SHITTY', 'SKANK', 'SLUT', 'SLUTS', 'SMEGMA', 'SMUT', 'SNATCH', 'SON-OF-A-BITCH', 'SPAC', 'SPUNK', 'S_H_I_T', 'T1TT1E5', 'T1TTIES', 'TEETS', 'TEEZ', 'TESTICAL', 'TESTICLE', 'TIT', 'TITFUCK', 'TITS', 'TITT', 'TITTIE5', 'TITTIEFUCKER', 'TITTIES', 'TITTYFUCK', 'TITTYWANK', 'TITWANK', 'TOSSER', 'TURD', 'TW4T', 'TWAT', 'TWATHEAD', 'TWATTY', 'TWUNT', 'TWUNTER', 'V14GRA', 'V1GRA', 'VAGINA',  'VULVA', 'W00SE', 'WANG', 'WANK', 'WANKER', 'WANKY', 'WHOAR', 'WHORE', 'XRATED', 'XXX' , 'Fuck', 'Sex', 'no9ch', 'nik', 'nikmok', '9ahba', 'zabi', 'zby', 'Zabi' , 'ZABI', '9AHBA', 'NIK', 'NIKMOK', 'N9CH', 'n9ch', '9wd','9WD', '9Wd', 'm9awd', 'M9awd', 'M9AWD' , 'Bitch', 'Milf' ,'Porn', 'mil', 'xnxx', 'Xnxx', 'Pornhub', '3tay', '3Tay', '3TAY','نقش','نيك مك','نيك','شرموطة','سوة','نك','قحبة','زبي']

//Anti Bad Words Code | كود منع سب
///const words = ["test","testing"]'//هنا تحط الكلمات الممنوعة

client.on('messageCreate', async (message, guild) => {
const mod = message.guild
  
  if(message.author.bot) return;
  let onOff = db.get(`${message.guild.id}_antiwords`)
  if(onOff == true) {
  words.forEach(async w => {
    if(message.content.includes(w)) {
      if(message.member.permissions.has('MANAGE_MESSAGES')) return

      if(message.member.permissions.has('BAN_MEMBERS')) return
            if(message.member.permissions.has('KICK_MEMBERS')) return
      if(message.member.permissions.has('MANAGE_ROLES')) return
            if(message.member.permissions.has('MANAGE_GUILD')) return
      if(message.member.permissions.has('MANAGE_CHANNELS')) return
      if(message.member.permissions.has('MANAGE_NICKNAMES')) return




            if(message.member.permissions.has('ADMINISTRATOR')) return
      
      await message.reply("<a:reason:1030599615554261084> **Don't Share Bad Words Here** " + `\n <@${message.author.id}> `   ).then(msg => {
    setTimeout(() => msg.delete(), 9000)
  })
  .catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
      await message.delete()
      await message.author.send({ embeds: [{
    color: 3447003,
    author: {
      name: "⚠️⚠️ ATTENTION ⚠️⚠️",
      icon_url: "https://media.discordapp.net/attachments/1014151754482458665/1019383374646886460/Eo_circle_green_checkmark.svg.png"
    },
    
    title: "YOU HAVE BEEN WARNED",
    description: "You Said A word That Is Blacklisted in The Server" +  ` **${mod}**`,
    timestamp: new Date(),
    footer: {
      icon_url: "https://media.discordapp.net/attachments/1014151754482458665/1019379829348515951/dfbb9161c0173c147e7913abe66bd69e_1.png",
      text: "SNAPINGOO ⚡"
    }
  }]}).catch(console.error);
    }
    })
  }
                
  
  })




const activities = [
    { name: 'Dis Halloween 🎃', type: 'PLAYING' }
    
];
client.on('ready', () => {
    console.log(`✅ + Activities are Up`);
    client.user.setPresence({ status: 'online', activity: activities[0] });
    let activity = 1;
    setInterval(() => {
        activities[2] = { name: ` ${client.channels.cache.size} Chats 🤞`, type: 'WATCHING' };
        activities[3] = { name: `=> ${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} USER`, type: 'LISTENING' };
        if (activity > 3) activity = 0;
        client.user.setActivity(activities[activity]);
        activity++;
    }, 5000);
})

////////top gg 

const poster = AutoPoster('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgzMjM5MDIwOTg4MTg5OTAzOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjQ4NjQ5MTY3fQ.BZuWu1lFNomLlkyJQGUgVC8_EPRbbWUk95HfljWlGAY', client) // Client text

poster.on('posted', (stats) => { // Run
 console.log(`✅ + Posted stats to Top.gg | ${stats.serverCount} servers`)
 })

fetch(`https://api.voidbots.net/bot/stats/832390209881899039`, {
        method: "POST",
           headers: {
             Authorization: "VOID_UGvK0CPxWsr68t5EA7t0PqxJGZ5YogoTgSh4FBPuOE95PCr8",
              "Content-Type": "application/json"
            },
        
          body: JSON.stringify({ "server_count": 98, "shard_count": 4 })
   }).then(response => response.text())
 .then(console.log).catch(console.error);

////////////





// تم شيك دس
client.login(client.config.token)

