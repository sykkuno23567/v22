const Discord = require("discord.js")
module.exports = {
  async execute(giveaway, winners) {
    winners.forEach((member) => {
      member.send({
        embeds: [new Discord.MessageEmbed()
          .setTitle(`🎉🎉YOU WON🎉🎉`)
          .setColor("RANDOM")
          .setDescription(`Hello there ${member.user}\n Congratulations 🎉**[[This Giveaway]](https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId})**\n You Have Won **${giveaway.prize}!**\nSend Message the host to claim your prize!!`)
                 .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQXz35Ql50HTABLaHlQiF-9xp-puLCXIOnIw&usqp=CAU')
          .setTimestamp()
          .setFooter({
            text: `${member.user.username}`, 
            iconURL: member.user.displayAvatarURL()
           })
        ]
      }).catch(e => {})
    });

  }
}