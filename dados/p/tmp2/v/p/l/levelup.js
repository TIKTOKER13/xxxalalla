let levelling = require('../lib/levelling')

let handler = m => {
  let user = global.db.data.users[m.sender]
  if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    throw `
Nível *${user.level} (${user.exp - min}/${xp})*

É necessario *${max - user.exp}* de xp para subir de level
`.trim()
  }
  let before = user.level * 1
	while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
	if (before !== user.level) {
            m.reply(`
Parabéns, você subiu de nível!
*${before}* -> *${user.level}*
use */my* para verificar
	`.trim())
        }
}

handler.help = ['Levelup']
handler.tags = ['xp']

handler.command = /^level(|up)$/i

module.exports = handler
