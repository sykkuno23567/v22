const { Client, Commandinteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "lock",
    description: "Lock selected channel 🔐",
    type: 'CHAT_INPUT',
    usage: '/lock',
	category: 'moderation',
    options: [
        {
            name: "channel",
            description: "The channel to lock",
            type: "CHANNEL",
            required: true
        },
        {
            name: "reason",
            description: "The reason for the lock",
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
        const member2 = interaction.member;
      const user = interaction.user|| interaction.author
      const us = interaction.user|| interaction.author 

if (!interaction.guild.me.permissions.has("MANAGE_ROLES")) return interaction.followUp({
        embeds: [
            new MessageEmbed()
              .setColor("RANDOM")                .setThumbnail(user.displayAvatarURL({ dynamic : true }))
                               
          .setDescription(`<a:false:1007956851532505188> \`I DON'T HAVE MANAGE_ROLES PERMISSION IN THAT CHAT.\` `) 
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
              .setColor("#ff5252")
                  .setThumbnail(user.displayAvatarURL({ dynamic : true }))
                   
                   
          .setDescription(`<a:false:1007956851532505188> \`YOU NEED MANAGE_CHANNELS PERMISSION.\``)
  
],
               ephemeral: true,
            })
.then(msg => {
    setTimeout(() => msg.delete(), 5000)
  }); 
           
           


        }

      ///<a:false:1007956851532505188> ╠**THIS COMMAND REQUIRE** \`MANAGE_CHANNELS\` **PERMISSION.**

        let channel = interaction.options.getChannel("channel");
        let reason = interaction.options.getString("reason")

       if(!channel.permissionsFor(interaction.guild.roles.everyone).has("SEND_MESSAGES")) {
           return interaction.followUp({
embeds: [
            new MessageEmbed()
              .setColor("#ff5252")
                  .setThumbnail(user.displayAvatarURL({ dynamic : true }))
                   .setTitle(`• Locked`)
                   
          .setDescription(`<a:true:1007956822973501480> \`THAT CHANNEL IS ALREADY LOCKED!\` <:locks:1024451320607936625>`)
  
],
               ephemeral: true,
           });
       }

        await channel.edit({
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: ["SEND_MESSAGES"],
                },
            ]
        }, reason)

            return interaction.followUp({
embeds: [
            new MessageEmbed()
              .setColor("#03ff19")
                  .setThumbnail(user.displayAvatarURL({ dynamic : true }))
                   .setTitle(`• Locked`)
                   
          .setDescription (`<:chat:1024449897522548786> ${channel} \`IS LOCKED NOW\` <:locks:1024451320607936625> `)
.setFooter({text: `${us.username}`})
.setTimestamp()
],
                ephemeral: true,
              
            });
    },
};