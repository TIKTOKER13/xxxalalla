const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let anu = `╭───❑ 「 INFO 」 ❑────
│ ✇ Nome: ${user.name}
│ ✇ limites: ${user.limite}
│ ✇ Dinheiro: ${user.money}
│ ✇ Xp: ${user.exp}
│ ✇ Nivel: ${user.level}
│ ✇ Patente: ${user.role}
╰❑`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: anu,
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./dados/imagens/banco.jpg') }, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'Canal YT',
               url: 'https://www.youtube.com/channel/UCcNXUT8f4grmNxQCxiZX95Q'
             }

           },
               {
             quickReplyButton: {
               displayText: '🔙 Voltar para o Menu',
               id: '/menu',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['Perfil', 'Perfil @']
handler.tags = ['xp']
handler.command = /^(perfil)$/i

module.exports = handler