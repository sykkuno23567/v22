const { Client, Commandinteraction } = require("discord.js");
const ms = require('ms');

module.exports = {
    name: "timeout",
    description: "Timeout a user",
    type: 'CHAT_INPUT',
    usage: '/timeout',
	category: 'moderation',
    options: [
        {
            name: "user",
            description: "The user to timeout",
            type: "USER",
            required: true
        },
        {
            name: "length",
            description: "The length of the timeout",
            type: "STRING",
            required: true
        },
        {
            name: "reason",
            description: "The reason for the timeout",
            type: "STRING",
            required: true
        }
    ],
    /**
     *
     * @param {Client} client
     * @param {Commandinteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        

        if (!interaction.member.permissions.has("MODERATE_MEMBERS")) {
            return interaction.followUp({
                content: `<a:8218alert:928271947383570462>
 ︱ This command requires \`MODERATE_MEMBERS\` permission.`,
                ephemeral: true,
            });
        }

        let member = interaction.options.getMember("user")
        let length = interaction.options.getString("length")
        let reason = interaction.options.getString("reason")


        if(member.user.id === interaction.user.id) {
            return interaction.followUp({
                content: `<a:8218alert:928271947383570462>
 ︱ You can't timeout ${member}`,
                ephemeral: true,
            });
        } else if(member.user.id === interaction.client.user.id) {
            return interaction.followUp({
                content: `<a:8218alert:928271947383570462>
 ︱You can't timeout ${member}`,
                ephemeral: true,
            });
        } else if(member.user.id === interaction.guild.ownerId) {
            return interaction.followUp({
                content: `<a:8218alert:928271947383570462>
 ︱ You can't timeout ${member}`,
                ephemeral: true,
            });
        }

        if(interaction.member.roles.highest.position < member.roles.highest.position) {
            return interaction.followUp({
                content: `<a:8218alert:928271947383570462>
 ︱You can't timeout ${member}`,
                ephemeral: true,
            });
        }


        if(member.communicationDisabledUntilTimestamp > 0) {
            return interaction.followUp({
                content: "<a:8218alert:928271947383570462>︱ That user is already timed out!",
                ephemeral: true,
            });
        }

        if(!member.moderatable || !member.manageable) {
            return interaction.followUp({
                content: `<a:8218alert:928271947383570462>
 ︱ I can't timeout ${member}`,
                ephemeral: true,
            });
        }


        let time = ms(length);

        if(!time) {
            return interaction.followUp({
                content: "<a:8218alert:928271947383570462>︱ Enter a valid time!",
                ephemeral: true,
            });
        }

        if(time > 2.419e+9) {
            return interaction.followUp({
                content: "<:3595failed:928271941847121922>︱You can't timeout someone more than **28 days**!",
                ephemeral: true,
            });
        } else if(time < 1000) {
            return interaction.followUp({
                content: "<:3595failed:928271941847121922>︱ You can't timeout someone less than **1 second**!",
                ephemeral: true,
            });
        }
        await member.timeout(time, reason)

            return interaction.followUp({
                content: `${member} was been timeout For ${reason}`,
                ephemeral: true,
            });
    },
};