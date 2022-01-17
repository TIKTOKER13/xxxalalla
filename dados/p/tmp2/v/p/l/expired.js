let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0] || isNaN(args[0])) throw `Insira um número que representa o número de dias!\n*Exemplo: ${usedPrefix + command} 30*`

    let who
    if (m.isGroup) who = args[1] ? args[1] : m.chat
    else who = args[1]

    var jumlahHari = 86400000 * args[0]
    var now = new Date() * 1
    if (now < global.db.data.chats[who].expired) global.db.data.chats[who].expired += jumlahHari
    else global.db.data.chats[who].expired = now + jumlahHari
    m.reply(`Definido com sucesso o dia de expiração deste Grupo para ${args[0]} dia.\n\nContagem regressiva  ${msToDate(global.db.data.chats[who].expired - now)}`)
}
handler.help = ['Expirar (dia)']
handler.tags = ['owner']
handler.command = /^(expired|expirar)$/i
handler.owner = true
module.exports = handler

function msToDate(ms) {
    temp = ms
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = ms % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));
    return days + " dia " + hours + " horas " + minutes + " minutos";
    // +minutes+":"+sec;
}
