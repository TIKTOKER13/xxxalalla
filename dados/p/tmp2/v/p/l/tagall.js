let handler = async(m, { conn, text, participants }) => {
  let teks = `══✪〘 *👥 Msg Importante* 〙✪══\n\n➲ *Mensagem: ${text ? text : 'Sem Mensagem'}*\n\n`
		      	for (let mem of participants) {
		            teks += `࿃➡️ @${mem.id.split('@')[0]}\n`
				}
                teks += `\n⋙ *Admin Do grupo* ⋘`
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['Marcar (msg)']
handler.tags = ['group']
handler.command = /^(marcar)$/i

handler.group = true
handler.admin = false

module.exports = handler
