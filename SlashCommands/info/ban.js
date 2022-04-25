const { Client, Commandinteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "ban",
    description: "Bans a user from the server",
    type: 'CHAT_INPUT',
	         	usage: '/ban',
	category: 'moderation',
    options: [
        {
            name: "user",
            description: "The user to ban",
            type: "USER",
            required: true
        },
        {
            name: "reason",
            description: "The reason for the ban",
            type: "STRING",
            required: false
        }
    ],
    /**
     *
     * @param {Client} client
     * @param {Commandinteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {

        let member = interaction.options.getMember("user")
        let reason = interaction.options.getString("reason")

        if(member.user.id === interaction.user.id) {
            return interaction.followUp({
                content: `<a:8218alert:928271947383570462>
 ︱You Can't Ban ${member}`,
                ephemeral: true,
            });
        } else if(member.user.id === interaction.client.user.id) {
		
            return interaction.followUp({
                content: `<a:8218alert:928271947383570462>
 ︱You Can't Ban ${member}`,
                ephemeral: true,
            });
        } else if(member.user.id === interaction.guild.ownerId) {

            return interaction.followUp({
                content: `<a:8218alert:928271947383570462>
 ︱You Can't Ban ${member}<:2346wumpusking:928271943763918848>
`,     
                ephemeral: true,
            });
        }

        if(interaction.member.roles.highest.position < member.roles.highest.position) {
            return interaction.followUp({
                content: `<a:8218alert:928271947383570462>
 ︱You Can't Ban ${member} His Have A Highest Role `,
                ephemeral: true,
            });
        }


        if(!member.bannable) {
            return interaction.followUp({
                content: `<a:8218alert:928271947383570462>
 ︱You Can't Ban ${member}`,
                ephemeral: true,
            });
        }
        await member.ban({reason: `${reason}`})

            return interaction.followUp({
                content: `<:TRUE:928271942782451812>
 ︱Done, ${member} banned For **${reason}**`,
            });
    },
};