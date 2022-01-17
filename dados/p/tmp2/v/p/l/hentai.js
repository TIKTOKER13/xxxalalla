//Plugin criado por dark, deixe os creditos fdp
let fetch = require('node-fetch')
const axios = require('axios')
let handler = async(m, { conn, fetchJson, text }) => {
    const { base64encode, base64decode } = require('nodejs-base64');
    if (!text) throw `Cade o texto? | Use assim: /Encriptar (seu texto) `




    let encode = base64encode(text); 
    console.log(encode)
    m.reply(encode)
    m.reply(`Texto *${text}* encriptado com sucesso: *${encode}*\n\nPara desencriptar use: /decode `+ encode)



}
handler.help = ['Encriptar (texto)']
handler.tags = ['tools']
handler.command = /^(encriptar|encode)$/i
module.exports = handler
