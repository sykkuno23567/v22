const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "vote",
    description: "vote link",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        interaction.followUp({ content: `https://top.gg/bot/832390209881899039/vote` });
    },
};
