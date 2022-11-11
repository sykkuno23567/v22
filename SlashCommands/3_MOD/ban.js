const { Client, Commandinteraction, MessageEmbed } = require("discord.js");



module.exports = {
    name: "ban",
    description: "🛸 Bans Member from server",
    type: 'CHAT_INPUT',
	         	usage: '/ban',
  userPermissions: ["BAN_MEMBERS"],
	category: 'moderation',
    options: [
        {
            name: "user",
            description: "The user to ban",
            type: "USER",
            required: true
        },
        {
            name: "reason",
            description: "The reason for the ban",
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

        let member = interaction.options.getMember("user")
        let reason = interaction.options.getString("reason")
      let user = interaction.options.getMember("user")
const banned = interaction.options.getMember("user")
      const us = interaction.user|| interaction.author 
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
      
if (!interaction.guild.me.permissions.has("BAN_MEMBERS")) return interaction.followUp({
        embeds: [
            new MessageEmbed()
              .setColor("RANDOM")                .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                               
          .setDescription(`<a:false:1007956851532505188> \`I DON'T HAVE BAN_MEMBERS PERMISSION.\` `) 
.setTimestamp()

                   
          ],
                ephemeral: true,
              })
              .then(msg => {
    setTimeout(() => msg.delete(), 5000)
  });


      
      if (!interaction.member.permissions.has("BAN_MEMBERS") ) {
           return  interaction.followUp({
                embeds: [
            new MessageEmbed()
              .setColor("RANDOM")                .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                               
          .setDescription(`<a:false:1007956851532505188> \`YOU DON'T HAVE BAN_MEMBERS PERMISSION.\` `) 
.setTimestamp()

                   
          ],
                ephemeral: true,
              })
              .then(msg => {
    setTimeout(() => msg.delete(), 5000)
  });

      }

        if(member.user.id === interaction.user.id) {
            return interaction.followUp({
                  embeds: [
            new MessageEmbed()
              .setColor("#ff5252")
                  .setThumbnail(user.displayAvatarURL({ dynamic : true }))
                   .setTitle(`Ban Case`)
                   
          .setDescription(`<a:false:1007956851532505188> \`YOU CAN'T BAN YOUR SELF (STUPID).\` ${member}`) 
                   
          ],
                ephemeral: true,
            }).then(msg => {
    setTimeout(() => msg.delete(), 5000)
  });
        } else if(member.user.id === interaction.client.user.id) {
		
            return interaction.followUp({
                embeds: [
            new MessageEmbed()
              .setColor("#ff5252")
                  .setThumbnail(user.displayAvatarURL({ dynamic : true }))
                   .setTitle(`Ban Case`)
                   
          .setDescription(`<a:false:1007956851532505188> ${member} **DID YOU JUST TRIED TO BAN ME ^^ **?`) 
                   
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
                   .setTitle(`Ban Case`)
                   
          .setDescription(`<a:false:1007956851532505188> <@${interaction.user.id}> \n\`YOU CAN'T BAN THE OWNER OF\`  \n\<a:gold:1024434240164741141><a:white:1024434194920775822><a:pink:1024434216592748585>__**${interaction.guild.name}**__<a:gold:1024434240164741141><a:white:1024434194920775822><a:pink:1024434216592748585> `) 
                   
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
                  .setThumbnail(user.displayAvatarURL({ dynamic : true }))
                   .setTitle(`Ban Error`)
                   
          .setDescription(`<a:false:1007956851532505188> \`YOU CAN'T BAN\` ${member} \`HE HAVE A POWERFUL ROLE THEN YOU.\``) 
                   
          ],
                ephemeral: true,
            })
          .then(msg => {
    setTimeout(() => msg.delete(), 5000)
  });
        }


        if(!member.bannable) {
            return interaction.followUp({
                embeds: [
            new MessageEmbed()
              .setColor("#ff5252")
                  .setThumbnail(user.displayAvatarURL({ dynamic : true }))
                   .setTitle(`Ban Error`)
                   
          .setDescription(`<a:false:1007956851532505188> \`I CAN'T BAN\` ${member} \`HIS ROLE IS ABOVE MINE!!\``) 
                   
          ],
                ephemeral: true,
              
              
            })
          .then(msg => {
    setTimeout(() => msg.delete(), 5000)
  });
        }
        await member.ban({reason: `${reason}`})

            return interaction.followUp({
                 embeds: [
            new MessageEmbed()
              .setColor("#03ff19 ")
                  .setThumbnail(member.displayAvatarURL({ dynamic : true }))
                   .setTitle(`Ban Case ${Math.floor(Math.random() * 10000 ) + 1} `)
                   
          .setDescription(`<a:ban:1030219573150097458> \`GOODBYE\``)
                   .addFields(
                { name: `<a:mod:1030599639264677908> • **Executioner**`, value: `<@${interaction.user.id}>`, inline: true },
  
        { name: `<:users:1030599694910492712> • **Member**`, value: `\`\`\`${banned.user.username}#${banned.user.discriminator}\`\`\``, inline: true },

        
{ name: `<a:reason:1030599615554261084> • **Banned For**`, value: `\`\`\`${reason}\`\`\``, inline: true },

)
                   

                   
.setFooter({ text : `Ban ID ${banned.user.id}`})
.setTimestamp()
                   
          ],
            });
    },
};