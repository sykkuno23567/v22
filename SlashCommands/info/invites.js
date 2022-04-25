const { Client, Collection, MessageEmbed, MessageActionRow, MessageButton, MessageAttachment } = require('discord.js');
//
module.exports = {
    name: 'invites',
    description: 'Get the number of people that joined via your invites',
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
        const user = interaction.guild.members.cache.get(args[0]) || interaction.member

        let invites = await interaction.guild.invites.fetch();
        let userInv = invites.filter(u => u.inviter && u.inviter.id === user.id)

        if (userInv.size <= 0) {
            return interaction.followUp({ content: `${user} has \`0\` invites <a:emoji_24:968125886488535091>
Invite More People To Get Rewards ${member.guild.name}` })
        }

        let invCodes = userInv.map(x => x.code).join('\n')
        let i = 0;
        userInv.forEach(inv => i += inv.uses);

        const tackerEmbed = new MessageEmbed()
            .setDescription(`**_Invites  of :_** ${user} `)
            .addField(`User Invites`, `${i}`)
            .addField('Invite Codes:', `${invCodes}`)

        interaction.followUp({ embeds: [tackerEmbed] });
    }
}