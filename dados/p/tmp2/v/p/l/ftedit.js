let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {
let [effect, teks] = text.split `|`

let listeffect = `*Lista de efeitos:*

smoke
wolfmetal
underwaterocean
typography
neonlight
google
rainbowshine
camuflage
3dglowing
vintage
candy
gradientavatar
glowrainbow
stars
fur
flaming
crispchrome
kueultah
rainbowbg
metalicglow
striking3d
watermelon
underwebmatrix
multimaterial
harrypotter
8bit
kopi2
luxuryroyal
gerbang
woodblock
smoketypography
sweetcandy
silk
bevel
partyneon
greenleaves
modernmetal
lolcover
warface
pentakill
aov
battlefield
avatarlol
pokemon
lolavatarglitch
shinebannerlol
mastery7lol
dota2avatar
lol
crossfire
glowpentakill
warfacecover
coveroverwatch
lolcover2
csgo
lolpentakill

*Use o comando assim: /textpro lol|Dark*
`.trim()

    if (!effect) return conn.reply(m.chat, listeffect, m)
    if (!teks) return conn.reply(m.chat, 'Cade o texto? | Exemplo de uso: /texpro csgo|dark', m)

  await m.reply('Aguarde estou processando a imagem.')
 let hasil = await (await fetch('https://api.xteam.xyz/photooxy/' + effect + '?text=' + teks + '&APIKEY=(suaApi)')).buffer()
 let caption = `*Imagem Feita.*\n\nEfeito: ${effect}`

    conn.sendFile(m.chat, hasil, 'image.jpg', caption, m)
}
//handler.help = ['Textpro efeito|foto']
//handler.tags = ['transformar']
handler.command = /^(textpro)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler