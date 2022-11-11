const { Client, CommandInteraction, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'simprate', 
     description: 'Simperate',
         options: [
             {
                 name: "user",
                 description: "User",
                 type: "USER",
                 required: true
             },
         ],
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, interaction, args) => {
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
      
        const human = interaction.options.getUser("user")
        const rate = Math.floor(Math.random() * (100 - 1 + 1) + 1);

        if(human == interaction.author) {
            const Embed = new MessageEmbed()
            .setColor('#FF0000')
            .setTitle('***Your Simprate***')
            .setDescription(`You are **${rate}**% Simp \`DAMN I AM SO GOOD\` `)
              .setThumbnail(`https://cdn.discordapp.com/attachments/1014151754482458665/1027303223272427530/images_2.jpg`)
            .setFooter(`${human.user.username}`)
            interaction.followUp({ embeds: [Embed] })
        } else {
            const Embed2 = new MessageEmbed()
            .setColor('#FF0000')
            .setTitle(`***${human.username}'s Simprate***`)
            .setDescription(`${human} is **${rate}**% Simp \`DAMN BRO CHILL\` `)
              .setThumbnail(`https://cdn.discordapp.com/attachments/1014151754482458665/1027303223272427530/images_2.jpg`)
             .setFooter(`${human.tag}`)
            interaction.followUp({ embeds: [Embed2]})
        }

    }
}