const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' //
                    + 'VERSION:3.0\n' 
                    + 'N:;Lukk;;;'
                    + 'FN:Lukk\n' // 
                    + 'ORG:Lukk;\n' //
                    + 'TEL;type=CELL;type=VOICE;waid=5522998167591:+55 22 99816-7591\n' // 
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Lukk', contacts: [{ vcard }] } }, { quoted: m })
                m.reply('Wa.me/+5517991134416')
}
handler.help = ['Dono']
handler.tags = ['info']

handler.command = /^(owner|dono)$/i

module.exports = handler
