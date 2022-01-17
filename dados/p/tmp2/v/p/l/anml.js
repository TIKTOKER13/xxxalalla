let fetch = require('node-fetch')
const axios = require('axios')
const { translate } = require('bing-translate-api');
let handler = async (m, { conn, text, usedPrefix, command }) => {
  let ar = ['dog', 'cat', 'panda', 'fox', 'red_panda', 'koala', 'bird', 'raccoon', 'kangaroo']
  let er = `
┌「 *Escolha* 」
${ar.map(v => '├ ' + v).join`\n`}
└────
Exemplo:
${usedPrefix}${command} panda
`.trim()
  if (!text) throw er
  if (!ar.includes(text)) throw er
  let res = await fetch(
    API('https://some-random-api.ml', '/animal/' + text)
  )
  if (!res.ok) throw `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.image) throw json
  const res2 = await axios({
    method: 'GET',
    url: `https://api.mymemory.translated.net/get?q=${json.fact}&langpair=en|pt`, // link da api
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
    },
})
cap = `*Fato interessante sobre esse animal*\n\n${res2.data.responseData.translatedText}\n\n-Stella Bot`
conn.sendFile(m.chat, json.image, '', 'fofo ne', m)

}
handler.help = ['Animal panda','Animal dog','Animal cat','Animal fox','Animal red_panda','Animal koala','Animal bird','Animal raccoon','Animal kangaroo']
handler.tags = ['imgs']
handler.command = /^(animal|animalfact)$/i

module.exports = handler