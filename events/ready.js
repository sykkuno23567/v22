const client = require("../index");
const discord = require ("discord.js");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));





const { InfinityAutoPoster } = require('ibl-autopost')

const poster = InfinityAutoPoster('xIN6xQPRF42peDqiVDBi9xhyhDLlldCIOdjPrujohggDn8kSChk2Arxdd3LUkGAyCABwJ2tZjStcY4aOSnbqBbeQGSC1zRvvA4oy', client) // your discord.js or eris client


poster.on('posted', (stats) => {

  console.log(`Posted stats to the Infinity Bot List API | ${stats.servers} servers`)

});







client.on("ready", () =>
    console.log(`✅ + ${client.user.tag} is Onlins`)

);




          
