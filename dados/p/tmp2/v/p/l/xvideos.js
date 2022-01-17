//Plugin criado por dark, deixe os creditos fdp
let fetch = require('node-fetch')
const axios = require('axios')
let handler = async(m, { conn, fetchJson, text }) => {
  if (!text) throw `Digite o link do video | Exemplo /xvideos https://www.xvideos.com/video61103429/e-girl_gets_fucked`
                   const res = await axios({
                    method: 'GET',
                    url: `https://mnazria.herokuapp.com/api/porndownloadxvideos?url=${text}`, // link da api
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
                    },
                })
                   m.reply(`Processando os dados, aguarde...`)
                   conn.sendFile(m.chat, res.data.mp4, '', 'Video Baixado com sucesso!', m) //enviando vid
 }
handler.help = ['Xvideos (url)']
handler.tags = ['cs','downloader','nsfw']
handler.command = /^(xvideos)$/i
module.exports = handler
