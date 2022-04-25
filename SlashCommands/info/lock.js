const { Client, Commandinteraction } = require("discord.js");

module.exports = {
    name: "lock",
    description: "Locks a channel",
    type: 'CHAT_INPUT',
    usage: '/lock',
	category: 'moderation',
    options: [
        {
            name: "channel",
            description: "The channel to lock",
            type: "CHANNEL",
            required: true
        },
        {
            name: "reason",
            description: "The reason for the lock",
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
        const member2 = interaction.member;
        if (!interaction.member.permissions.has("MANAGE_CHANNELS") ) {
            return interaction.followUp({
                content: `<:3595failed:928271941847121922>
 This command requires \`MANAGE_CHANNELS\` permission.`,
                ephemeral: true,
            });
        }

        let channel = interaction.options.getChannel("channel");
        let reason = interaction.options.getString("reason")

       if(!channel.permissionsFor(interaction.guild.roles.everyone).has("SEND_MESSAGES")) {
           return interaction.followUp({
               content: "<:TRUE:928271942782451812>That channel is already locked!",
               ephemeral: true,
           });
       }

        await channel.edit({
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: ["SEND_MESSAGES"],
                },
            ]
        }, reason)

            return interaction.followUp({
                content: `${channel} is locked now`,
                ephemeral: true,
            });
    },
};