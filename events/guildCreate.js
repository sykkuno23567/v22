const client = require("../index");
const {Discord, MessageEmbed} = require ("discord.js")



client.on("guildCreate", async M3ATH => {
let channelsend = await client.channels.cache.get("979692910289227776");
  let owner = await client.users.fetch(M3ATH.ownerId)
const channeli = M3ATH.channels.cache.filter((channeli) => channeli.type === 'GUILD_TEXT').first();
let inviteserver = await channeli.createInvite({ maxAge: 0, maxUses: 0 })
let inviteguild = new MessageEmbed()
  .setColor("RANDOM")
.setThumbnail(M3ATH.iconURL({ dynamic: true }))
.setTitle('<:bot_owner:969929848158035968> Snap Joiner <:bot_owner:969929848158035968>')
.addField(`<:4641moderator:928271948184698961> ╋Server Name` , `════》**${M3ATH.name}**`)
.addField(`<:3643members:969929550756728842> ╋Members Count` ,  `═══》${M3ATH.memberCount}`)
.addField(`<:chat:1024449897522548786> ╋Channels Count` , `══》${M3ATH.channels.cache.size}`)
.addField(`<a:white:1024434194920775822> ╋OwnerShip` , `\`${owner.username}#${owner.discriminator}\``)
.addField(`✅ Link`, ` [JOIN](${inviteserver})`)
.setTimestamp()
  .setFooter(`{-This Is The #${client.guilds.cache.size} Server}`)
channelsend.send({embeds:[inviteguild]}).catch(() => {
console.log(`I Can't Create Invite`)
})
   })