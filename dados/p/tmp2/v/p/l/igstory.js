//Plugin criado por dark, deixe os creditos fdp
let fetch = require('node-fetch')
const axios = require('axios')
const hx = require('hxz-api')
let handler = async(m, { conn, fetchJson, text }) => {
  if (!text) throw `Digite o @ da pessoa do insta | Exemplo /igstory neymarjr`
  hx.igstory(text)
							.then(async result => {
							for(let i of result.medias){
								if(i.url.includes('mp4')){

                                    txt1 = `Story do instagram de ${text}, tipo de story: ${i.type}`
									 conn.sendFile(m.chat, i.url, '', txt1, m)
								} else {

                                    txt2 = `Story do instagram de ${text}, tipo de story: ${i.type}`
                                    conn.sendFile(m.chat, i.url, '', txt2, m) 
						
								}
							}
							});
 }
handler.help = ['Igstory (nome)']
handler.tags = ['cs']
handler.command = /^(igstory)$/i
module.exports = handler
