let handler = async(m, { conn, command }) => {
  let isPublic = command === "public";
  let self = global.opts["self"]

  if(self === !isPublic) return m.reply(`a ${!isPublic ? "Self" : "Public"} de mais cedo ${m.sender.split("@")[0] === global.owner[1] ? "perder" : "vigor"} :v`)

  global.opts["self"] = !isPublic

  m.reply(`Estou no modo ${!isPublic ? "Self" : "Public"} agora!`)
}

handler.help = ["Self", "Public"]
handler.tags = ["owner"]

handler.owner = true

handler.command = /^(self|public)/i

module.exports = handler
