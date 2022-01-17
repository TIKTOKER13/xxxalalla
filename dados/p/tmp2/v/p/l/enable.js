let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let setting = global.db.data.settings
  let type = (args[0] || '').toLowerCase()
  let isAll = false
  let isUser = false
  switch (type) {
    case 'w':
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!(isAdmin || isOwner)) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
    case 'antilink':
    case 'antiurl':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!(isAdmin || isOwner)) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.antiLink = isEnable
      break
    case 'publik':
    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'leveling':
    case 'levelup':
      isUser = true
      user.leveling = isEnable
      break
    case 'mycontact':
    case 'mycontacts':
    case 'whitelistcontact':
    case 'whitelistcontacts':
    case 'whitelistmycontact':
    case 'whitelistmycontacts':
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      conn.callWhitelistMode = isEnable
      break
    case 'grup':
    case 'gruponly':
    case 'grouponly':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      setting.groupOnly = isEnable
      break
    case 'backup':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      setting.backup = isEnable
      break
    case 'anticall':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      setting.anticall = isEnable
      break
    case 'Antitrol':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      setting.Antitrol = isEnable
      break
    case 'autoleitura':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      opts['autoleitura'] = isEnable
      break
    case 'restrict':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      opts['restrict'] = isEnable
      break
    case 'nsfw':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      setting.nsfw = isEnable
      break
    case 'jadibot':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      setting.jadibot = isEnable
      break
    default:
      if (!/[01]/.test(command)) throw `
┌〔 Comandos Ativáveis 〕${isOwner ? '\n├ Public\n├ Antilink' : ''}
├ Leveling
├ Antilink
├ Welcome
└────

Exemplo:

${usedPrefix}on welcome
${usedPrefix}off welcome
`.trim()
      throw false
  }
  m.reply(`
Comando *${type}* *${isEnable ? 'ativado' : 'desativado'}* com sucesso ${isAll ? 'nesse pv' : isUser ? '' : 'nesse grupo'}
`.trim())
}
handler.help = ['On welcome', 'Off welcome',].map(v => v + '')
handler.tags = ['group']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

module.exports = handler
