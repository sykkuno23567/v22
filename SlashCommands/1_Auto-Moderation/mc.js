const discord = require('discord.js'); 
  
 module.exports = { 
     name: "memberscount", 
     description: "Get RealTime Server Count", 
     type: 'CHAT_INPUT', 
     /** 
      * 
      * @param {CommandInteraction} interaction 
      * @param {String[]} args 
      */ 
     run: async (client, interaction, args) => { 
                 let embed = new discord.MessageEmbed() 
.setTitle(`<a:mod:1030599639264677908> ${interaction.guild.name}`)

                         .setDescription( 
                                 ` 
<:3643members:969929550756728842>  |• \`Total Server Members\`  <a:emoji_77:1032063060204064858> ${interaction.guild.memberCount} 
 <:users:1030599694910492712> |• \`Humans Count \`   <a:emoji_77:1032063060204064858> ${interaction.guild.members.cache.filter(m => !m.user.bot).size} 
 <:2346wumpusking:928271943763918848> |• \`Bots Count \` <a:emoji_77:1032063060204064858>  ${interaction.guild.members.cache.filter(m => m.user.bot).size}` 
                         ) 
                         .setColor('RANDOM') 
                         .setTimestamp((interaction.timestamp = Date.now())); 
  
                 interaction.followUp({ embeds: [embed]}); 
         } 
 };