const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const axios = require("axios")

module.exports = {
  name: "banner",
  description: "Get banner of member",
  options: [
    {
      name: "member",
      description: "Input member to get banner",
      type: "USER",
      required: true,
    },
  ],
  /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
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
      
    const { user } = interaction.options.get("member");

    axios.get(`https://discord.com/api/users/${user.id}`, {
      headers: {
        Authorization: `Bot ${client.config.token}`
      },
    })
    .then((res) => {
      const { banner, accent_color } = res.data;

      if (banner) {
        const extension = banner.startsWith("a_") ? ".gif" : ".png";
        const url = `https://cdn.discordapp.com/banners/${user.id}/${banner}${extension}?size=2048`;

        const embed = new MessageEmbed()
        .setTitle(`${user.tag}'s Banner`)
        .setImage(url)
        .setColor(accent_color || "BLUE");
        
        interaction.followUp({ embeds: [embed] })
      } else {
        if (accent_color) {
          const embed = new MessageEmbed()
          .setDescription(`**${user.tag}** \`DON'T  HAVE A BANNER BUT THEY HAVE THIS COLOR\``)
          .setColor(accent_color)

          interaction.followUp({ embeds: [embed] })
        } else {
          interaction.followUp({ content: `**${user.tag}** \`DON'T HAVE A BANNER\`🤷`})
        }
      }
    });
  },
};