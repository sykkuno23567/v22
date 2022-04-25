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

      const user2 = interaction.options.getUser('user');

      if(!user2) {

        const embed = new MessageEmbed()
        
          .setColor("#303136")
             .setImage(user.avatarURL({ size: 2048, dynamic: true, format: "png" }))
      const row = new MessageActionRow()
        .addComponents([
            new MessageButton() .setURL(user.displayAvatarURL({ size: 2048, dynamic: true, format: "png"})) .setLabel("PNG") .setStyle("LINK"),
            new MessageButton() .setURL(user.displayAvatarURL({ size: 2048, dynamic: true, format: "jpg"})) .setLabel("JPG") .setStyle("LINK"),
            new MessageButton() .setURL(user.displayAvatarURL({ size: 2048, dynamic: true, format: "webp"})) .setLabel("WEBP") .setStyle("LINK"),
            new MessageButton() .setURL(user.displayAvatarURL({ size: 2048, dynamic: true, format: "gif"})) .setLabel("GIF") .setStyle("LINK")
        ])
          interaction.followUp({ embeds: [embed], components: [row] })
      } else {
        const embed2 = new MessageEmbed() 
        
          .setColor('#303136')
        .setImage(user2.avatarURL({ size: 2048, dynamic: true, format: "png" }))

        const row2 = new MessageActionRow()
        .addComponents([
            new MessageButton() .setURL(user.displayAvatarURL({ size: 2048, dynamic: true, format: "png"})) .setLabel("PNG") .setStyle("LINK"),
            new MessageButton() .setURL(user.displayAvatarURL({ size: 2048, dynamic: true, format: "jpg"})) .setLabel("JPG") .setStyle("LINK"),
            new MessageButton() .setURL(user.displayAvatarURL({ size: 2048, dynamic: true, format: "webp"})) .setLabel("WEBP") .setStyle("LINK"),
            new MessageButton() .setURL(user.displayAvatarURL({ size: 2048, dynamic: true, format: "gif"})) .setLabel("GIF") .setStyle("LINK")
        ])
        interaction.followUp({ embeds: [embed2], components: [row2] })
          }
    }
}