//Plugin criado por dark, deixe os creditos fdp
let fetch = require('node-fetch')
const axios = require('axios')
let handler = async(m, { conn, fetchJson, text }) => {
    var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? m.message.buttonsResponseMessage.selectedButtonId : ''
    const comando = body.slice(1).trim().split(/ +/).shift().toLowerCase()
    const darklindo = `dappakntlll`

if (comando == "play") {
  if (!text) throw `Digite o nome da musica | Exemplo /play ngc daddy bendito`
                   const res = await axios({
                    method: 'GET',
                    url: `https://api.zeks.xyz/api/ytplaymp3?q=${text}&apikey=PGAKFXphnPSGtWxYzFwv6sysBId`, // link da api
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
                    },
                })
                   m.reply(`Processando os dados, aguarde...`)
                   let infomsc = `*Youtube Play*

🎶 Titulo: ${res.data.result.title}\n\n✅ Tamanho: ${res.data.result.size}\n\n🕓 Duração: ${res.data.result.duration}\n\n_Estou fazendo o download e ja te envio._ `
                   conn.sendFile(m.chat, res.data.result.thumbnail, '', infomsc, m) //enviando img
                    conn.sendFile(m.chat, res.data.result.url_audio) //enviando audio
            }

            if (comando == "play2") {
            if (!text) throw `Digite o nome da musica | Exemplo /play ngc daddy bendito`
            const res = await axios({
             method: 'GET',
             url: `https://api.zeks.xyz/api/ytplaymp3?q=${text}&apikey=apivinz`, // link da api
             headers: {
                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
             },
         })
            m.reply(`Processando os dados, aguarde...`)
            let infomsc = `*Youtube Play*

🎶 Titulo: ${res.data.result.title}\n\n✅ Tamanho: ${res.data.result.size}\n\n🕓 Duração: ${res.data.result.duration}\n\n_Estou fazendo o download e ja te envio._ `
            conn.sendFile(m.chat, res.data.result.thumbnail, '', infomsc, m) //enviando img
             conn.sendFile(m.chat, res.data.result.url_audio) //enviando audio
        }

        if (comando == "play3") {
            if (!text) throw `Digite o nome da musica | Exemplo /play ngc daddy bendito`
            const res = await axios({
             method: 'GET',
             url: `https://hadi-api.herokuapp.com/api/ytplay?q=${text}`, // link da api
             headers: {
                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
             },
         })
            m.reply(`Processando os dados, aguarde...`)
            let infomsc = `*Youtube Play*

🎶 Titulo: ${res.data.result.title}\n\n_Estou fazendo o download e ja te envio._ `
            conn.sendFile(m.chat, res.data.result.thumb, '', infomsc, m) //enviando img
             conn.sendFile(m.chat, res.data.result.download_audio) //enviando audio
        }


 }
handler.help = ['Play (nome)','Play2 (nome)','Play3 (nome)']
handler.tags = ['yt']
handler.command = /^(play|play2|play3)$/i
module.exports = handler
