const { CommandInteraction, Client, MessageEmbed } = require("discord.js");
const {  MessageSelectMenu, MessageActionRow, MessageButton } = require('discord.js');
const db = require('pro.db')
const Schema = require("../../schemas/AFK-people");

module.exports = {
  name: "antiswear",
  description: "anti-swear on/off",
  options: [
    {
      name: 'toggle',
      description: 'Disable Or Enable the anti-swear ',
      type: 'STRING',
      required: true,
      choices: [
        {name: 'Enable', value: 'enable'},
        {name: "Disable", value: 'Disable'},
      ],
    }
  ],
  run: async (client, interaction, args) => {
    
    const us = interaction.user|| interaction.author 
    const channel = interaction.channel
    const user = interaction.user || interaction.author

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

    
if (!interaction.guild.me.permissions.has("MANAGE_MESSAGES")) return interaction.followUp({
        embeds: [
            new MessageEmbed()
              .setColor("RANDOM")                .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                               
          .setDescription(`<a:false:1007956851532505188> \`I DON'T HAVE MANAGE_MESSAGES PERMISSION.\` `) 
.setTimestamp()

                   
          ],
                ephemeral: true,
              })
              .then(msg => {
    setTimeout(() => msg.delete(), 5000)
  });
    
let stringOption = interaction.options.getString('toggle')
    if(stringOption == "enable") {

      if (!interaction.member.permissions.has("MANAGE_MESSAGES") ) {
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
    setTimeout(() => msg.delete(), 5000)
  });
      }
      if(!interaction.member.permissions.has('MANAGE_MSSSAGES')) return;
      await interaction.editReply({
embeds: [
            new MessageEmbed()
              .setColor("#ff5252")
                  .setThumbnail(user.displayAvatarURL({ dynamic : true }))
                   .setTitle(`**Anti Swear**`)
                   
          .setDescription(`<:5040discordcheck:928271947488440330> **ENABLED The ANTI-SWEAR SYSTEM**`)
  
],
        ephemeral: true
                                  });
      await db.set(`${interaction.guild.id}_antiwords`, true)
    }

        if(stringOption == "Disable") {

          if (!interaction.member.permissions.has("MANAGE_CHANNELS") ) {
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
    setTimeout(() => msg.delete(), 5000)
  });
          }
      if(!interaction.member.permissions.has('MANAGE_MESSAGES')) return;
      await interaction.editReply({embeds: [
            new MessageEmbed()
              .setColor("#ff5252")
                  .setThumbnail(user.displayAvatarURL({ dynamic : true }))
                   .setTitle(`**Anti Swear**`)
                   
          .setDescription(`<:2498discordcross:928271946825740328> **DISABLED THE ANTI-SWEAR SYSTEM**`)
  
],
})
      await db.set(`${interaction.guild.id}_antiwords`, false)
    }
  },
};