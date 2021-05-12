module.exports = client => {
    client.on('message', msg => {
        if (msg.content === '!skyblock') {
          msg.channel.send('**Skyblock komutları**\n\n> `/is warp (oyuncu ismi)` ---> *Oyuncunun Adasına Işınlanırsın*\n> `/is spawn` ---> *Adaya Işınlar*\n> \n\n**Warp İsimleri**\n\n> \n>  `/is warp bedavademir`\n>  `/is warp moneymachine`\n\n||@here||');
        }
      });
}