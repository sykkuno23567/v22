const Discord = require("discord.js")
module.exports = {
  async execute(giveaway, member) {
    return member.send({
      embeds: [new Discord.MessageEmbed()
        .setTimestamp()
        .setTitle('**Did You Not Like My Giveaway!**')
        .setColor("RANDOM")
        .setDescription(
          `Your entery to [This Giveaway](https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId}) was Removed Form **${giveaway.prize}** I would have to choose someone else ✌️`
        )
        .setFooter({ text: "Think It was a mistake? Go react 🎉 again! i Will Be Happy To Let You Win" })
      ]
    }).catch(e => {})

  }
}