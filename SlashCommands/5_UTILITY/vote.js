const {  MessageSelectMenu, MessageActionRow, MessageButton } = require('discord.js');

const { CommandInteraction, Client } = require("discord.js");
const { MessageEmbed } = require(`discord.js`)

module.exports = {
    name:  "vote",
    description: "Support The Bot ",
    permissions : ["SEND_MESSAGES"],
    
     
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
     
    run: async (client, interaction, args) => {
      let msg = await interaction.followUp(`Voting For Snap.......✅`);

      const emb = new MessageEmbed()
      .setColor("BLUE")
      .setTitle(`💖 **Vote for SnapinGoo**`)
      .setDescription(`**《SnapinGoo Welcomes You 》** \n\_If You Like The Bot You Can Support It By Clicking The Buttons Below_👇`)
      .setThumbnail(client.user.displayAvatarURL({ dynamic : true }))
      .setTimestamp()
        .setFooter("Snap™");
      

      const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
				.setURL(`https://top.gg/bot/832390209881899039/vote`)
				.setLabel("🎉| Top.GG")
				.setStyle('LINK'),
        
        
			
				new MessageButton()
				.setURL(`https://infinitybots.gg/bots/832390209881899039/vote`)
				.setLabel("🎉| Inf-Bots ")
				.setStyle('LINK'),
			);
      
      setTimeout(() => {
        msg.edit({ content: ` `, embeds: [emb], components: [row] });
      }, 500);
    },
};
