
const {
  Message,
  MessageEmbed,
  guild,
} = require("discord.js");


const config = require('../config.json');
module.exports = {
  giveawayEnded:
    (config.everyoneMention ? "@everyone\n\n" : "") +
    "ðŸŽ‰ **GIVEAWAY ENDED** ðŸŽ‰",
  drawing:  `Ends: **{timestamp}**`,
  inviteToParticipate: `React with ðŸŽ‰ to participate!`,
  hostedBy: 'Hosted by',
  winMessage: {
    embed: { description: `Congratulations you won **[{this.prize}]({this.messageURL})** **[➚]({this.messageURL})**`,
           Thumbnail: `{guild}`},
      content: `{winners}`},
	embedFooter: "Giveaways",
  embedFooter: "{this.prize} Giveaway",
  noWinner: "Giveaway cancelled, no Winners Have Been Selected.",
  hostedBy: "Hosted by: {this.hostedBy}",
  winners: "winner(s)",
  endedAt: "Ended at"
}