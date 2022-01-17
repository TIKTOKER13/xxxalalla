let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/nsfw/neko')
  if (!res.ok) throw 'Erro: o site está fora do ar'
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Avee 🥵', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['Neko']
handler.tags = ['nsfw']
handler.command = /^(neko)$/i

handler.limite = true
handler.nsfw = true

module.exports = handler
