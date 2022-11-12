const { Client, CommandInteraction,  MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "invite",
    description: "invite the bot",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      const us = interaction.user|| interaction.author 
      const channel = interaction.channel
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
      
      let msg = await interaction.followUp(`Inviting The Bot......✅`);

      const emb = new MessageEmbed()
      .setColor("RED")
      .setTitle(`Invite SnapinGoo`)
      .setDescription(`**Once You Invite Me Run** </help:0> **To Get Started Managing Your Server The Right Way For You!**`)
      .setThumbnail(client.user.displayAvatarURL({ dynamic : true }))
      

      const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
				.setURL(`https://discord.com/oauth2/authorize?client_id=832390209881899039&permissions=1101122628695&scope=bot%20applications.commands`)
				.setLabel('🔥 | Invite')
				.setStyle('LINK'),
			);
      
      setTimeout(() => {
        msg.edit({ content: ` `, embeds: [emb], components: [row] });
      }, 500);
    },
};


