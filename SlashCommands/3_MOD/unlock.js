const { Client, Commandinteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "unlock",
    description: "unlock Channel 🔓 ",
    type: 'CHAT_INPUT',
    usage: '/unlock',
	category: 'moderation',
    options: [
        {
            name: "channel",
            description: "The channel to unlock",
            type: "CHANNEL",
            required: true
        },
        {
            name: "reason",
            description: "The reason for the unlock",
            type: "STRING",
            required: false
        }
    ],
    /**
     *
     * @param {Client} client
     * @param {Commandinteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const user = interaction.user|| interaction.author
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


if (!interaction.guild.me.permissions.has("MANAGE_ROLES")) return interaction.followUp({
        embeds: [
            new MessageEmbed()
              .setColor("RANDOM")                .setThumbnail(user.displayAvatarURL({ dynamic : true }))
                               
          .setDescription(`<a:false:1007956851532505188> \`I DON'T HAVE MANAGE_ROLES PERMISSION IN THAT CHAT\``) 
.setTimestamp()

                   
          ],
                ephemeral: true,
              })
              .then(msg => {
    setTimeout(() => msg.delete(), 5000)
  });


        if (!interaction.member.permissions.has("MANAGE_CHANNELS") ) {
            return interaction.followUp({
                embeds: [
            new MessageEmbed()
              .setColor("RANDOM")
                  .setThumbnail(user.displayAvatarURL({ dynamic : true }))
                               
          .setDescription(`<a:false:1007956851532505188> \`YOU DON'T HAVE MANAGE_CHANNELS PERMISSION \``) 
.setTimestamp()

                   
          ],
                ephemeral: true,
        })
        .then(msg => {
    setTimeout(() => msg.delete(), 5000)
  });

        }

        let channel = interaction.options.getChannel("channel");
        let reason = interaction.options.getString("reason")

      


        if(channel.permissionsFor(interaction.guild.roles.everyone).has("SEND_MESSAGES")) {
            return interaction.followUp({
              embeds: [
            new MessageEmbed()
              .setColor("#ff5252")
                  .setThumbnail(user.displayAvatarURL({ dynamic : true }))
                   .setTitle(`• UNLOCKED`)
                   
          .setDescription (`<a:8218alert:928271947383570462> \`THAT CHANNEL IS ALREADY UNLOCKED!\` <:unlocks:1024451345182375956>`)
],

                ephemeral: true,
            });
        }

        await channel.edit({
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    allow: ["SEND_MESSAGES"],
                },
            ]
        }, reason)

            return interaction.followUp({
              embeds: [
            new MessageEmbed()
              .setColor("#03ff19")
                  .setThumbnail(user.displayAvatarURL({ dynamic : true }))
                   .setTitle(`• UNLOCKED `)
                   
          .setDescription (`<:chat:1024449897522548786> ${channel} \`IS UNLOCKED NOW\` <:unlocks:1024451345182375956>`)
                .setFooter({text: `${us.username}`})
.setTimestamp()
],

                ephemeral: true,
            });

    },
};