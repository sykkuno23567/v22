const { CommandInteraction, Client, MessageEmbed } = require("discord.js");
const {  MessageSelectMenu, MessageActionRow, MessageButton } = require('discord.js');

const Schema = require("../../schemas/AFK-people");

module.exports = {
  name: "afk",
  description: "to set your status (AFK)",

  run: async (client, interaction, args, message) => {
const channel = interaction.channel
    const user = interaction.user|| interaction.author
      const us = interaction.user|| interaction.author 
     //////////////////
      if (!interaction.guild.me.permissionsIn(channel).has("VIEW_CHANNEL")) 
   return interaction.editReply({    embeds: [
            new MessageEmbed()
              .setColor("RANDOM")                
              .setThumbnail(us.displayAvatarURL({ dynamic : true }))                 
              .setDescription(`<a:false:1007956851532505188> \`I DON'T HAVE VIEW_CHANNEL PERMISSION.\` `) 
.setTimestamp()

                   
          ],
                ephemeral: true,
              });
              

      if (!interaction.guild.me.permissionsIn(channel).has("SEND_MESSAGES")) 
   return interaction.Reply({    embeds: [
            new MessageEmbed()
              .setColor("RANDOM")               
              .setThumbnail(us.displayAvatarURL({ dynamic : true }))                 
          .setDescription(`<a:false:1007956851532505188> \` I DON'T HAVE SEND_MESSAGES PERMISSION. \` `) 
.setTimestamp()

                   
          ],
                ephemeral: true,
              });
    
    /////////////////
    
    Schema.findOne({ userId: interaction.user.id }, async (err, data) => {
      if (data) {
        let embed = new MessageEmbed()
          .setColor("BLUE")
          .setDescription(`BRO YOU ARE ALREADY AFK`);
        await interaction.editReply({ embeds: [embed] });
      } else {
        await new Schema({
          userId: interaction.user.id,
        }).save();

        if (!interaction.member.displayName.includes(`[AFK] `)) {
                interaction.member.setNickname(`[AFK]-` + interaction.member.displayName).catch(e => {interaction.member.send("📛 i couldn't Change Your Name \n\`MY ROLE IS LOWER THEN YOURS!\`") });
        }
        
        let embed = new MessageEmbed()
          .setColor("BLUE")
          .setTitle("<:aon:1024449941051019305> AFK ") 
.setThumbnail("https://cdn.discordapp.com/attachments/912313430168453131/1001470579595034655/ezgif.com-gif-maker_1.gif")
          .setDescription(`**You Have Gone AFK!**<a:afk:1035318340949905418>`)
          .setFooter({text: "\`Did You Know That AFK = Away From Keyboard\`"});
        
        const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
				.setURL(`https://discord.com/api/oauth2/authorize?client_id=832390209881899039&permissions=1100451540087&scope=bot%20applications.commands`)
				.setLabel("🎉| Add-Bot")
				.setStyle('LINK'),
        );
 
        
        await interaction.followUp({ embeds: [embed],components: [row] });
        
      }
    });
  },
};