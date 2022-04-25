const { Client, Commandinteraction } = require("discord.js");

module.exports = {
    name: "unlock",
    description: "The channel to unlock",
    type: 'CHAT_INPUT',
    usage: '/unlock',
	category: 'moderation',
    options: [
        {
            name: "channel",
            description: "The channel to unlock",
            type: "CHANNEL",
            required: true
        },
        {
            name: "reason",
            description: "The reason for the unlock",
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
        
        if (!interaction.member.permissions.has("MANAGE_CHANNELS") ) {
            return interaction.followUp({
                content: `<a:8218alert:928271947383570462>
 ︱This command requires a Staff permissions.`,
                ephemeral: true,
            });
        }

        let channel = interaction.options.getChannel("channel");
        let reason = interaction.options.getString("reason")


        if(channel.permissionsFor(interaction.guild.roles.everyone).has("SEND_MESSAGES")) {
            return interaction.followUp({
                content: "<a:8218alert:928271947383570462>︱That channel is already unlocked!",
                ephemeral: true,
            });
        }

        await channel.edit({
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    allow: ["SEND_MESSAGES"],
                },
            ]
        }, reason)

            return interaction.followUp({
                content: `${channel} is unlocked now`,
                ephemeral: true,
            });

    },
};