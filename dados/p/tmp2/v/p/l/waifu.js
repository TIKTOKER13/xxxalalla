let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/waifu')
  if (!res.ok) throw 'Erro: o site está fora do ar'
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'eit', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['Waifu']
handler.tags = ['anime']
handler.command = /^(waifu)$/i

handler.limite = true

module.exports = handler
