const Config = require('../../models/ticket/config');
const { Commandinteraction, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");



module.exports = {
    name: 'ticket-set',
    description: "setup new ticket",
    options: [{
        name: "channel",
        description: "The channel to send the panel in",
        required: true,
        type: "CHANNEL",
        channelTypes: ["GUILD_TEXT"]
    }, {
        name: 'category',
        description: "The category to put the tickets",
        required: true,
        type: "CHANNEL",
        channelTypes: ["GUILD_CATEGORY"]
    }],
    run :async(client,interaction,args,guild) => {
        const channel = interaction.options.getChannel('channel');
        const category = interaction.options.getChannel('category');
        const data = await Config.findOne({ Guild: interaction.guildId });
      const us = interaction.user|| interaction.author 
    const icon = interaction.guild.iconURL
      const user = interaction.user|| interaction.author
()

if (!interaction.guild.me.permissions.has("MANAGE_CHANNELS")) return interaction.followUp({
        embeds: [
            new MessageEmbed()
              .setColor("RANDOM")                .setThumbnail(user.displayAvatarURL({ dynamic : true }))
                               
          .setDescription(`<a:false:1007956851532505188>
\`I DON'T HAVE MANAGE_CHANNELS TO CREATE TICKETS!\``) 
.setTimestamp()

                   
          ],
                ephemeral: true,
              })
              .then(msg => {
    setTimeout(() => msg.delete(), 6000)
  });

      
      if (!interaction.member.permissions.has("MANAGE_CHANNELS") ) {
           return  interaction.followUp({
                embeds: [
            new MessageEmbed()
              .setColor("RANDOM")
                  .setThumbnail(user.displayAvatarURL({ dynamic : true }))
                               
          .setDescription(`<a:false:1007956851532505188> \`YOU DON'T HAVE MANAGE_CHANNELS PERMISSION!\``) 
.setTimestamp()

                   
          ],
                ephemeral: true,
        })
        .then(msg => {
    setTimeout(() => msg.delete(), 4000)
  });

        
      }
      if (!interaction.guild.me.permissionsIn(channel).has("VIEW_CHANNEL")) 
   return interaction.editReply({    embeds: [
            new MessageEmbed()
              .setColor("RANDOM")                .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                               
          .setDescription(`<a:false:1007956851532505188> \`I DON'T HAVE SEND_MESSAGES , VIEW_CHANNEL PERMISSION.\` `) 
.setTimestamp()

                   
          ],
                ephemeral: true,
              })
              .then(msg => {
    setTimeout(() => msg.delete(), 9000)
  });

      if (!interaction.guild.me.permissionsIn(channel).has("SEND_MESSAGES")) 
   return interaction.editReply({    embeds: [
            new MessageEmbed()
              .setColor("RANDOM")                .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                               
          .setDescription(`<a:false:1007956851532505188> \`I DON'T HAVE SEND_MESSAGES , VIEW_CHANNEL PERMISSION.\` `) 
.setTimestamp()

                   
          ],
                ephemeral: true,
              })
              .then(msg => {
    setTimeout(() => msg.delete(), 9000)
  });
      


        if(data){
            data.Category = category.id;
            data.Channel = channel.id;
            data.save();
        } else {
            new Config({
                Guild: interaction.guildId,
                Channel: channel.id,
                Category: category.id
            }).save();
        }
        let emb = new MessageEmbed()
      .setColor("GREEN")
      .setTitle("<a:tsup:1030175146364911696> 「𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝗧𝗶𝗰𝗸𝗲𝘁」")
      .setDescription("🔸PRESS THE BUTTON BELOW TO CONTACT STAFF")
      .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
      .setFooter({text : "\`This Ticket To Get Help or Report a Problem In The Server\`"});

    let row = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("open")
        .setLabel("┃ 𝐎𝐏𝐄𝐍 𝐓𝐈𝐂𝐊𝐄𝐓")
        .setEmoji("1030088797393780739")
        .setStyle("SUCCESS")
    );

    channel
      .send({
        embeds: [emb],
        components: [row],
      })
        return interaction.editReply({
            embeds:[{
                title: "Ticket Panel ✅",
                description: "Ticket Panel Sent To  \n\`Channel `\ \n <#" + channel.id + "> \n\`Category  `\ \n ** ><#" + category.id + ">**",
              
              
            }],
        }).then(msg => {
    setTimeout(() => msg.delete(), 4000)
  });

    }
          
    }
