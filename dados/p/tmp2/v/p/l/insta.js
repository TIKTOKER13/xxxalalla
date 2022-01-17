//Plugin criado por dark, deixe os creditos fdp
let fetch = require('node-fetch')
const axios = require('axios')
const { igApi } = require('insta-fetcher');
const ig = new igApi();
let handler = async(m, { conn, fetchJson, text }) => {

  if (!text) throw `Digite o @ da pessoa do insta | Exemplo /igstalk neymarjr`
  ig.fetchUser(`${text}`).then(Y => {
    console.log(`${text}`)
    ten = `${Y.profile_pic_url_hd}`
    txt = `*ID*: ${Y.profile_id}\n\n*Nome de usuário*: ${text}\n\n*Nome completo* : ${Y.full_name}\n\n*Bio:* ${Y.biography}\n\n*Seguidores*: ${Y.followers}\n*Seguindo*: ${Y.following}\n\n*Privado?*: ${Y.is_private}\n\n*Verificado*: ${Y.is_verified}\n\n\n*Link*: https://instagram.com/${text}`  
   // conn.sendFile(m.chat, ten, '', txt, m) //enviando img
   m.reply(txt)
  });
 }
handler.help = ['Igstalk (nome)']
handler.tags = ['cs']
handler.command = /^(igstalk)$/i
module.exports = handler
