//Plugin criado por dark, deixe os creditos fdp
let fetch = require('node-fetch')
const axios = require('axios')
const googleImage = require('g-i-s')
let handler = async(m, { conn, fetchJson, text }) => {
    var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? m.message.buttonsResponseMessage.selectedButtonId : ''
const comando = body.slice(1).trim().split(/ +/).shift().toLowerCase()
    text = `${comando}`
    if (comando == "alinefaria") {
        let txt4kkkkkkk = `*Pack da Aline Faria* _(Google Fotos)_\n\nhttps://bit.ly/3GqaUZd`
        conn.sendFile(m.chat, `./dados/imagens/packs/alinefaria.jpeg`, '', txt4kkkkkkk, m) //enviando imagem pack
    }

    if (comando == "forestfaye") {
        let txt1 = `*Pack da ForestFayee* _(Google Fotos)_\n\nhttps://bit.ly/2ZmIwGi`
        conn.sendFile(m.chat, `./dados/imagens/packs/forestfaye.jpeg`, '', txt1, m) //enviando imagem pack
    }
        
    if (comando == "leticia_shirayuki") {
        let txt2 = `*Pack da Leticia Shirayuki* _(Google Fotos)_\n\nhttps://bit.ly/3vOJsPZ`
        conn.sendFile(m.chat, `./dados/imagens/packs/leticia.jpeg`, '', txt2, m) //enviando imagem pack
    }
        
    if (comando == "jenniie") {
        let txt3x = `*Pack da Jenniie__s* _(Google Fotos)_\n\nhttps://bit.ly/3EkmYts`
        conn.sendFile(m.chat, `./dados/imagens/packs/jenniie.jpeg`, '', txt3x, m) //enviando imagem pack
    }

    if (comando == "lais") {
        let txt4kk = `*Pack da Lais Rodrigues* _(Google Fotos)_\n\nhttps://bit.ly/3jF5Oyu`
        conn.sendFile(m.chat, `./dados/imagens/packs/lais.jpeg`, '', txt4kk, m) //enviando imagem pack
    }

    if (comando == "alinefox") {
        let txt4k = `*Pack da Aline Fox* _(Google Fotos)_\n\nhttps://bit.ly/3b8EnZm`
        conn.sendFile(m.chat, `./dados/imagens/packs/alinefox.jpeg`, '', txt4k, m) //enviando imagem pack
    }

    if (comando == "beatrzz") {
        let txt4sxs = `*Pack da Beatrzzfonseca* _(Google Fotos)_\n\nhttps://bit.ly/3CjOCGm`
        conn.sendFile(m.chat, `./dados/imagens/packs/beatrzzfonseca.jpeg`, '', txt4sxs, m) //enviando imagem pack
    }
        
   
 }
handler.help = ['Alinefaria','Forestfaye','Leticia_shirayuki','Jenniie','Lais','Alinefox','Beatrzz']
handler.tags = ['packs']
handler.command = /^(alinefaria|forestfaye|leticia_shirayuki|jenniie|lais|alinefox|beatrzz)$/i
module.exports = handler
