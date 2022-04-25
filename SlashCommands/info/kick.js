const { Client, Commandinteraction } = require("discord.js");

module.exports = {
    name: "kick",
    description: "kick someone in the server",
    type: 'CHAT_INPUT',
    usage: '/kick',
	category: 'moderation',
    options: [
        {
            name: "user",
            description: "The user to kick",
            type: "USER",
            required: true
        },
        {
            name: "reason",
            description: "The reason for the kick",
            type: "STRING",
            required: false
        }
    ],
    /** //
     *
     * @param {Client} client
     * @param {Commandinteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const member2 = interaction.member;
        
        if (!interaction.member.permissions.has("KICK_MEMBERS") ) {
            
            return interaction.followUp({
                content: "<a:8218alert:928271947383570462>︱You Need To Be A Staff Member To Do This .",
                ephemeral: true,
            });
        }

        let member = interaction.options.getMember("user")
        let reason = interaction.options.getString("reason")

        if(member.user.id === interaction.user.id) {
            return interaction.followUp({
                content: `<a:8218alert:928271947383570462>︱ You can't kick ${member}`,
                ephemeral: true,
            });
        } else if(member.user.id === interaction.client.user.id) {
            return interaction.followUp({
                content: `<a:8218alert:928271947383570462>︱ You can't kick ${member}`,
                ephemeral: true,
            });
        } else if(member.user.id === interaction.guild.ownerId) {
            
            return interaction.followUp({
                 content: `<a:8218alert:928271947383570462>︱ You can't kick ${member}`,
                ephemeral: true,
            });
        }

        if(interaction.member.roles.highest.position < member.roles.highest.position) {
            return interaction.followUp({
                 content: `<a:8218alert:928271947383570462>︱You can't kick ${member}`,
                ephemeral: true,
            });
        }


        if(!member.kickable) {
            return interaction.followUp({
                 content: `<a:8218alert:928271947383570462>︱ You can't kick ${member}`,
                ephemeral: true,
            });
        }
        await member.kick({reason: `${reason}`})

            return interaction.followUp({
                content: `<a:emoji_19:964499203717992448> ︱Done, ${member} Have been kicked From `,
                ephemeral: true,
            });
       

    },
};