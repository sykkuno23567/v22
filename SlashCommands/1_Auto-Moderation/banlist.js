const { CommandInteraction, Client, MessageEmbed } = require("discord.js"); 
  
 module.exports = { 
   name: "bans-list", 
   description: "List of Bans in The Server", 
   permission: "BAN_MEMBERS", 
  
   run: async (client, interaction) => { 


const user = interaction.user|| interaction.author
     if (!interaction.guild.me.permissions.has("BAN_MEMBERS")) return interaction.followUp({
        embeds: [
            new MessageEmbed()
              .setColor("RANDOM")                .setThumbnail(user.displayAvatarURL({ dynamic : true }))
                               
          .setDescription(`<a:false:1007956851532505188> \`I DON'T HAVE BAN_MEMBERS PERMISSION\` `) 
.setTimestamp()

                   
          ],
                ephemeral: true,
              })
              .then(msg => {
    setTimeout(() => msg.delete(), 7000)
  });
     if(!interaction.member.permissions.has('BAN_MEMBERS')) return interaction.editReply({embeds: [
            new MessageEmbed()
              .setColor("RANDOM")                .setThumbnail(user.displayAvatarURL({ dynamic : true }))
                               
          .setDescription(`<a:false:1007956851532505188> \`YOU DON'T HAVE BAN_MEMBERS PERMISSION\` `) 
.setTimestamp()

                   
          ],
                ephemeral: true,
              })
              .then(msg => {
    setTimeout(() => msg.delete(), 7000)
  });
      
     const fetchBans = interaction.guild.bans.fetch(); 
     var amount = 1; 
     const bannedMembers = (await fetchBans) 
       .map( 
         (member) => 
           `${amount++} **${member.user.username}** | (*${member.user.id}*)` 
       ) 
       .join("\n"); 
  
     const list = new MessageEmbed() 
       .setTitle(` <a:ban:1030219573150097458> \`Bans in ${interaction.guild.name}\``) 
       .setDescription(`**There Are : ${amount - 1} Member Banned In This Server** `) 
   
       .setTimestamp() 
       .setColor("RANDOM"); 
     return interaction.followUp({ embeds: [list] }); 
   }, 
 };