let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `uhm .. o que você está procurando?\n\nexemplo:\n${usedPrefix + command} boa sorte`
    let res = await carigroup(text, 'nome')
    if (!res.length) throw 'Grupos não encontrados ¯\_(ツ)_/¯'
    let teks = res.map(res => res.subject + '\n' + res.link).join('\n\n')
    m.reply(teks)



async function carigroup(search, searchby = `${text}`) {
    const cheerio = require('cheerio')
    const axios = require('axios')
    let { data } = await axios.get(global.API('http://ngarang.com', '/link-grup-wa/daftar-link-grup-wa.php', {
        search: encodeURIComponent(search),
        searchby,
    }))
    let $ = cheerio.load(data)
    let results = []
    $('#content > div.entry.clearfix > div.wa-chat').each(function (index, element) {
        let subject = $(this).find('div > div.wa-chat-title-container > a > div > div').text().trim()
        let link = $(this).find('div > div.wa-chat-message > a').attr('href').trim()
        results.push({
            subject,
            link
        })
    })
    return results
}
}
handler.help = ['Grupos (texto)']
handler.tags = ['tools']
handler.command = /^(grupos|gps)$/i
module.exports = handler



