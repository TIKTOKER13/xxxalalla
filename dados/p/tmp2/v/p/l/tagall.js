let handler = async(m, { conn, text, participants }) => {
  let teks = `โโโชใ *๐ฅ Msg Importante* ใโชโโ\n\nโฒ *Mensagem: ${text ? text : 'Sem Mensagem'}*\n\n`
		      	for (let mem of participants) {
		            teks += `เฟโก๏ธ @${mem.id.split('@')[0]}\n`
				}
                teks += `\nโ *Admin Do grupo* โ`
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['Marcar (msg)']
handler.tags = ['group']
handler.command = /^(marcar)$/i

handler.group = true
handler.admin = false

module.exports = handler
