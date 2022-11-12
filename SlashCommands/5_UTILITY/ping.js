const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const {  MessageSelectMenu, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: "ping",
    description: "returns bots ping",

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args, message) => {
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
      
        let circles = {
            green: "<a:high:1027273414903337020>",
            yellow: "<a:medium:1027272738144002098> ",
            red: "<a:low:1027271979759308981>"
        }
        const pingEmbed = new MessageEmbed()
          .setTitle(" <a:gold:1024434240164741141>BOT PING")
            .setColor("#FF0000")
                    .setThumbnail(client.user.displayAvatarURL({ dynamic : true }))
                    
            .addField("`Bot Ping` ",
                `${client.ws.ping <= 200 ? circles.green : client.ws.ping <= 400 ? circles.yellow : circles.red} ${client.ws.ping}ms`)
          .addField("`Discord Ping`",
`**${Date.now() - interaction.createdTimestamp <= 200 ? circles.green : Date.now() - interaction.createdTimestamp <= 400 ? circles.yellow: circles.red} ${Date.now() - interaction.createdTimestamp}** ms`)
          .setFooter("If You Like iT Invite iT")
                .setTimestamp()

      const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
				.setURL(`https://discord.com/api/oauth2/authorize?client_id=832390209881899039&permissions=1100585757719&scope=bot%20applications.commands`)
				.setLabel("🎉| INVITE BOT")
				.setStyle('LINK'),
        );

        interaction.followUp({ embeds: [pingEmbed], components: [row]  });
    },
};