const client =  require('../index');
const Config = require('../models/ticket/config');
const { Commandinteraction, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

client.on('interactionCreate', async(interaction) => {
  
    if(!interaction.isButton()) return;
    const data = await Config.findOne({ Guild: interaction.guildId });
  const user = interaction.user|| interaction.author



  



  
    if(!data) return interaction.deferUpdate();
    if(interaction.customId == 'open'){
        const category = interaction.guild.channels.cache.get(data.Category);

      
        

      let ticker = interaction.user.id;
      
        const channel = await category.createChannel('ticket-' + interaction.user.username, {
            type: "GUILD_TEXT",
            permissionOverwrites: [{
                id: interaction.guild.id,
                deny: ["VIEW_CHANNEL"]
            }, {
                id: interaction.user.id,
                allow: ["VIEW_CHANNEL","ATTACH_FILES","SEND_MESSAGES","READ_MESSAGE_HISTORY","EMBED_LINKS"]
            }]
        })
      
      interaction.reply({
            content: ` <a:true:1007956822973501480>  - Ticket Created \n${channel}`,
            ephemeral: true
        })

      let emb = new MessageEmbed()
      .setColor("RED")
      .setTitle("<:Moderation:969966899532271717> Support Ticket")
      .setDescription("🔸**Support Will Be With You Shortly** \n\`To close this ticket react with`\ <:locks:1024451320607936625>")
  .setThumbnail(`${interaction.user.displayAvatarURL({size : 1024 , dynamic : true})}`)
      .setFooter({ text : "\`This Ticket To Get Help or Report a Problem In The Server\`"});
        
            let row = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("ticket-delete")
        .setLabel("┃ 𝐂𝐋𝐎𝐒𝐄 𝐓𝐈𝐂𝐊𝐄𝐓")
        .setEmoji("1007956851532505188")
        .setStyle("DANGER")
    );

    channel
      .send({ 
        content: `<@${interaction.user.id}>`,
        embeds: [emb],
        components: [row],
      }).then(msg => {
              msg.pin();
                    });
        
    } else if(interaction.customId == "ticket-delete"){
        const member = interaction.guild.members.cache.find(member => member.id == interaction.channel.name.trim().split('-')[1]);
        if(member){
            member.send({
                embeds:[{
                    title: "Ticket Closed",
                    description: "<:tic:969970291369443378> Your ticket has been closed",
                }]
            })
        }
        interaction.reply({
            content: "<a:true:1007956822973501480> **Ticket will be deleted in 5 seconds**",
            ephemeral: true
        })
        setTimeout(() => {
        interaction.channel.delete();
        }, 3000);
    }
})