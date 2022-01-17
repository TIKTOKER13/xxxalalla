//Plugin criado por dark, deixe os creditos fdp
let fetch = require('node-fetch')
const axios = require('axios')
let handler = async(m, { conn, fetchJson, text }) => {
  if (!text) throw `Digite o cep | Exemplo /cep 69917742`
                   const res = await axios({
                    method: 'GET',
                    url: `https://viacep.com.br/ws/${text}/json/`, // link da api
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
                    },
                })
                   m.reply(`Processando os dados, aguarde...`)
                   let consulta = `*Consulta Cep Realizada!*
                   
Endereço: ${res.data.logradouro}
Complemento: ${res.data.complemento}
Bairro: ${res.data.bairro}
Localidade: ${res.data.localidade}
UF: ${res.data.uf}
DDD: ${res.data.ddd}

Consulta by Stella MD 💎`
const imgmap = await axios({
    method: 'GET',
    url: `https://mnazria.herokuapp.com/api/maps?search=${res.data.localidade}`, // link da api
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
    },
})
   conn.sendFile(m.chat, imgmap.data.gambar, '', consulta, m) //enviando img
 }
handler.help = ['Cep (cep)']
handler.tags = ['cs']
handler.command = /^(cep)$/i
module.exports = handler
