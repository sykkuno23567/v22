const { Client, Collection, MessageEmbed, MessageActionRow, MessageButton, MessageAttachment } = require('discord.js');
//
module.exports = {
    name: 'invites',
    description: 'Get Yours/users Invites ',
             	usage: '/invites',
	category: 'information',
    permission: ['SEND_MESSAGES'],
    ownerOnly: false,
    options: [
        {
            name: 'user',
            type: 'USER',
            description: 'tag to see their invs',
            required: false
        }
    ],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, interaction, args, message) => {
const us = interaction.options.getUser('user') || interaction.user || interaction.author 
      
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
      
      if (!interaction.guild.me.permissions.has("MANAGE_GUILD")) return interaction.followUp({
        embeds: [
            new MessageEmbed()
              .setColor("RANDOM")                .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                               
          .setDescription(`<a:false:1007956851532505188> \` I DON'T HAVE MANAGE_SERVER PERMISSION. \` `) 
.setTimestamp()

                   
          ],
                ephemeral: true,
              })
              .then(msg => {
    setTimeout(() => msg.delete(), 6000)
  });
        const user = interaction.guild.members.cache.get(args[0]) || interaction.member

        let invites = await interaction.guild.invites.fetch();
        let userInv = invites.filter(u => u.inviter && u.inviter.id === user.id)

        if (userInv.size <= 0) {
            return interaction.followUp({ embeds: [
            new MessageEmbed()
              .setColor("RANDOM")                .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                               
          .setDescription(`__${user}__ \`Dude You Have \` **__0__** \`Invites How Is That Possible???\` `) 
              .setImage("https://cdn.discordapp.com/attachments/1031657612695060650/1033747450948767914/giphy.gif")
.setTimestamp()

                   
          ],
                ephemeral: true,
              });
              

        }

        let invCodes = userInv.map(x => x.code).join('\n')
        let i = 0;
        userInv.forEach(inv => i += inv.uses);

        const tackerEmbed = new MessageEmbed()
          .setColor(`RANDOM`)
            .setDescription(`<a:emoji_77:1032063060204064858> **_INVITES  OF :_** \n${user} `)
          .setThumbnail(us.displayAvatarURL({ dynamic : true }))
            .addField(`INVITES COUNT`, `=> ${i} <=`)
            .addField(' <a:tsup:1030175146364911696> USED INV CODES:', `${invCodes}`)

        interaction.followUp({ embeds: [tackerEmbed] });
    }
}