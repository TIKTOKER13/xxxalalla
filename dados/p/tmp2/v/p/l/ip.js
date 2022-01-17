//Plugin criado por dark, deixe os creditos fdp
let fetch = require('node-fetch')
const axios = require('axios')
let handler = async(m, { conn, fetchJson, text }) => {
  if (!text) throw `Digite o ip | Exemplo /cep 177.47.216.72`
                   const res = await axios({
                    method: 'GET',
                    url: `http://ip-api.com/json/${text}`, // link da api
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
                    },
                })
                   m.reply(`Processando os dados, aguarde...`)
                   let consulta = `🔍 *CONSULTA DE IP* 🔍

• País: ${res.data.country}
• Sigla: ${res.data.countryCode}
• Região: ${res.data.regionName}
• Sigla Região: ${res.data.regionName}
• Cidade: ${res.data.city}
• Cep: ${res.data.zip}
• Lat: ${res.data.lat}
• Lon: ${res.data.lon}
• Fuso Horário: ${res.data.timezone}
• Net: ${res.data.isp}

• Usuario: ${m.name}

Consulta by Stella MD 💎`

    m.reply(consulta)
 }
handler.help = ['Ip (ip)']
handler.tags = ['cs']
handler.command = /^(ip)$/i
module.exports = handler
