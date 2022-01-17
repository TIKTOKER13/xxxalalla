let handler = async (m, { text, usedPrefix }) => {
    let salah = `Opções disponíveis\n\npedra, papel, tesoura\n\n*Exemplo:* ${usedPrefix}jokenpo tesoura`
    if (!text) throw salah
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'pedra'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'tesoura'
    } else {
        astro = 'papel'
    }

    //menentukan rules
    if (text == astro) {
        m.reply(`Empate vsf\n\nVocê escolheu: ${text}\n\nBot escolheu: ${astro}`)
    } else if (text == 'pedra') {
        if (astro == 'tesoura') {
            global.db.data.users[m.sender].money += 1000
            m.reply(`Você ganhou! +Rp1000\n\nVocê escolheu: ${text}\n\nBot escolheu: ${astro}`)
        } else {
            m.reply(`Você perdeu!\n\nVocê escolheu: ${text}\n\nBot escolheu: ${astro}`)
        }
    } else if (text == 'tesoura') {
        if (astro == 'papel') {
            global.db.data.users[m.sender].money += 1000
            m.reply(`Você ganhou! +Rp1000\nVocê escolheu: ${text}\n\nBot escolheu: ${astro}`)
        } else {
            m.reply(`Você perdeu!\n\nVocê escolheu: ${text}\n\nBot escolheu: ${astro}`)
        }
    } else if (text == 'papel') {
        if (astro == 'pedra') {
            global.db.data.users[m.sender].money += 1000
            m.reply(`Você ganhou! +Rp1000\n\nVocê escolheu: ${text}\n\nBot escolheu: ${astro}`)
        } else {
            m.reply(`Você perdeu!\n\nVocê escolheu: ${text}\n\nBot escolheu: ${astro}`)
        }
    } else {
        throw salah
    }
}
handler.help = ['Jokenpo']
handler.tags = ['game']
handler.command = /^(jokenpo)$/i

module.exports = handler
