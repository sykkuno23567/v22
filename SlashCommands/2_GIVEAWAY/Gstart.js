const { Discord, MessageEmbed} = require("discord.js")
const messages = require("../../utils/message");
const ms = require("ms")
module.exports = {
  name: 'g-start',
  description: '🎉 Start Fast Giveaway',

  options: [
    {
      name: 'duration',
      description: 'How long the giveaway Example values: 1m, 1h, 1d',
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
    },
        {
      name: 'channel',
      description: 'The channel to start the giveaway in',
      type: 'CHANNEL',
      required: true
    },

    {
                name: "host",
                description: "the host of the giveaway",
                type: "USER",
                required: false,
              },
  ],

  run: async (client, interaction, message) => {

    const us = interaction.user|| interaction.author 
    // If the member doesn't have enough permissions
if (!interaction.guild.me.permissions.has("MANAGE_MESSAGES")) return interaction.followUp({
        embeds: [
            new MessageEmbed()
              .setColor("RANDOM")                .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                               
          .setDescription(`<a:false:1007956851532505188> \`I DON'T HAVE MANAGE_MESSAGES PERMISSION.\` `) 
.setTimestamp()

                   
          ],
                ephemeral: true,
              });
              



    
    if (!interaction.member.permissions.has('MANAGE_MESSAGES') && !interaction.member.roles.cache.some((r) => r.name === "Giveaway Manager")) {
      return interaction.followUp({
embeds: [
            new MessageEmbed()
              .setColor("RANDOM")                .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                               
          .setDescription(`<a:false:1007956851532505188> \`YOU DON'T HAVE MANAGE_MESSAGES PERMISSION\` `) 
.setTimestamp()

                   
          ],
                ephemeral: true,
              });
              
      
    }

    const giveawayChannel = interaction.options.getChannel('channel');
    const giveawayDuration = interaction.options.getString('duration');
    const giveawayWinnerCount = interaction.options.getInteger('winners');
    const giveawayPrize = interaction.options.getString('prize');
    const guild =  interaction.guild.iconURL();


    if (!giveawayChannel.isText()) {
      return interaction.followUp({
        content: ' <a:false:1007956851532505188> You Did Not Select A Valid Channel!',
        ephemeral: true
      });
    }
   if(isNaN(ms(giveawayDuration))) {
    return interaction.followUp({
      content: '<a:false:1007956851532505188> Please select a valid duration!\n **EX:(30s,1m,1h,1d)',
      ephemeral: true
    });
  }
    if (giveawayWinnerCount < 1) {
      return interaction.followUp({
        content: ' <a:false:1007956851532505188> Please select a Winners Number \n**EX:(More then 1) **',
      })
    }

    const bonusRole = interaction.options.getRole('bonusrole')
    const bonusEntries = interaction.options.getInteger('bonusamount')
    let rolereq = interaction.options.getRole('role')
    let invite = interaction.options.getString('invite')

    if (bonusRole) {
      if (!bonusEntries) {
        return interaction.followUp({
          content: `:x: You must specify how many bonus entries would ${bonusRole} recieve!`,
          ephemeral: true
        });
      }
    }


    //await interaction.deferReply({ ephemeral: true })
    let reqinvite;
    if (invite) {
      let invitex = await client.fetchInvite(invite)
      let client_is_in_server = client.guilds.cache.get(
        invitex.guild.id
      )
      reqinvite = invitex
      if (!client_is_in_server) {
        return interaction.editReply({
          embeds: [{
            color: "#2F3136",
            author: {
              name: client.user.username,
              iconURL: client.user.displayAvatarURL() 
            },
            description:
              "Woah woah woah! I see a new server! are you sure I am in that? You need to invite me there to set that as a requirement! 😳",
  thumbnail: interaction.guild.iconURL({ dynamic: true }),
          }]
        })
      }
    }

    if (rolereq && !invite) {
      messages.inviteToParticipate = `**React with 🎉 to participate!**\n>>> - Only members having ${rolereq} are allowed to participate in this giveaway!`
    }
    if (rolereq && invite) {
      messages.inviteToParticipate = `**React with 🎉 to participate!**\n>>> - Only members having ${rolereq} are allowed to participate in this giveaway!\n- Members are required to join [this server](${invite}) to participate in this giveaway!`
    }
    if (!rolereq && invite) {
      messages.inviteToParticipate = `**React with 🎉 to participate!**\n>>> - Members are required to join [this server](${invite}) to participate in this giveaway!`
    }


const duration = interaction.options.getString('duration');
    const image = "https://media.discordapp.net/attachments/1011335817395974245/1013539180913103059/21.gif";
const winnerCount = interaction.options.getInteger('winners');
const prize = interaction.options.getString('prize');
    const hostedBy = interaction.options.getUser('host') || interaction.user;
    const u = interaction.options.getUser('user')  || interaction.user 

if (!interaction.guild.me.permissionsIn(giveawayChannel).has("VIEW_CHANNEL")) 
   return interaction.editReply({    embeds: [
            new MessageEmbed()
              .setColor("RANDOM")                .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                               
          .setDescription(`<a:false:1007956851532505188> \`I DON'T HAVE SEND_MESSAGES , VIEW_CHANNEL PERMISSION.\` `) 
.setTimestamp()

                   
          ],
                ephemeral: true,
              });
              

    
if
    (!interaction.guild.me.permissionsIn(giveawayChannel).has("SEND_MESSAGES","VIEW_CHANNEL")) return interaction.editReply({
      embeds: [
            new MessageEmbed()
              .setColor("RANDOM")                .setThumbnail(us.displayAvatarURL({ dynamic : true }))
                               
          .setDescription(`<a:false:1007956851532505188> \`I DON'T HAVE SEND_MESSAGES PERMISSION.\` `) 
.setTimestamp()

                   
          ],
                ephemeral: true,
              });
              
    
    
client.giveawaysManager.start(giveawayChannel, {

                              
    duration: ms(duration), 
    winnerCount,
    prize: `<a:emoji_77:1032063060204064858> 〢 ${prize}`,
  hostedBy,
  image: (image),
  embedFooter: interaction.user.avatarURL({ dynamic: true }),
  thumbnail: interaction.guild.iconURL({ dynamic: true }),
    messages: {
        giveaway: `** **`,
        giveawayEnded: '<:Info:969974352831463555> \`GIVEAWAY ENDED\`',
        drawing: '\n<:dbot_icon_slowmode:969929845494652949> **Timer:** \n{timestamp}',
        dropMessage: '**Be the first to win with** <a:giveaway:928271946238550036> !',
        inviteToParticipate: '\`React`\  <a:giveaway:928271946238550036>\`To Win`\!',
      hostedBy: `\n<a:white:1024434194920775822> **Hosted by: **\n ${hostedBy}`,
      noWinner:'<a:false:1007956851532505188> ** Giveaway Cancelled No Winners Joined**.',
      
        winMessage: 
      { 
    embed: {  description: `<a:giveaway:928271946238550036> Congratulations {winners} you won **[{this.prize}]({this.messageURL})** **[➚]({this.messageURL})**`,
fields: [
		{
			name: '• Use </reroll:0> + ID',
			value: `🎉 Ga ID: {this.messageId}`,
		},

          ], },
        embedFooter: '{this.winnerCount} winner(s)',
        
        hostedBy: `**Hosted by:** n\ ${hostedBy}`,
        winners: 'Winner(s):',
        endedAt: 'Ended at'
    }
}}
                              );
      

    interaction.editReply({
      content:
        `Giveaway started in ${giveawayChannel}! (AUTO DELETED)`,
ephemeral: true
      

      
    }).catch((e) => {
        console.log(e);
      });
    setTimeout(() => interaction.deleteReply(), 3000);



    if (bonusRole) {
      let giveaway = new Discord.MessageEmbed()
        .setAuthor({ text: `Bonus Entries Alert!` })
        .setDescription(
          `**${bonusRole}** Has **${bonusEntries}** Extra Entries in this giveaway!`
        )
        .setColor("#2F3136")
        .setTimestamp();
      giveawayChannel.send({ embeds: [giveaway] });
    }

  }

};