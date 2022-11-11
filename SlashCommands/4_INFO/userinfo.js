const { Client, MessageEmbed , MessageActionRow, MessageButton} = require("discord.js");
const { default: fetch } = require("node-fetch");
module.exports = {
    name: "userinfo",
    description: "See Full Userinfo",
             	usage: '/userinfo',
	category: 'information',
    options: [
        {
            name: 'user',
            description: 'member to get info about him',
            type: 'USER',
            required: false
        }
    ],
    run: async (client, interaction, args, guild) => {
const us = interaction.options.getUser('user')  || interaction.user 
      const channel = interaction.channel
            if (!interaction.guild.me.permissionsIn(channel).has("VIEW_CHANNEL")) 
   return interaction.editReply({    embeds: [
            new MessageEmbed()
              .setColor("RANDOM")                .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                               
          .setDescription(`<a:false:1007956851532505188> \`I DON'T HAVE SEND_MESSAGES , VIEW_CHANNEL PERMISSION.\` `) 
.setTimestamp()

                   
          ],
                ephemeral: true,
              });
              

      if (!interaction.guild.me.permissionsIn(channel).has("SEND_MESSAGES")) 
   return interaction.editReply({    embeds: [
            new MessageEmbed()
              .setColor("RANDOM")                .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                               
          .setDescription(`<a:false:1007956851532505188> \`I DON'T HAVE SEND_MESSAGES , VIEW_CHANNEL PERMISSION.\` `) 
.setTimestamp()

                   
          ],
                ephemeral: true,
              });
      
      const statuses = {
  "online" : "<:sonline:1032759559418290239>",
  "idle" : "<:sidel:1032759535342981181>",
  "dnd" : "<:sdnd:1032759510261055528>",
  "offline" : "<:soffline:1032759585989218324>",
      }
      let { member, channelId, guildId, applicationId, commandName, deferred, replied, ephemeral, options, id, createdTimestamp } = interaction; 
    	
		let user = options.getUser("user");
		if(!user) user = member.user;

            const flags = {
      DISCORD_EMPLOYEE: `<:staff:1032389164781535283>`,
      DISCORD_PARTNER: `<:partner:1032389163883974767>`,
      BUGHUNTER_LEVEL_1: `<:bughunter:1032389170489991250>`,
      BUGHUNTER_LEVEL_2: `<:bug2:1032389186516418590>`,
      HYPESQUAD_EVENTS: `<:hypesquad:1032389178035539968>`,
      HOUSE_BRAVERY: `<:bravery:1032389181785260114>`,
      HOUSE_BRILLIANCE: `<:brilliant:1032389180740862043>`,
      HOUSE_BALANCE: `<:balance:1032389175107919913>`,
      EARLY_SUPPORTER: `<:early:1032389189108518962>`,
      TEAM_USER: `<:staff:1032389164781535283>`,
      DISCORD_CERTIFIED_MODERATOR: `<:Moderation:969966899532271717>`,
      VERIFIED_BOT: `<:verifedbot:1032389169357541396>`,
      VERIFIED_DEVELOPER: `<:dev:1032389185182646432>`,
       ACTIVE_DEVELOPER: `<:ACTIVEDEVELOPER:1040730103480598593>`,       
NITRO: `<:nitro:1032389176668209162>`,
               
   BOOSTER_1: `<:booster:1032389179327397978>`,
   BOOSTER_2: "<:badge3:1032389172385816648>", 
   BOOSTER_3: "<:badge1:1032389187766337586>", 
   BOOSTER_4: "<:badge2:1032389183462973510>", 
   BOOSTER_5: "<:badge4:1032389166761250937>", 
   BOOSTER_6: "<:12month:1032441593791250513>", 
   BOOSTER_7: "<a:15month:1032441613504483348>", 
   BOOSTER_8: "<:18month:1032449360472047718>", 
   BOOSTER_9: "<:24months:1032441644563316746>",

    };



const target =
      interaction.options.getMember("user") || interaction.member;
    const userFlags = target.user.flags.toArray();

const response = await fetch( 
       `https://japi.rest/discord/v1/user/${us.id}` 
     );
          const data = await response.json(); //public_flags_array
        const badges = data.data.public_flags_array 
       ? data.data.public_flags_array.map((flag) => flags[flag]).join(" ") 
       : "No Badges.";

const bio = data.data.bio
      
          
         const u = interaction.options.getUser('user')  || interaction.user 
        var uu = interaction.guild.members.cache.get(u.id)
        var ee = new MessageActionRow().addComponents(
            new MessageButton()
        .setLabel(`Main info`)
        .setEmoji(`<:hous:1032396542314819705>`)
        .setCustomId(`main`)
        .setDisabled(true)
        .setStyle(`DANGER`),
        new MessageButton()
             .setLabel(`Roles info`)
             .setStyle(`PRIMARY`)
             .setEmoji(`<:emoji_78:1032376070432882699>`)
             .setCustomId(`roles`),
             new MessageButton()
             .setLabel(`Permissions`)
             .setStyle(`PRIMARY`)
             .setEmoji(`<a:4458animatedexclamation:969958530817876028>`)
             .setCustomId(`permissions`)
        
          ); 
       var e = new MessageEmbed()
       .setAuthor({name:`${u.username}#${u.discriminator}`, 
 iconURL: `${u.avatarURL({dynamic: true, size: 512})}`})
       .addField(`<:bot_owner:969929848158035968> • Name : `,`\`${u.username}\``,true)
       .addField(`<:PINNED:969929845268168774> • User id : `,`\`${u.id}\``,true)
       .addField(`<a:tmm:1030599659724480512> • Account created : `,`<t:${parseInt(u.createdAt / 1000)}:R>`,true)
       .addField(` <a:Member_count:969929561028571216> • Server Joined : `,`<t:${parseInt(uu.joinedAt / 1000)}:R>`,true)
       
       
         .addField(`<a:badges:1032441668219183214> • BADGE : `,`==> ${badges}`,true)
.addField(`💬 • User bio : `,`\`${bio}\``,true)
         .addField(`<:emoji_21:964500521178247228> • PRESENCE : `,`==> ${statuses[data.presence.status]} ${data.presence.status}`,true)
       .setColor(`#303134`)
       .setThumbnail(`${u.displayAvatarURL({size : 1024 , dynamic : true})}`)
      interaction.followUp({embeds : [e] , components : [ee]})
       var f = i => i.customId === `main` || i.customId === `roles`  && i.u.id === interaction.author.id
       var c = interaction.channel.createMessageComponentCollector({ f, time: 30000 });
       c.on(`collect`, i => {
           i.deferUpdate()
        if (i.customId === 'main') {
            interaction.followUp({embeds : [e] , components : [ee], ephemeral: true,})
        }
        if(i.customId === `roles`) {
            var eeee = new MessageActionRow().addComponents(
                new MessageButton()
            .setLabel(`• Main info`)
            .setEmoji(`<:hous:1032396542314819705>`)
            .setCustomId(`main`)
            .setDisabled(false)
            .setStyle(`PRIMARY`),
            new MessageButton()
                 .setLabel(`• Roles info`)
                 .setStyle(`DANGER`)
                 .setEmoji(`<:emoji_78:1032376070432882699>`)
                 .setDisabled(true)
                 .setCustomId(`roles`),
                 new MessageButton()
                 .setLabel(`• Permissions`)
                 .setStyle(`PRIMARY`)
                 .setEmoji(`<a:4458animatedexclamation:969958530817876028>`)
                 .setCustomId(`permissions`)
              ); 
            var eee = new MessageEmbed()
            .setAuthor(`${u.username}`,`${u.avatarURL({dynamic : true}) }`)
          .addField(`Roles : `,`${uu.roles.cache.map(r => r).sort((first, second) => second.position - first.position).join(`, `)}`,true)
          .addField(`Highest role : `,`${uu.roles.highest}`,true)
            .setColor(`#303134`)
            .setThumbnail(`${u.displayAvatarURL({size : 1024 , dynamic : true})}`)
            interaction.followUp({embeds : [eee] , components : [eeee], ephemeral: true,})
        }
        if(i.customId === `permissions`) {
            var eeeee = new MessageActionRow().addComponents(
                new MessageButton()
            .setLabel(`• Main info`)
            .setEmoji(`<:hous:1032396542314819705>`)
            .setCustomId(`main`)
            .setStyle(`PRIMARY`),
            new MessageButton()
                 .setLabel(`• Roles info`)
                 .setStyle(`PRIMARY`)
                 .setEmoji(`<:emoji_78:1032376070432882699>`)
                 .setCustomId(`roles`),
                 new MessageButton()
                 .setLabel(`• Permissions`)
                 .setStyle(`DANGER`)
                 .setEmoji(`<a:4458animatedexclamation:969958530817876028>`)
                 .setDisabled(true)
                 .setCustomId(`permissions`)
              ); 
              var eee2= new MessageEmbed()
              .setAuthor(`${u.username}`,`${u.avatarURL({dynamic : true}) }`)
            .addField(`Permissions : `,`\`\`\`${uu.permissions.toArray().join(` | `)}\`\`\``,true)
              .setColor(`#303134`)
              .setThumbnail(`${u.displayAvatarURL({size : 1024 , dynamic : true})}`)
              interaction.followUp({embeds : [eee2] , components : [eeeee], ephemeral: true,})
        }
       })
    }
}