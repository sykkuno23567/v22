const { Client, ContextMenuInteraction, MessageEmbed, Guild , MessageSelectMenu, MessageActionRow, MessageButton} = require("discord.js");
const { readdirSync } = require("fs");

module.exports = {
  name: "help",
  description: "Show All Snap Commands",
  /**
   * @param {Client} client
   * @param {ContextMenuInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    const us = interaction.user|| interaction.author 
          const channel = interaction.channel
            if (!interaction.guild.me.permissionsIn(channel).has("VIEW_CHANNEL")) 
   return interaction.editReply({    embeds: [
            new MessageEmbed()
              .setColor("RANDOM")                .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                               
          .setDescription(`<a:false:1007956851532505188> \`I DON'T HAVE SEND_MESSAGES , VIEW_CHANNEL PERMISSION.\` `) 
.setTimestamp()

                   
          ],
                ephemeral: true,
              });
              

      if (!interaction.guild.me.permissionsIn(channel).has("SEND_MESSAGES")) 
   return interaction.editReply({    embeds: [
            new MessageEmbed()
              .setColor("RANDOM")                .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                               
          .setDescription(`<a:false:1007956851532505188> \`I DON'T HAVE SEND_MESSAGES , VIEW_CHANNEL PERMISSION.\` `) 
.setTimestamp()

                   
          ],
                ephemeral: true,
              });
      
    const roleColor =
    interaction.guild.me.displayHexColor === "#000000"
        ? "#ffffff"
        : interaction.guild.me.displayHexColor;

    if (!args[0]) {
      let categories = [];

      readdirSync("./SlashCommands/").forEach((dir) => {
        const commands = readdirSync(`./SlashCommands/${dir}/`).filter((file) =>
          file.endsWith(".js")
        );

        const cmds = commands.map((command) => {
          let file = require(`../../SlashCommands/${dir}/${command}`);

          if (!file.name) return "No command name.";

          let name = file.name.replace(".js", "");
          let description = file.description;

          return `\`${name}\` : ${description} \n`;
        });

        let data = new Object();

        data = {
          name: dir.toUpperCase(),
          value: cmds.length === 0 ? "In progress." : cmds.join(" "),
        };

        categories.push(data);
      });

      const embed = new MessageEmbed()
        
        .setTitle("📁 Need help? Here are all of my commands:")
        .addFields(categories)
        .setDescription(
          `=> Use \`/help\` To See **SNAPINGOO** Commands For example: </ticket-set:0> </invite:0>`
        )
        .setThumbnail(interaction.user.displayAvatarURL({ dynamic : true }))
        
        

        .setColor("RANDOM"); 


      const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
				.setURL(`https://discord.com/api/oauth2/authorize?client_id=832390209881899039&permissions=1100585757719&scope=bot%20applications.commands`)
				.setLabel("🔥| Invite")
				.setStyle('LINK'),
        
        
			
				new MessageButton()
				.setURL(`https://top.gg/bot/832390209881899039/vote`)
				.setLabel("🎉| Top.gg")
				.setStyle('LINK'),
			);
      
      return interaction.followUp({ embeds: [embed], components: [row] });
    } else {
      const command =
        client.commands.get(args[0].toLowerCase()) ||
        client.commands.find(
          (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
        );

      if (!command) {
        const embed = new MessageEmbed()
          .setTitle(
            `Invalid command! Use \`/help\` for all of my commands!`
          )
          .setColor("RAMDOM");
        return interaction.followUp({ embeds: [embed] });
      }

      const embed = new MessageEmbed()
        .setTitle("Command Details:")
        .addField(":", `\`/\``)
        .addField(
          "COMMAND:",
          command.name ? `\`${command.name}\`` : "No name for this command."
        )
        .addField(
          "ALIASES:",
          command.aliases
            ? `\`${command.aliases.join("` `")}\``
            : "No aliases for this command."
        )
        .addField(
          "USAGE:",
          command.usage
            ? `\`/${command.name} ${command.usage}\``
            : `\`/${command.name}\``
        )
        .addField(
          "DESCRIPTION:",
          command.description
            ? command.description
            : "No description for this command."
        )
  
        .setColor("RANDOM");
      const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
				.setURL(`https://top.gg/bot/832390209881899039/vote`)
				.setLabel("🎉| Top.GG")
				.setStyle('LINK'),
        
        
			
				new MessageButton()
				.setURL(`https://voidbots.net/bot/832390209881899039/vote`)
				.setLabel("🎉| Void-Bots")
				.setStyle('LINK'),
			);
      
      return interaction.followUp({ embeds: [embed], components: [row] });
    }
  },
          }