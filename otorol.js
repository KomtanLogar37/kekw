module.exports = client => {

    client.on('guildMemberAdd', member => {
        console.log('User' + member.user.tag + 'has joined the server!');

        var role = member.guild.roles.cache.get('841692417366818906');
        member.roles.add(role);
})
}