let handler = function (m) {
  if (!m.quoted) throw false
 let { chat, fromMe, id, isBaileys } = m.quoted
 if (!isBaileys) throw 'Você so pode apagar msgs minhas!'
 conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
handler.help = ['Delete (msg do bot)']
handler.tags = ['main']

handler.command = /^del|delete|unsend?$/i
handler.register = false

module.exports = handler
