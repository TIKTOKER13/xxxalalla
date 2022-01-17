const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Você já está registrado.`
  if (!Reg.test(text)) throw `Exemplo:\n*${usedPrefix + command} dark.16*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Digite seu nome!'
  if (!age) throw 'Digite sua idade!'
  age = parseInt(age)
  if (age > 30) throw 'Nessa idade usando um bot?KKK q fase em amigão'
  if (age < 5) throw 'Esse bot não é muito adequado para crianças dessa idade.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  m.reply(`
━━━━ 「 *Sucesso* 」━━━━

╭─• 〘 INFO 〙
│➥ Nome: ${name}
│➥ Idade: ${age} anos
│➥ Premium?: ${prems.includes(who.split`@`[0]) ? '✅ Por favor, converse com o proprietário para reivindicar o prêmio' : '❌ Não é um usuário premium'}
╰──────•

Digite */sn* para obter o NÚMERO DE SÉRIE\n
sn é usado para cancelar o registro
`.trim())
}
handler.help = ['Registrar'].map(v => v + ' (nome).(idade)')
handler.tags = ['xp', 'main']

handler.command = /^(registrar|registro?)$/i

module.exports = handler
