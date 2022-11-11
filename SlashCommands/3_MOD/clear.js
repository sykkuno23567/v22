const { Client, Collection, MessageEmbed, MessageActionRow, MessageButton, MessageAttachment } = require('discord.js');

module.exports = {
    name: 'clear',
    description: "🧹 Fast Message Delete",
    permission: ['MANAGE_MESSAGES'],
    ownerOnly: false,
    userPermissions: ["MANAGE_MESSAGES"],
    options: [
        {
            name: 'number_of_messages',
            type: 'STRING',
            description: 'Number of messages to delete',
            required: true
        }
    ],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, interaction, args, message) => { 

const user = interaction.user|| interaction.author
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
    
      if (!interaction.member.permissions.has("MANAGE_MESSAGES")) return interaction.followUp({
        embeds: [
            new MessageEmbed()
              .setColor("RANDOM")
                  .setThumbnail(user.displayAvatarURL({ dynamic : true }))
                               
          .setDescription(`<a:false:1007956851532505188> \`YOU DON'T HAVE PERMISSION TO PURGE TEXT!\``) 
.setTimestamp()

                   
          ],
                ephemeral: true,
        })
        .then(msg => {
    setTimeout(() => msg.delete(), 4000)
  });


      
            if (!interaction.guild.me.permissions.has("MANAGE_MESSAGES")) return interaction.followUp({
        embeds: [
            new MessageEmbed()
              .setColor("RANDOM")                .setThumbnail(user.displayAvatarURL({ dynamic : true }))
                               
          .setDescription(`<a:false:1007956851532505188> \`I DON'T HAVE PERMISSION TO CLEAR TEXT!\``) 
.setTimestamp()

                   
          ],
                ephemeral: true,
              })
              .then(msg => {
    setTimeout(() => msg.delete(), 4000)
  });
            

        let amount = args[0]
        

  if (amount > 100) return interaction.followUp({
        embeds: [
            new MessageEmbed()
              .setColor("RANDOM")
                  .setThumbnail(user.displayAvatarURL({ dynamic : true }))
                               
          .setDescription(`<a:false:1007956851532505188> \`I CANNOT DELETE 100 MSG AT ONCE.\``)
.setTimestamp()

                   
          ],
                ephemeral: true,
  })
    .then(msg => {
    setTimeout(() => msg.delete(), 4000)
  });
            
      
  
            if (amount < 1) return interaction.followUp({
        embeds: [
            new MessageEmbed()
              .setColor("RANDOM")
                  .setThumbnail(user.displayAvatarURL({ dynamic : true }))
                               
          .setDescription(`<a:false:1007956851532505188> \`I THINK I CAN'T DELTE 0 MESSAGES?\``)
.setTimestamp()

                   
          ],
                ephemeral: true,
            })
              .then(msg => {
    setTimeout(() => msg.delete(), 4000)
  });
            
              
      
        if (amount <= 100) {
            interaction.channel.bulkDelete(amount, true)

        }


  

        interaction.channel.send({
        embeds: [
            new MessageEmbed()
              .setColor("RANDOM")
                  .setThumbnail(user.displayAvatarURL({ dynamic : true }))
                               
          .setDescription(`<a:true:1007956822973501480> \`I CLEARED \`${amount}\` MESSAGES\`.`) 
          
.setFooter({text: `${us.username}`})
.setTimestamp() 

                   
          ],
                ephemeral: true,
         
            }).then(msg => {
    setTimeout(() => msg.delete(), 4000)
  });

      
    }


}



