let handler = async (m, { conn, isOwner }) => {
    let chats = Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned)
    let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
    let caption = `
┌〔 Lista de bate-papos banidos 〕
├ Total: ${chats.length} Chat${chats ? '\n' + chats.map(([jid], i) => `
├ ${i + 1}. ${conn.getName(jid) == undefined ? 'Desconhecido' : conn.getName(jid)}
├ ${isOwner ? '@' + jid.split`@`[0] : jid}
`.trim()).join('\n') : ''}
└────

┌〔 Lista de usuários banidos 〕
├ Total: ${users.length} Usuarios${users ? '\n' + users.map(([jid], i) => `
├ ${i + 1}. ${conn.getName(jid) == undefined ? 'Desconhecido' : conn.getName(jid)}
├ ${isOwner ? '@' + jid.split`@`[0] : jid}
`.trim()).join('\n') : ''}
└────
`.trim()
    conn.reply(m.chat, caption, m, { contextInfo: { mentionedJid: conn.parseMention(caption) } })
}
handler.help = ['Banlist']
handler.tags = ['info']
handler.command = /^banlist?|ban(ned)?list|daftarban(ned)?$/i
handler.owner = false
module.exports = handler
