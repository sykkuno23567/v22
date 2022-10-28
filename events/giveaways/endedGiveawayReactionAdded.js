const Discord = require("discord.js")
module.exports = {
  async execute(giveaway, member, reaction){
     reaction.users.remove(member.user);
  member.send(`**This Giveaways Did Ended , Better Luck Next Time ** `).catch(e => {})
  }
}