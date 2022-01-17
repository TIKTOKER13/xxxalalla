//Plugin criado por dark, deixe os creditos fdp
let fetch = require('node-fetch')
const axios = require('axios')
let handler = async(m, { conn, fetchJson, text }) => {
    var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? m.message.buttonsResponseMessage.selectedButtonId : ''
    const comando = body.slice(1).trim().split(/ +/).shift().toLowerCase()
    const darklindo = `dappakntlll`

if (comando == "editar") {
 txt = `*Bem Vindo a personalização do meu menu!* 🎈

_Para mudar a minha setinha digite:_

/setseta (sua seta)

_Para mudar o gif do meu menu digite:_

/setgif (link do gif)`
 m.reply(txt)
            }

        

 }
handler.help = ['Editar']
handler.tags = ['info']
handler.command = /^(editar)$/i
module.exports = handler
