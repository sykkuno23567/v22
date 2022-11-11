const { Client, Commandinteraction, MessageEmbed } = require("discord.js");
const ms = require('ms');

module.exports = {
    name: "timeout",
    description: "Timeout/Mute a Server Member",
    type: 'CHAT_INPUT',
    usage: '/timeout',
  botPermissions: ["MODERATE_MEMBERS"],
      userPermissions: ["MODERATE_MEMBERS"],
	category: 'moderation',
    options: [
        {
            name: "user",
            description: "The user to timeout",
            type: "USER",
            required: true
        },
        {
            name: "length",
            description: "The length of the timeout",
            type: "STRING",
            required: true
        },
        {
            name: "reason",
            description: "The reason for the timeout",
            type: "STRING",
            required: true
        }
    ],
    /**
     *
     * @param {Client} client
     * @param {Commandinteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        let user = interaction.options.getMember("user")
      const us = interaction.user|| interaction.author 
      const channels = interaction.channel

            if (!interaction.guild.me.permissionsIn(channels).has("VIEW_CHANNEL")) 
   return interaction.editReply({    embeds: [
            new MessageEmbed()
              .setColor("RANDOM")                .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                               
          .setDescription(`<a:false:1007956851532505188> \`I DON'T HAVE SEND_MESSAGES , VIEW_CHANNEL PERMISSION.\` `) 
.setTimestamp()

                   
          ],
                ephemeral: true,
              });
              

      if (!interaction.guild.me.permissionsIn(channels).has("SEND_MESSAGES")) 
   return interaction.editReply({    embeds: [
            new MessageEmbed()
              .setColor("RANDOM")                .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                               
          .setDescription(`<a:false:1007956851532505188> \`I DON'T HAVE SEND_MESSAGES , VIEW_CHANNEL PERMISSION.\` `) 
.setTimestamp()

                   
          ],
                ephemeral: true,
              });


      if (!interaction.guild.me.permissions.has("MODERATE_MEMBERS")) return interaction.followUp({
        embeds: [
            new MessageEmbed()
              .setColor("RANDOM")                .setThumbnail(user.displayAvatarURL({ dynamic : true }))
                               
          .setDescription(`<a:false:1007956851532505188> \`I DON'T HAVE TIMEOUT_MEMBERS PERMISSION \` `) 
.setTimestamp()

                   
          ],
                ephemeral: true,
              })
              .then(msg => {
    setTimeout(() => msg.delete(), 5000)
  });

        if (!interaction.member.permissions.has("MODERATE_MEMBERS")) {
            return interaction.followUp({
                     embeds: [
            new MessageEmbed()
              .setColor("#ff5252")
                  .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                   
                   
          .setDescription(`<a:false:1007956851532505188> \`YOU NEED TIMEOUT_MEMBERS PERMISSION.\``) 
                   
          ],
              
                ephemeral: true,
            })
              .then(msg => {
    setTimeout(() => msg.delete(), 5000)
  }); 
            
        }



      ///<a:false:1007956851532505188> THIS COMMAND REQUIRES \`MODERATE_MEMBERS\` permission.
        let member = interaction.options.getMember("user")
        let length = interaction.options.getString("length")
        let reason = interaction.options.getString("reason")
      const banned = interaction.options.getMember("user")
      

        if(member.user.id === interaction.user.id) {
            return interaction.followUp({
                     embeds: [
            new MessageEmbed()
              .setColor("#ff5252")
                  .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                   .setTitle(`TimeOut Case`)
                   
          .setDescription(`<a:false:1007956851532505188> \`YOU CAN'T TIMEOUT YOUR SELF (STUPID).\` ${member}`) 
                   
          ],
                ephemeral: true,
            })
              .then(msg => {
    setTimeout(() => msg.delete(), 5000)
  
            });
        } else if(member.user.id === interaction.client.user.id) {
            return interaction.followUp({
                  embeds: [
            new MessageEmbed()
              .setColor("#ff5252")
                  .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                   .setTitle(`TimeOut Case`)
                   
          .setDescription(`<a:false:1007956851532505188> ${member} **DID YOU JUST TRIED TO TIMEOUT ME **?`) 
                   
          ],
                ephemeral: true,
            })
          
            .then(msg => {
    setTimeout(() => msg.delete(), 8000)
  }); 
        } else if(member.user.id === interaction.guild.ownerId) {
            return interaction.followUp({
                            embeds: [
            new MessageEmbed()
              .setColor("#ff5252")
                  .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                   .setTitle(`Timeout Case`)
                   
          .setDescription(`<a:false:1007956851532505188>╠<@${interaction.user.id}> \n\`YOU CAN'T TIMEOUT THE OWNER OF\`  \n\<a:gold:1024434240164741141><a:white:1024434194920775822><a:pink:1024434216592748585>__**${interaction.guild.name}**__<a:gold:1024434240164741141><a:white:1024434194920775822><a:pink:1024434216592748585> `) 
                   
          ],
                ephemeral: true,
            })
            .then(msg => {
    setTimeout(() => msg.delete(), 5000)
  }); 
        }

        if(interaction.member.roles.highest.position < member.roles.highest.position) {
            return interaction.followUp({
                             embeds: [
            new MessageEmbed()
              .setColor("#ff5252")
                  .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                   .setTitle(`Timeout Error`)
                   
          .setDescription(`<a:false:1007956851532505188> ╠ \`YOU CAN'T TIMEOUT\` ${member} \`HE HAVE A POWERFUL ROLE THEN YOU.\``) 
                   
          ],
                ephemeral: true,
            })  
            .then(msg => {
    setTimeout(() => msg.delete(), 5000)
  }); 
        }


        
        

        if(!member.moderatable || !member.manageable) {
            return interaction.followUp({
                    embeds: [
            new MessageEmbed()
              .setColor("#ff5252")
                  .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                   .setTitle(`TimeOut Error`)
                   
          .setDescription(`<a:false:1007956851532505188> ╠ \`I CAN'T TIMEOUT\` ${member} \`HIS ROLE IS ABOVE MINE!!\``) 
                      
                   
          ],
                ephemeral: true,

            })
              
            .then(msg => {
    setTimeout(() => msg.delete(), 5000)
  }); 
        }


        let time = ms(length);

        if(!time) {
            return interaction.followUp({
 embeds: [
            new MessageEmbed()
              .setColor("#ff5252")
                  .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                   .setTitle(`TimeOut Case `)
                   
          .setDescription(`${member} ENTRE A VALID DATE (1m ,5m, 10m, 1h, 1d, 7d` ) 


                   
          ],              
              ephemeral: true,

            }) 
            .then(msg => {
    setTimeout(() => msg.delete(), 7000)
  }); 
        }

        if(time > 2.419e+9) {
            return interaction.followUp({
embeds: [
            new MessageEmbed()
              .setColor("#ff5252")
                  .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                   .setTitle(`TimeOut Case `)
                   
          .setDescription(`${member} YOU CAN'T TIMEOUT SOMEONE MORE THAN **28 days**!` ) 
                   
          ],      
              ephemeral: true,

            })   
            .then(msg => {
    setTimeout(() => msg.delete(), 5000)
  }); 
          
        } else if(time < 1000) {
            return interaction.followUp({
embeds: [
            new MessageEmbed()
              .setColor("#ff5252")
                  .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                   .setTitle(`TimeOut Case `)
                   
          .setDescription(`${member} YOU CAN'T TIMEOUT SOMEONE LESS THAN **1 SECOND**!` ) 


                   
          ],      
              ephemeral: true,
            })
              .then(msg => {
    setTimeout(() => msg.delete(), 5000)
  }); 
            
        }
        await member.timeout(time, reason)

            return interaction.followUp({
      embeds: [
            new MessageEmbed()
              .setColor("#03ff19")
                  .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                   .setTitle(`TIMEOUT CASE ${Math.floor(Math.random() * 10000 ) + 1} `)
                   
          .setDescription(`<a:true:1007956822973501480> \`ENJOY IT\``)
        .addFields(
                { name: `<a:mod:1030599639264677908> • **Executioner**`, value: `<@${interaction.user.id}>`, inline: true },
          { name: `<:users:1030599694910492712> • **Member**`, value: `\`\`\`${banned.user.username}#${banned.user.discriminator}\`\`\``, inline: true },

        
{ name: `<a:tm:1030599659724480512> • **Length**`, value: `\`\`\`${length}\`\`\``, inline: true },

)

          
.setFooter({ text : `Timeout ID ${banned.user.id}`})
.setTimestamp()
        
                   
          ],               
              ephemeral: true,
            });
    },
};