let handler = async(m, { conn, command }) => {
let txtdono = `*Personalize o meu menu!* 🎨

1 - Mude minha setinha ( ⭔ )

╭────────────────
◦ _Comando:_ /setseta (seta)
◦ *Ex:* /setseta ➸
╰────────────────
`
m.reply(txtdono)
  }
  
  
  handler.command = /^(estilo)/i
  
  module.exports = handler
  