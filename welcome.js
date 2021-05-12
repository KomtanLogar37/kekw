module.exports = client => {

client.on('guildMemberAdd', member => {

    const gelengiden = member.guild.channels.cache.get('841692503803691019')
    gelengiden.send(`Aramıza Hoşgeldin, ${member}`)

})

client.on('guildMemberRemove', member => {
    const gelengiden = member.guild.channels.cache.get('841692503803691019')
    gelengiden.send(`${member} Aramızdan Ayrıldı.Görüşürüz !`)
})
}