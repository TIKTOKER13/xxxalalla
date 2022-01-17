const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
let handler = async (m, {text}) => {
    if (!text) throw `Digite o numero da pessoa que vc quer adicionar no grupo | Exemplo /add 5517991134416`
    try {
    let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await conn.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply('Usuario adicionado ✔️'))
    } catch (err) {
        m.reply('Hmm, deu erro, talvez eu não tenha adm ou o numero é privado.')
      }}
handler.help = ['Add @']
handler.tags = ['group']
handler.command = /^(add)$/i
handler.admin = true
handler.botAdmin = false

module.exports = handler
