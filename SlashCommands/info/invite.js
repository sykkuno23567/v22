const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "invite",
    description: "invite the bot",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        interaction.followUp({ content: `https://discord.com/api/oauth2/authorize?client_id=832390209881899039&permissions=8&scope=applications.commands%20bot` });
    },
};

