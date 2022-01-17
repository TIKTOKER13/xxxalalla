//Plugin criado por dark, deixe os creditos fdp
let fetch = require('node-fetch')
const axios = require('axios')
let handler = async(m, { conn, fetchJson, text }) => {
    var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? m.message.buttonsResponseMessage.selectedButtonId : ''
    const comando = body.slice(1).trim().split(/ +/).shift().toLowerCase()
    const darklindo = `dappakntlll`
    var randomUrl = require('random-url');
    const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
    

if (comando == "random") {
    const res = await axios({
        method: 'GET',
        url: `https://pastebin.com/raw/Dbve2s3s`, // link da api
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
        },
    })
    ri = JSON.parse(JSON.stringify(res.data));
    ze =  ri[Math.floor(Math.random() * ri.length)];
    
    conn.sendFile(m.chat, ze, '', '', m) //enviando img
    const rickAndMorty = require('rick-and-morty');
 
   const rr = rickAndMorty.random();
   //conn.sendFile(m.chat, ze, '', `${rr}`, m) //enviando gif
  conn.sendFile(m.chat, rr)
            }



 }
handler.help = ['rickmorty']
handler.tags = ['random']
handler.command = /^(rickmorty)$/i
module.exports = handler
