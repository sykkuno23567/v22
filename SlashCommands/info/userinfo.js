const { Client, MessageEmbed , MessageActionRow, MessageButton} = require("discord.js");
module.exports = {
    name: "userinfo",
    description: "just userinfo",
             	usage: '/userinfo',
	category: 'information',
    options: [
        {
            name: 'user',
            description: 'member to get info about him',
            type: 'USER',
            required: false
        }
    ],
    run: async (client, interaction, args) => {

         const u = interaction.options.getUser('user')  || interaction.user 
        var uu = interaction.guild.members.cache.get(u.id)
        var ee = new MessageActionRow().addComponents(
            new MessageButton()
        .setLabel(`Main info`)
        .setEmoji(`ℹ`)
        .setCustomId(`main`)
        .setDisabled(true)
        .setStyle(`PRIMARY`),
        new MessageButton()
             .setLabel(`Roles info`)
             .setStyle(`PRIMARY`)
             .setEmoji(`ℹ`)
             .setCustomId(`roles`),
             new MessageButton()
             .setLabel(`Permissions`)
             .setStyle(`PRIMARY`)
             .setEmoji(`ℹ`)
             .setCustomId(`permissions`)
        
          ); 
       var e = new MessageEmbed()
       .setAuthor(`${u.username}`)
       .addField(`Name : `,`${u.username}`,true)
       .addField(`Id : `,`${u.id}`,true)
       .addField(`User created at : `,`<t:${parseInt(u.createdAt / 1000)}:R>`,true)
       .addField(`User joined at : `,`<t:${parseInt(uu.joinedAt / 1000)}:R>`,true)
       .addField(`Nickname : `,`${uu.nickname || `None`}`,true)
       .addField(`Presence : `,`${uu.presence?.status || `offline`}`,true)
       .setColor(`#303134`)
       .setThumbnail(`${u.displayAvatarURL({size : 1024 , dynamic : true})}`)
      interaction.followUp({embeds : [e] , components : [ee]})
       var f = i => i.customId === `main` || i.customId === `roles`  && i.u.id === interaction.author.id
       var c = interaction.channel.createMessageComponentCollector({ f, time: 30000 });
       c.on(`collect`, i => {
           i.deferUpdate()
        if (i.customId === 'main') {
            interaction.followUp({embeds : [e] , components : [ee], ephemeral: true,})
        }
        if(i.customId === `roles`) {
            var eeee = new MessageActionRow().addComponents(
                new MessageButton()
            .setLabel(`Main info`)
            .setEmoji(`ℹ`)
            .setCustomId(`main`)
            .setDisabled(false)
            .setStyle(`PRIMARY`),
            new MessageButton()
                 .setLabel(`Roles info`)
                 .setStyle(`PRIMARY`)
                 .setEmoji(`ℹ`)
                 .setDisabled(true)
                 .setCustomId(`roles`),
                 new MessageButton()
                 .setLabel(`Permissions`)
                 .setStyle(`PRIMARY`)
                 .setEmoji(`ℹ`)
                 .setCustomId(`permissions`)
              ); 
            var eee = new MessageEmbed()
            .setAuthor(`${u.username}`,`${u.avatarURL({dynamic : true}) }`)
          .addField(`Roles : `,`${uu.roles.cache.map(r => r).sort((first, second) => second.position - first.position).join(`, `)}`,true)
          .addField(`Highest role : `,`${uu.roles.highest}`,true)
            .setColor(`#303134`)
            .setThumbnail(`${u.displayAvatarURL({size : 1024 , dynamic : true})}`)
            interaction.followUp({embeds : [eee] , components : [eeee], ephemeral: true,})
        }
        if(i.customId === `permissions`) {
            var eeeee = new MessageActionRow().addComponents(
                new MessageButton()
            .setLabel(`Main info`)
            .setEmoji(`ℹ`)
            .setCustomId(`main`)
            .setStyle(`PRIMARY`),
            new MessageButton()
                 .setLabel(`Roles info`)
                 .setStyle(`PRIMARY`)
                 .setEmoji(`ℹ`)
                 .setCustomId(`roles`),
                 new MessageButton()
                 .setLabel(`Permissions`)
                 .setStyle(`PRIMARY`)
                 .setEmoji(`ℹ`)
                 .setDisabled(true)
                 .setCustomId(`permissions`)
              ); 
              var eee2= new MessageEmbed()
              .setAuthor(`${u.username}`,`${u.avatarURL({dynamic : true}) }`)
            .addField(`Permissions : `,`\`\`\`${uu.permissions.toArray().join(` | `)}\`\`\``,true)
              .setColor(`#303134`)
              .setThumbnail(`${u.displayAvatarURL({size : 1024 , dynamic : true})}`)
              interaction.followUp({embeds : [eee2] , components : [eeeee], ephemeral: true,})
        }
       })
    }
}