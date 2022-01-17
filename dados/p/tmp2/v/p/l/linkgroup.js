let handler = async (m, { conn, args }) => {
  let group = args[0] ? args[0] : m.chat
  try {
  if (/^[0-9]{5,16}-[0-9]+@g\.us$/.test(args[0])) group = args[0]
  if (!/^[0-9]{5,16}-[0-9]+@g\.us$/.test(group)) throw 'Só pode ser aberto em grupos'
  let groupMetadata = await conn.groupMetadata(group)
  let groupName = m.isGroup ? groupMetadata.subject : ''
  if (!groupMetadata) throw 'groupMetadata nao esta definido'
  if (!'participants' in groupMetadata) throw 'participants nao esta definido'
  let me = groupMetadata.participants.find(user => user.jid === conn.user.jid)
  m.reply('*Link deste grupo*\n\nhttps://chat.whatsapp.com/' + await conn.groupInviteCode(group))
} catch (err) {
  m.reply('Me de adm pra eu executar esse comando.')
}}

handler.help = ['Linkgp']
handler.tags = ['group']
handler.command = /^linkgp?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = true
handler.botAdmin = false

handler.fail = null

module.exports = handler
