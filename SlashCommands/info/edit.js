module.exports = {
    name: 'edit',
    description: '🎉 Edit a giveaway',

    options: [
        {
            name: 'giveaway',
            description: 'The giveaway to end (message ID)',
            type: 'STRING',
            required: true
        },
        {
            name: 'duration',
            description: 'Setting time of mentioned giveaway. Eg. 1h sets the current giveaway to end after an hour!',
            type: 'STRING',
            required: true
        },
        {
            name: 'winners',
            description: 'How many winners the giveaway should have',
            type: 'INTEGER',
            required: true
        },
        {
            name: 'prize',
            description: 'What the prize of the giveaway should be',
            type: 'STRING',
            required: true
        }
    ],

    run: async (client, interaction) => {

        // If the member doesn't have enough permissions
        if (!interaction.member.permissions.has('MANAGE_MESSAGES') && !interaction.member.roles.cache.some((r) => r.name === "Giveaways")) {
            return interaction.followUp({
                content: ':x: **You Need To Have a Giveaways Manger To start a Giveaway**.',
                ephemeral: true
            });
        }
        const gid = interaction.options.getString('giveaway');
        const time = interaction.options.getString('duration');
        const winnersCount = interaction.options.getInteger('winners');
        const prize = interaction.options.getString('prize');
        
        await interaction.deferReply({
         ephemeral: true
        })
        // Edit the giveaway
        try {
        await client.giveawaysManager.edit(gid, {
            newWinnersCount: winnersCount,
            newPrize: prize,
            addTime: time
        })
        } catch(e) {
return interaction.editReply({
            content:
                `No giveaway found with the given message ID: \`${gid}\``,
            ephemeral: true
        });
        }
        interaction.editReply({
            content:
                `This giveaway has now been edited!`,
            ephemeral: true
        });
    }

};