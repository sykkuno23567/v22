const Discord = require("discord.js")
module.exports = {
  async execute(giveaway, reactor, messageReaction) {
    let approved =  new Discord.MessageEmbed()
    .setTimestamp()
    .setColor("#2F3136")
    .setAuthor({name: "Entry Confirmed!", iconURL: "https://i.imgur.com/Lf1IHlA.png"})    
    .setDescription(
      `Your entry to **${giveaway.prize}** on [This Server](https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId}) has been approved! \nEarn extra points by [Voting.](https://top.gg/bot/832390209881899039/vote) \n\n [Invite](https://discord.com/api/oauth2/authorize?client_id=832390209881899039&permissions=1102196370503&scope=bot%20applications.commands) | [Support](https://discord.gg/ReJ2CSpMfa)`
    )
.setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMwlBU10alwahOtwLblTpcdjtYWQn2_1AJKw&usqp=CAU')
    .setFooter({ text: "©️ Snap" })
    .setTimestamp()
   let denied =  new Discord.MessageEmbed()
    .setTimestamp()
    .setColor("#2F3136")
    .setAuthor({name: "Entry Denied!", iconURL: "https://i.imgur.com/Jjo00oT.png"})    
    .setDescription(
      `Your entry to **${giveaway.prize}** on [This Server](https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId}) has been denied \nPlease review the requirements to enter the giveaway properly. \n\n [Invite](https://discord.com/api/oauth2/authorize?client_id=832390209881899039&permissions=1102196370503&scope=bot%20applications.commands) | [Support](https://discord.gg/ReJ2CSpMfa)`
    )
    .setFooter({ text: "©️ Snap" })

    let client = messageReaction.message.client
    if (reactor.user.bot) return;
    if(giveaway.extraData) {
      if (giveaway.extraData.server !== "null") {
        try { 
        await client.guilds.cache.get(giveaway.extraData.server).members.fetch(reactor.id)
        return reactor.send({
          embeds: [approved]
        });
        } catch(e) {
          messageReaction.users.remove(reactor.user);
          return reactor.send({
            embeds: [denied]
          }).catch(e => {})
        }
      }
      if (giveaway.extraData.role !== "null" && !reactor.roles.cache.get(giveaway.extraData.role)){ 
        messageReaction.users.remove(reactor.user);
        return reactor.send({
          embeds: [denied]
        }).catch(e => {})
      }

      return reactor.send({
        embeds: [approved]
      }).catch(e => {})
    } else {
        return reactor.send({
          embeds: [approved]
        }).catch(e => {})
    }
    }
  }
