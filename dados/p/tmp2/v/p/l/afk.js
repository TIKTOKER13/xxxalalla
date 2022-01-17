let handler = async(m, { text }) => {
    let user = global.db.data.users[m.sender]
    user.afk = +new Date
    user.afkReason = text
    m.reply(`
${conn.getName(m.sender)} agora é AFK ${text ? ': ' + text : ''}
`)
}
handler.help = ['Afk (razão)']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler
