const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Nenhuma mídia encontrada'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`Imagem Hospedada com sucesso.\n\n${link}\n
${media.length} Byte(s)\n\n
${isTele ? '(Sem data de expiração)' : '(Não conhecido)'}`)
}
handler.help = ['Tourl (Marque uma img)']
handler.tags = ['transformar']
handler.command = /^(upload|tourl)$/i

module.exports = handler
