const Discord = require('discord.js');
const client = new Discord.Client();

const duyuru = require('./duyuru')
const skyblock = require('./skyblock')
const welcome = require('./welcome')
const otorol = require('./otorol')

client.on('ready', () => {
  client.user.setActivity(`https://discord.gg/sm82qzPbcs`)
  console.log(`Logged in as ${client.user.tag}!`);
  duyuru(client)
  skyblock(client)
  otorol(client)
  welcome(client)
});

client.login('ODQxNzg3ODQ4NzM0MTQ2NTcx.YJr2Bg.b3CyCuKm5EcTMCOAUPUrjTjMEjU');