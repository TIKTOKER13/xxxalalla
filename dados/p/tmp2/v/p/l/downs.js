//Plugin criado por dark, deixe os creditos fdp
let fetch = require('node-fetch')
const axios = require('axios')
let handler = async(m, { conn, fetchJson, text }) => {
    var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? m.message.buttonsResponseMessage.selectedButtonId : ''
    const comando = body.slice(1).trim().split(/ +/).shift().toLowerCase()
    const darklindo = `dappakntlll`

if (comando == "instavid") {
    if (!text) throw `Digite o link do video | Exemplo /instavid https://www.instagram.com/p/CNpoN-pDBN5`
    const res = await axios({
     method: 'GET',
     url: `https://leyscoders-api.herokuapp.com/api/instagram/video?url=${text}&apikey=dappakntlll`, // link da api
     headers: {
         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
     },
 })
    m.reply(`Processando os dados, aguarde...`)

    conn.sendFile(m.chat, res.data.result, '', '', m) //enviando img
            }

            if (comando == "instafoto") {
                if (!text) throw `Digite o link da foto | Exemplo /instafoto https://www.instagram.com/p/CYJfkEUAIO2/?utm_source=ig_web_copy_link`
                const res = await axios({
                 method: 'GET',
                 url: `https://leyscoders-api.herokuapp.com/api/instagram/video?url=${text}&apikey=dappakntlll`, // link da api
                 headers: {
                     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
                 },
             })
                m.reply(`Processando os dados, aguarde...`)
            
                conn.sendFile(m.chat, res.data.result, '', '', m) //enviando img
        
        }

        
        if (comando == "imgbb") {
            const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Marque uma imagem!'
let media = await q.download()
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
api = `https://leyscoders-api.herokuapp.com/api/imgbb?url=${link}&title=StellaBoth&apikey=dappakntlll`
txtapi = `Url: ${api.url}/nUrl Temporario: ${api.delete_url}`
            conn.sendFile(m.chat, api, '', txtapi, m) //enviando img
    
    }

        if (comando == "mediafire") {
            if (!text) throw `Digite o link do arquivo | Exemplo /mediafire https://www.mediafire.com/file/nfy5ve1zgj5x4bs/Script_Skin_Kagura_Starlight_Rainny_Walk_With_Lobby_Sound_%2528Gung_Cakra_%2526_Rizki_Official%2529.zip/file`
            const res = await axios({
             method: 'GET',
             url: `https://leyscoders-api.herokuapp.com/api/mediafire?url=${text}&apikey=dappakntlll`, // link da api
             headers: {
                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
             },
         })
            m.reply(`Processando os dados, aguarde...`)
        
            conn.sendFile(m.chat, res.data.result.download, '', '', m) //enviando img
            m.reply(`Tamanho do arquivo: ${res.data.result.size}`)
    
    }


 }
handler.help = ['Instavid (link)','Instafoto (link)','Mediafire (link)','Imgbb (img)']
handler.tags = ['downloader']
handler.command = /^(instavid|instafoto|mediafire|imgbb)$/i
module.exports = handler
