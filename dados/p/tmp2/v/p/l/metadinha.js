//Plugin criado por dark, deixe os creditos fdp
let fetch = require('node-fetch')
const axios = require('axios')
let handler = async(m, { conn, fetchJson, text }) => {
    var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? m.message.buttonsResponseMessage.selectedButtonId : ''
    const comando = body.slice(1).trim().split(/ +/).shift().toLowerCase()
    const darklindo = `dappakntlll`

    const res = await axios({
     method: 'GET',
     url: `https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=dappakntlll`, // link da api
     headers: {
         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
     },
 })
    m.reply(`Processando os dados, aguarde...`)

    conn.sendFile(m.chat, res.data.result.male, '', '1', m) //enviando img
    conn.sendFile(m.chat, res.data.result.female, '', '2', m) //enviando img


 }
handler.help = ['Metadinha']
handler.tags = ['random','imgs']
handler.command = /^(metadinha)$/i
module.exports = handler
