//Plugin criado por dark, deixe os creditos fdp
let fetch = require('node-fetch')
const axios = require('axios')
let handler = async(m, { conn, fetchJson, text }) => {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? m.message.buttonsResponseMessage.selectedButtonId : ''
const comando = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const darklindo = `dappakntlll`

if (comando == "celular") {
if (!text) throw `Digite o nome de um celular | Exemplo /celular pocophone f1`
const res = await axios({
method: 'GET',
url: `https://api-yogipw.herokuapp.com/api/search/gsmarena?query=${text}`, // link da api
headers: {
'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
},
})
const txtapi = 
`
📝 Titulo: ${res.data.judul}

❗ Última atualização: ${res.data.rilis}

📱 Tamanho do celular: ${res.data.ukuran}

⚡ Tipo: ${res.data.type}

🗃️ Armazenamento: ${res.data.storage}

📴 Tela: ${res.data.display}

📳 Polegada: ${res.data.inchi}

🔰 Resolução da câmera: ${res.data.pixel}

📲 Resolução do video: ${res.data.videoPixel}

💭 Ram do celular: ${res.data.ram}

👤 Hardware do celular: ${res.data.chipset}

⚠️ Bateria: ${res.data.batrai}

🔋 Tipo da bateria: ${res.data.merek_batre}`
m.reply(txtapi)
}


 }
handler.help = ['Celular (nome)']
handler.tags = ['random','cs']
handler.command = /^(celular)$/i
module.exports = handler
