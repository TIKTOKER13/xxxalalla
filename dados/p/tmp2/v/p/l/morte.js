//Plugin criado por dark, deixe os creditos fdp
let fetch = require('node-fetch')
const axios = require('axios')
let handler = async(m, { conn, fetchJson, text, fs }) => {
  if (!text) throw `Digite o seu nome ou outro nome qualquer... | Exemplo: /morte joao`

                   const res = await axios({
                    method: 'GET',
                    url: `https://api.agify.io/?name=${text}`, // link da api
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
                    },
                })
                   texto = `Pessoas com o nome ${text} costumam morrer com ${res.data.age} anos\n\n© 2021 Dark`
                   m.reply(texto)
 }
handler.help = ['Morte (nome)']
handler.tags = ['game']
handler.command = /^(morte)$/i
module.exports = handler
