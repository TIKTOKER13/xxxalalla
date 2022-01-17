//Plugin criado por dark, deixe os creditos fdp
let fetch = require('node-fetch')
const axios = require('axios')
setinha = `⭔`

let handler = async(m, { conn, fetchJson, text }) => {
  if (!text) throw `Digite o nome da musica | Exemplo /play ngc daddy bendito`
  setinha = `${text}`
  m.reply(`Seta definida com sucesso para: ${text} confira digitando /menu`)
}
handler.command = /^(setseta)$/i
module.exports = handler
