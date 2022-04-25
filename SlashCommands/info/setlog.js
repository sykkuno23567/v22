const { Client, CommandInteraction } = require("discord.js");
const Guild = require("../../models/log");//require our log model
const mongoose = require("mongoose");
module.exports = {
    name: "setlog",
    description: "setlog for logs",
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'channel',
            description: 'the room to set log',
            type: 'CHANNEL',
            required: true
        }
    ],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        if (!interaction.member.permissions.has('ADMINISTRATOR') && !interaction.member.roles.cache.some((r) => r.name === "log")) {
            return interaction.followUp({
                content: ':x: You need to have the manage ADMINISTRATOR permissions to set log',
                ephemeral: true
            });
        }
        const channel = interaction.options.getChannel("channel")
        const guild1 = interaction.guild;
        let webhookid;
        let webhooktoken;
        await channel
          .createWebhook(guild1.name, {
            avatar: guild1.iconURL({ format: "png" })
          })
          .then(webhook => {
            webhookid = webhook.id;
            webhooktoken = webhook.token;
          });
          await Guild.findOne(
          {
            guildID: interaction.guild.id
          },
          async (err, guild) => {
            if (err) console.error(err);
            if (!guild) {
              const newGuild = new Guild({
                _id: mongoose.Types.ObjectId(),
                guildID: interaction.guild.id,
                guildName: interaction.guild.name,
                logChannelID: channel.id,
                webhookid: webhookid,
                webhooktoken: webhooktoken
              });
    
              await newGuild
                .save() //save the data to database(mongodb)
                .then(result => console.log(result))
                .catch(err => console.error(err));
    
              return  interaction.followUp(
                `The log channel has been set to ${channel}`
              );
            } else {
              guild
                .updateOne({ //if data is found then update it with new one
                  logChannelID: channel.id,
                  webhooktoken: webhooktoken,
                  webhookid: webhookid
                })
                .catch(err => console.error(err));
    
              return interaction.followUp(
                `The log channel has been updated to ${channel}`
              );
            }
          }
          );
    },
};
