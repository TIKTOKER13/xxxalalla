//Plugin criado por dark, deixe os creditos fdp
let fetch = require('node-fetch')
const axios = require('axios')
const googleImage = require('g-i-s')
let handler = async(m, { conn, fetchJson, text }) => {
    var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? m.message.buttonsResponseMessage.selectedButtonId : ''
const comando = body.slice(1).trim().split(/ +/).shift().toLowerCase()
    text = `${comando}`

    m.reply(`Processando os dados, aguarde...`)
    res = await googleImage(`${text}`, google)
    function google(error, result){
    if (error){ return m.reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
    else {
    gugIm = result
    random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
    conn.sendFile(m.chat, random, '', 'ae', m) //enviando imagem do anime
    }
    }
 }
handler.help = ['Zoro','Naruto','Sakura','Nami','Carrot','Buggy','Shanks','Ace','Hinata','Madara','sasuke','goku','goham',"Guts"]
handler.tags = ['anime']
handler.command = /^(zoro|naruto|sakura|nami|carrot|buggy|shanks|ace|hinata|madara|sasuke|Goku|Goham|Guts)$/i
module.exports = handler
