let handler = m => m

handler.before = function (m) {
    let user = global.db.data.users[m.sender]
    let role = (user.level <= 3) ? 'Guerreiro V'
        : ((user.level >= 3) && (user.level <= 6)) ? 'Guerreiro IV'
            : ((user.level >= 6) && (user.level <= 9)) ? 'Guerreiro III'
                : ((user.level >= 9) && (user.level <= 12)) ? 'Guerreiro II'
                    : ((user.level >= 12) && (user.level <= 15)) ? 'Guerreiro I'
                        : ((user.level >= 15) && (user.level <= 18)) ? 'Elite V'
                            : ((user.level >= 18) && (user.level <= 21)) ? 'Elite IV'
                                : ((user.level >= 21) && (user.level <= 24)) ? 'Elite III'
                                    : ((user.level >= 24) && (user.level <= 27)) ? 'Elite II'
                                        : ((user.level >= 27) && (user.level <= 30)) ? 'Elite I'
                                            : ((user.level >= 30) && (user.level <= 33)) ? 'Mestre V'
                                                : ((user.level >= 33) && (user.level <= 36)) ? 'Mestre IV'
                                                    : ((user.level >= 36) && (user.level <= 39)) ? 'Mestre III'
                                                        : ((user.level >= 39) && (user.level <= 42)) ? 'Mestre II'
                                                            : ((user.level >= 42) && (user.level <= 45)) ? 'Mestre I'
                                                                : ((user.level >= 45) && (user.level <= 48)) ? 'Grande Mestre Mestre V'
                                                                    : ((user.level >= 48) && (user.level <= 51)) ? 'Grande Mestre Mestre IV'
                                                                        : ((user.level >= 51) && (user.level <= 54)) ? 'Grande Mestre Mestre III'
                                                                            : ((user.level >= 54) && (user.level <= 57)) ? 'Grande Mestre Mestre II'
                                                                                : ((user.level >= 57) && (user.level <= 60)) ? 'Grande Mestre Mestre I'
                                                                                    : ((user.level >= 60) && (user.level <= 63)) ? 'Epico V'
                                                                                        : ((user.level >= 63) && (user.level <= 66)) ? 'Epico IV'
                                                                                            : ((user.level >= 66) && (user.level <= 69)) ? 'Epico III'
                                                                                                : ((user.level >= 69) && (user.level <= 71)) ? 'Epico II'
                                                                                                    : ((user.level >= 71) && (user.level <= 74)) ? 'Epico I'
                                                                                                        : ((user.level >= 74) && (user.level <= 77)) ? 'Legendario V'
                                                                                                            : ((user.level >= 77) && (user.level <= 80)) ? 'Legendario IV'
                                                                                                                : ((user.level >= 80) && (user.level <= 83)) ? 'Legendario III'
                                                                                                                    : ((user.level >= 83) && (user.level <= 86)) ? 'Legendario II'
                                                                                                                        : ((user.level >= 86) && (user.level <= 89)) ? 'Legendario I'
                                                                                                                            : ((user.level >= 89) && (user.level <= 91)) ? 'Mítico V'
                                                                                                                                : ((user.level >= 91) && (user.level <= 94)) ? 'Mítico IV'
                                                                                                                                    : ((user.level >= 94) && (user.level <= 97)) ? 'Mítico III'
                                                                                                                                        : ((user.level >= 97) && (user.level <= 100)) ? 'Mítico II'
                                                                                                                                           : ((user.level >= 100) && (user.level <= 105)) ? 'Mítico I'      
                                                                                                                                              : ((user.level >= 105) && (user.level <= 120)) ? 'Grande Mítico'
                                                                                                                                                 : ((user.level >= 120) && (user.level <= 150)) ? 'Major'
                                                                                                                                                    : ((user.level >= 150) && (user.level <= 160)) ? 'Rei'
                                                                                                                                                        : ((user.level >= 160) && (user.level <= 170)) ? 'Senhor Demônio'
                                                                                                                                                            : ((user.level >= 170) && (user.level <= 185)) ? 'Lorde Demônio'
                                                                                                                                                                : ((user.level >= 185) && (user.level <= 200)) ? 'Mago I'
                                                                                                                                                                    : ((user.level >= 200) && (user.level <= 400)) ? 'Mago II'
                                                                                                                                                                        : ((user.level >= 405) && (user.level <= 700)) ? 'Mago III'
                                                                                                                                                                            : ((user.level >= 700) && (user.level <= 1000)) ? 'Grande Mago'
                                                                                                                                                                                : 'Dragão rei estrela'


    user.role = role
    return true
}

module.exports = handler
