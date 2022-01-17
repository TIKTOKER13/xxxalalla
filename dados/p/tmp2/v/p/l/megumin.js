let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/megumin')
  if (!res.ok) throw 'Erro: o site está fora do ar'
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'fofo', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['Megumin']
handler.tags = ['anime']
handler.command = /^(megumin)$/i

handler.limite = true

module.exports = handler
