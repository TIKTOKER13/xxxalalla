let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Se você encontrar um erro, relate-a usando este comando\n\nexemplo:\n${usedPrefix + command} boa tarde dono, Eu encontrei um erro no bot`
    if (text.length < 10) throw `O relatório é muito curto, pelo menos 10 caracteres!`
    if (text.length > 1000) throw `O relatório é muito longo, máximo de 1000 caracteres!`
    let teks = `*${command.toUpperCase()}!*\n\nA partir de : *@${m.sender.split`@`[0]}*\n\nMsg: ${text}\n`
    conn.reply(global.owner[0] + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`_Mensagem enviada ao dono do bot_`)
}
handler.help = ['Reportar'].map(v => v + '(texto)')
handler.tags = ['info']
handler.command = /^(reportar|request)$/i
module.exports = handler
