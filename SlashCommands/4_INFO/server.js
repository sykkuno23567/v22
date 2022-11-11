const {CommandInteraction, Client, MessageEmbed} = require('discord.js') 
 const moment = require('moment'); 
  
  
 module.exports = { 
     name:'serverinfo', 
     description:'Returns Info About Server', 
      
  
     run: async (client, interaction) => { 
       const us = interaction.user|| interaction.author 
       const channel = interaction.channel
         const {guild} = interaction; 
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
         const {createdTimestamp, ownerId, description, members, memberCount, channels, emojis, stickers} = guild; 
  
         const embed = new MessageEmbed() 
             .setColor("PURPLE") 
             .setAuthor({name: guild.name, iconURL: guild.iconURL({dynamic: true})}) 
             .setThumbnail(guild.iconURL({dynamic: true})) 
             .addFields( 
                 { 
                     name:"GENERAL", 
                     value:[ 
                     `**Name:** ${guild.name}`, 
                     `\`Created:\` <t:${parseInt(createdTimestamp / 1000)}:R>`, 
                     `\`Owner:\` <@${ownerId}>`, 
                     `\`Description:\` ${description ? description : 'No Description'}`, 
                       
                     ].join("\n") 
                 }, 
  
                 { 
                     name: "<:3643members:969929550756728842>  | Members", 
                     value: [ 
                    
                     `**Total:** ${memberCount}` 
                     ].join("\n")
                      
                 }, 
                 { 
                     name:"<:chat:1024449897522548786>  | CHANNELS ", 
                     value:[ 
                      
                      `- \`Text:\` ${channels.cache.filter((c) => c.type === "GUILD_TEXT").size}`, 
                      `- \`Voice:\` ${channels.cache.filter((c) => c.type === "GUILD_VOICE").size}`, 
                     
                      `- \`Categories:\` ${channels.cache.filter((c) => c.type === "GUILD_CATEGORY").size}`, 
                      `- \`Stages:\` ${channels.cache.filter((c) => c.type === "GUILD_STAGE_VOICE").size}`, 
                    
  
                       `**Total:** ${channels.cache.size}` 
                      
                     ].join("\n") 
                 }, 
                 { 
                     name: ' <a:4458animatedexclamation:969958530817876028> | EMOJIS ', 
                     value: 
                     [ 
                       `- \`Animated:\` ${emojis.cache.filter((e) => e.animated).size}`, 
                       `- \`Static:\` ${emojis.cache.filter((e) => !e.animated).size}`, 
                       `- \`Stickers:\` ${stickers.cache.size}`, 
                       `**Total:** ${emojis.cache.size + stickers.cache.size}` 
                     ].join("\n") 
                 }, 
                 { 
                     name: '<a:boost:1026854199994089532> | NITRO STATS', 
                     value:[ 
                      
                       `- \`Roles:\` ${guild.roles.cache.size}`, 
                       `- \`Tier:\` ${guild.premiumTier.replace("TIER_", "")}`, 
                       `- \`Server Boosts:\` ${guild.premiumSubscriptionCount}`, 
                       `- \`Boosters:\` ${members.cache.filter((m) => m.premiumSince).size}`, 
  
                      
                     ].join("\n") 
                 } 
             ) 
             .setFooter("Last Checked:").setTimestamp(); 
  
  
          interaction.followUp({embeds:[embed]}) 
          
     } 
                        }