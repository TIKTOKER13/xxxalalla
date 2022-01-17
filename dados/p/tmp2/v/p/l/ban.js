const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    try {
        await conn.groupParticipantsUpdate(m.chat, [who], 'remove')
        m.reply(`Usuario Banido com sucesso ✔️`)
} catch (err) {
    m.reply('Me de adm pra eu executar esse comando.')
  }}
handler.help = ['Banir @']
handler.tags = ['group']
handler.command = /^(banir)$/i
handler.admin = true
handler.botAdmin = false

module.exports = handler
