const { Client, Commandinteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "kick",
    description: "🛸 kick Members From Server",
    type: 'CHAT_INPUT',
    usage: '/kick',
  userPermissions: ["KICK_MEMBERS"],
	category: 'moderation',
    options: [
        {
            name: "user",
            description: "The user to kick",
            type: "USER",
            required: true
        },
        {
            name: "reason",
            description: "The reason for the kick",
            type: "STRING",
            required: true
        }
    ],


    /** //
     *
     * @param {Client} client
     * @param {Commandinteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const member2 = interaction.member;
      
        const us = interaction.user|| interaction.author 
const banned = interaction.options.getMember("user")
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

if (!interaction.guild.me.permissions.has("KICK_MEMBERS")) return interaction.followUp({
        embeds: [
            new MessageEmbed()
              .setColor("RANDOM")                .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                               
          .setDescription(`<a:false:1007956851532505188> \`I DON'T HAVE KICK_MEMBERS PERMISSION.\``) 
.setTimestamp()

                   
          ],
                ephemeral: true,
              })
              .then(msg => {
    setTimeout(() => msg.delete(), 5000)
  });


      
      
        if (!interaction.member.permissions.has("KICK_MEMBERS") ) {
            
            return interaction.followUp({
embeds: [
            new MessageEmbed()
              .setColor("#ff5252")
                  .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                   .setTitle(`Kick Case`)
                   
          .setDescription(`<a:8218alert:928271947383570462> \`YOU DON'T HAVE PERMISSION TO DO THAT.\``)
  
 ],
                ephemeral: true,
              
            })
        .then(msg => {
    setTimeout(() => msg.delete(), 5000)
  });

        }

        let member = interaction.options.getMember("user")
        let reason = interaction.options.getString("reason")
            let user = interaction.options.getMember("user")


        if(member.user.id === interaction.user.id) {
            return interaction.followUp({
              embeds: [
            new MessageEmbed()
              .setColor("#ff5252")
                  .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                   .setTitle(`Kick Case`)
                   
          .setDescription(`<a:false:1007956851532505188> \`YOU CAN'T KICK YOUR SELF (STUPID).\` ${member}`)

                 ],

                ephemeral: true,
            })
        .then(msg => {
    setTimeout(() => msg.delete(), 5000)
  });



          
          /// 

        } else if(member.user.id === interaction.client.user.id) {
            return interaction.followUp({
embeds: [
            new MessageEmbed()
              .setColor("#ff5252")
                  .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                   .setTitle(`Kick Case`)
                   
          .setDescription(`<a:false:1007956851532505188> ${member} **DID YOU JUST TRIED TO KICK ME ^^ **?`)
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
                  .setThumbnail(user.displayAvatarURL({ dynamic : true }))
                   .setTitle(`Kick Case`)
                   
          .setDescription(`<a:false:1007956851532505188> ${member} **DID YOU JUST TRIED TO KICK ME ^^ **?`)
   ],

                ephemeral: true,
            })
            .then(msg => {
    setTimeout(() => msg.delete(), 5000)
  }); 

          
        } else if(member.user.id === interaction.guild.ownerId) {
            
            return interaction.followUp({
  embeds: [
            new MessageEmbed()
              .setColor("#ff5252")
                  .setThumbnail(user.displayAvatarURL({ dynamic : true }))
                   .setTitle(`Kick Case`)
                   
          .setDescription(`<a:false:1007956851532505188><@${interaction.user.id}> \n\`YOU CAN'T KICK THE OWNER OF\`  \n\<a:gold:1024434240164741141><a:white:1024434194920775822><a:pink:1024434216592748585>__**${interaction.guild.name}**__<a:gold:1024434240164741141><a:white:1024434194920775822><a:pink:1024434216592748585> `) 
                   
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
                   .setTitle(`Kick Error`)
                   
          .setDescription(`<a:false:1007956851532505188> \`You Can't Kick\` ${member} \`HE HAVE A POWERFUL ROLE THEN YOU.\``) 
                   
          ],                ephemeral: true,
            })
        .then(msg => {
    setTimeout(() => msg.delete(), 5000)
  });

        }


        if(!member.kickable) {
            return interaction.followUp({
         embeds: [
            new MessageEmbed()
              .setColor("#ff5252")
                  .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                   .setTitle(`Ban Error`)
                   
          .setDescription(`<a:false:1007956851532505188> ╠ \`I Can't Kick\` ${member} \`HIS ROLE IS ABOVE MINE!!\``) 
                   
          ],                ephemeral: true,
            })
        .then(msg => {
    setTimeout(() => msg.delete(), 5000)
  });

        }
        await member.kick({reason: `${reason}`})

            return interaction.followUp({
                 embeds: [
            new MessageEmbed()
              .setColor("#03ff19 ")
                  .setThumbnail(member.displayAvatarURL({ dynamic : true }))
                   .setTitle(`**Kick Case** ${Math.floor(Math.random() * 10000 ) + 1} `)
                   
          .setDescription(`<a:kick:1030243992778059839> \`GOODBYE\``)
                   
.addFields(
                { name: `<a:mod:1030599639264677908> • **Executioner**`, value: `<@${interaction.user.id}>`, inline: true },
  
        { name: `<:users:1030599694910492712> • **Member**`, value: `\`\`\`${banned.user.username}#${banned.user.discriminator}\`\`\``, inline: true },

        
{ name: `<a:reason:1030599615554261084> • **Kicked For**`, value: `\`\`\`${reason}\`\`\``, inline: true },

)
                   
.setFooter({ text : `Kick ID ${banned.user.id}`})
.setTimestamp()
          ],
              ephemeral: true,
            });
    },
};