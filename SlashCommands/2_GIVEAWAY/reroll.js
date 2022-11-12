const { CommandInteraction, Client, MessageEmbed } = require("discord.js");
module.exports = {
    name: "reroll",
    description: '🎉 Reroll a giveaway',

    options: [
        {
            name: 'giveaway',
            description: 'The giveaway to reroll (message ID or prize)',
            type: 'STRING',
            required: true
        }
    ],

    run: async (client, interaction) => {

        // If the member doesn't have enough permissions

    const us = interaction.user|| interaction.author
      const channel = interaction.channel
    // If the member doesn't have enough permissions
if (!interaction.guild.me.permissions.has("MANAGE_MESSAGES")) return interaction.followUp({
        embeds: [
            new MessageEmbed()
              .setColor("RANDOM")                .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                               
          .setDescription(`<a:false:1007956851532505188> \`I DON'T HAVE MANAGE_MESSAGES PERMISSION.\` `) 
.setTimestamp()

                   
          ],
                ephemeral: true,
              });
        
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
      
        if (!interaction.member.permissions.has('MANAGE_MESSAGES') && !interaction.member.roles.cache.some((r) => r.name === "Giveaway Manager")) {
            return interaction.followUp({
                embeds: [
            new MessageEmbed()
              .setColor("RANDOM")                .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                               
          .setDescription(`<a:false:1007956851532505188> \`YOU DON'T HAVE MANAGE_MESSAGES PERMISSION.\` `) 
.setTimestamp()

                   
          ],
                ephemeral: true,
              })
              .then(msg => {
    setTimeout(() => msg.delete(), 9000)
  });
        }

        const query = interaction.options.getString('giveaway');

        // try to find the giveaway with the provided prize OR with the ID
        const giveaway =
            // Search with giveaway prize
            client.giveawaysManager.giveaways.find((g) => g.prize === query && g.guildId === interaction.guild.id) ||
            // Search with giveaway ID
            client.giveawaysManager.giveaways.find((g) => g.messageId === query && g.guildId === interaction.guild.id);

        // If no giveaway was found
        if (!giveaway) {
            return interaction.followUp({
                content: 'Hm Weird That Giveaway  `' + query + '` Dont Exist.',
                ephemeral: true
            });
        }

        if (!giveaway.ended) {
            return interaction.followUp({
                content: `[This Giveaway](https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId}) Is Still Going! Wait To End`,
                ephemeral: true
            });
        }

        // Reroll the giveaway
        client.giveawaysManager.reroll(giveaway.messageId)
            .then(() => {
                // Success message
                interaction.followUp({embeds: [
            new MessageEmbed()
              .setColor("#ff5252")
                  .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                   .setTitle(`**Re-Rolled**`)
                   
          .setDescription(`<:5040discordcheck:928271947488440330> [CLICK FOR LINK GIVEAWAY ](https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId})`)
  
],
})
            .catch((e) => {
                interaction.followUp({
                    content: e,
                    ephemeral: true
                });
            });

    })
}
};