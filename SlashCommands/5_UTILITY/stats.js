const { MessageEmbed, MessageActionRow, MessageButton , ButtonStyle} = require("discord.js");
const Discord = require("discord.js");
const os = require('os')

module.exports = {
    name: "stats",
    description: "Shows Bot Stats",
    run: async (client, interaction, args) => {
        try {
            let totalSeconds = interaction.client.uptime / 1000;
            let days = Math.floor(totalSeconds / 86400);
            totalSeconds %= 86400;
            let hours = Math.floor(totalSeconds / 3600);
            totalSeconds %= 3600;
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = Math.floor(totalSeconds % 60);
            
            let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
  

            const statsEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(client.user.tag, client.user.displayAvatarURL())
            .setDescription(`[Invite](https://discord.com/api/oauth2/authorize?client_id=832390209881899039&permissions=1100585757719&scope=bot%20applications.commands) ● [Support Server](https://discord.gg/ReJ2CSpMfa)`)
            .setFooter(`Thanks For Using ${client.user.username}`, client.user.displayAvatarURL())
            .addFields (
                { name: `<:Moderation:969966899532271717> • **Servers**`, value: `\`\`\`Total Of ${client.guilds.cache.size} servers\`\`\``, inline: true },


{ name: `<:chat:1024449897522548786> • **Channels**`, value: `\`\`\`Total Of ${client.channels.cache.size} channels\`\`\``, inline: true }, 
          

                { name: `<:2346wumpusking:928271943763918848> • **Users**`, value: `\`\`\`There Are ${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} Users Using ${client.user.username} \`\`\``, inline: true }, 
                { name: `<:emoji_21:964500521178247228> • **Uptime**`, value: `\`\`\`${uptime}\`\`\``, inline: true },
                { name: `<a:high:1027273414903337020> • **Ping**`, value: `\`\`\`${client.ws.ping}ms\`\`\``, inline: true },
            )


          const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
				.setURL(`https://discord.com/api/oauth2/authorize?client_id=832390209881899039&permissions=1100585757719&scope=bot%20applications.commands`)
				.setLabel("🔥| Invite ")
				.setStyle('LINK'),
        
				new MessageButton()
				.setURL(`https://top.gg/bot/832390209881899039/vote`)
				.setLabel("🎉| Top.GG")
				.setStyle('LINK'),

        
        );
        
            interaction.followUp({ embeds: [statsEmbed], components: [row] });
        } catch (e) {
            console.log(String(e.stack).bgRed)
			const emesdf = new MessageEmbed()
			.setColor("RED")
			.setAuthor(`An Error Occurred`)
			.setDescription(`\`\`\`${e.message}\`\`\``);
			return interaction.followUp({ embeds: [emesdf ]});
        }
    }
}