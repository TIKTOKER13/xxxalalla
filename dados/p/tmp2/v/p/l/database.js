let handler = async (m) => {
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    m.reply(`*Numero total de usuarios registrados no bot ${totalreg}*`)
}
handler.help = ['Usuarios']
handler.tags = ['info']
handler.command = /^(database)$/i
module.exports = handler
