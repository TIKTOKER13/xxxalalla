let limite = 30
const { servers, yta } = require('../lib/y2mate')
let handler = async(m, { conn, args, isPrems, isOwner }) => {
    if (!args || !args[0]) return m.reply('Cade o url?')
    let chat = global.db.data.chats[m.chat]
    let server = (args[1] || servers[0]).toLowerCase()
    let { dl_link, thumb, title, filesize, filesizeF } = await yta(args[0], servers.includes(server) ? server : servers[0])
    let islimite = (isPrems || isOwner ? 99 : limite) * 1024 < filesize
    conn.sendFile(m.chat, thumb, 'thumbnail.jpg', `
*Titulo:* ${title}

*Tamanho:* ${filesizeF}
*${islimite ? 'Usar ': ''}Link:* ${dl_link}
`.trim(), m)
    if (!islimite) conn.sendFile(m.chat, dl_link, title + '.mp3', `
*Titulo:* ${title}

*Tamanho:* ${filesizeF}
`.trim(), m, null, {
        asDocument: chat.useDocument
    })
}
handler.help = ['Ytmp3 (url)']
handler.tags = ['downloader','yt']
handler.command = /^(yta|ytmp3|mp3)$/i
handler.owner = false
handler.mods = false
handler.limite = true
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler
