const { Client, CommandInteraction, MessageEmbed,MessageActionRow, MessageButton } = require("discord.js");
module.exports = {
    name: 'avatar',
    description: 'Sends avatar image',
        	usage: '/avatar',
	category: 'information',
options: [
  {
    name: 'user',
    type: 'USER',
    description: 'mention someone to get their avatar',
    required: false
  }
],
      /** 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {String[]} args 
     */
    run: async(client, interaction, args) => {
    
        const user = interaction.user|| interaction.author
const channel = interaction.channel
      const user2 = interaction.options.getUser('user');
      
      const us = interaction.user|| interaction.author 
             //////////////////
      if (!interaction.guild.me.permissionsIn(channel).has("VIEW_CHANNEL")) 
   return interaction.editReply({    embeds: [
            new MessageEmbed()
              .setColor("RANDOM")                
              .setThumbnail(us.displayAvatarURL({ dynamic : true }))                 
              .setDescription(`<a:false:1007956851532505188> \`I DON'T HAVE VIEW_CHANNEL PERMISSION.\` `) 
.setTimestamp()

                   
          ],
                ephemeral: true,
              });
              

      if (!interaction.guild.me.permissionsIn(channel).has("SEND_MESSAGES")) 
   return interaction.Reply({    embeds: [
            new MessageEmbed()
              .setColor("RANDOM")               
              .setThumbnail(us.displayAvatarURL({ dynamic : true }))                 
          .setDescription(`<a:false:1007956851532505188> \` I DON'T HAVE SEND_MESSAGES PERMISSION. \` `) 
.setTimestamp()

                   
          ],
                ephemeral: true,
              });
    
    /////////////////

      if(!user2) {

        const embed = new MessageEmbed()
        .setTitle(`<:bot_owner:969929848158035968> • User Avatar`)
          .setAuthor({name:`${interaction.user.username}#${interaction.user.discriminator}`, 
 iconURL: `${interaction.user.avatarURL({dynamic: true, size: 512})}`})
          .setColor("#303136")
             .setImage(user.avatarURL({ size: 2048, dynamic: true, format: "png" }))
      const row = new MessageActionRow()
        .addComponents([
            new MessageButton() .setURL(user.displayAvatarURL({ size: 2048, dynamic: true, format: "png"})) .setLabel("PNG") .setStyle("LINK")
        ])
          interaction.followUp({ embeds: [embed], components: [row] })
      } else {
        const embed2 = new MessageEmbed() 
                .setTitle(`<:bot_owner:969929848158035968> • User Avatar`)
          .setAuthor({name:`${interaction.user.username}#${interaction.user.discriminator}`, 
 iconURL: `${interaction.user.avatarURL({dynamic: true, size: 512})}`})
          .setColor('#303136')
          
        .setImage(user2.avatarURL({ size: 2048, dynamic: true, format: "png" }))

        const row2 = new MessageActionRow()
        .addComponents([
            new MessageButton() .setURL(user.displayAvatarURL({ size: 2048, dynamic: true, format: "png"})) .setLabel("Get Yours") .setStyle("LINK")
        ])
        interaction.followUp({ embeds: [embed2], components: [row2] })
          }
    }
}