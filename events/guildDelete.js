const  {Discord, MessageEmbed,  } = require ("discord.js")


const client = require("../index")




  
client.on("guildDelete", async M3ATH => {
let channelsend = await client.channels.cache.get("980942219685011506");
  let owner = await client.users.fetch(M3ATH.ownerId)


let inviteguild = new MessageEmbed()
  .setColor("RANDOM")
  .setTitle('<:bot_owner:969929848158035968> SNAP LEFT <:bot_owner:969929848158035968>')
.setThumbnail(M3ATH.iconURL({ dynamic: true }))
.addField(` Server Name` , `**${M3ATH.name}**`)
.addField(`<:3643members:969929550756728842> Members Count` ,  `═════════》${M3ATH.memberCount}`)
.addField(`<:chat:1024449897522548786> Server ID` , `══════》${M3ATH.id}`)
.addField(`<a:white:1024434194920775822> OwnerShip` , `**${owner.username}**`)
.setTimestamp()
  .setFooter(`{-This Is The #${client.guilds.cache.size} Server}`)
channelsend.send({embeds:[inviteguild]}).catch(() => {
console.log(`I Can't Create Invite`)
})
   })