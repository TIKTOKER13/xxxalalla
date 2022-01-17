//Plugin criado por dark, deixe os creditos fdp
let fetch = require('node-fetch')
const axios = require('axios')
let handler = async(m, { conn, fetchJson, text }) => {
  if (!text) throw `Digite o nome da cidade ou estado | Exemplo /map são paulo`
                   const res = await axios({
                    method: 'GET',
                    url: `https://mnazria.herokuapp.com/api/maps?search=${text}`, // link da api
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
                    },
                })
                   m.reply(`Processando os dados, aguarde...`)
                   conn.sendFile(m.chat, res.data.gambar, '', 'Consulta Realizada!', m) //enviando img
 }
handler.help = ['Map (nome)']
handler.tags = ['cs']
handler.command = /^(map)$/i
module.exports = handler
