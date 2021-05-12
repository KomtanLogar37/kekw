module.exports = client => {

    client.on('message', msg => {
        if(msg.content.startsWith('duyur')){
          const kanal = msg.mentions.channels.first();
          const args = msg.content.split(' ').slice(2)
          const botmesajı = args.join(" ")
          if(!msg.guild.me.hasPermission('ADMINSTARATOR')) return msg.reply('Duyuru Yapmak İçin Yönetici Olman Lazım !');
          if(!botmesajı) return msg.reply('Duyurunun Ne Olacağını Belirt !');
          if(!kanal) return msg.reply('Kanalın Ne Olacağını Belirt !');
          msg.delete(msg.author)
          kanal.send(botmesajı)
        }
      });
      
}