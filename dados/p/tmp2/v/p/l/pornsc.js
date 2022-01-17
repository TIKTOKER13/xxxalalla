//Plugin criado por dark, deixe os creditos fdp
let fetch = require('node-fetch')
const axios = require('axios')
let handler = async(m, { conn, fetchJson, text }) => {
  if (!text) throw `Digite uma das opções abaixo:

1. femdom
2. tickle
3. classic
4. ngif
5. erofeet
6. meow
7. erok
8. poke
9. les
10. v3(NOT WORK)
11. hololewd
12. nekoapi_v3.1(NOT WORK)
13. lewdk
14. keta
15. feetg
16. nsfw_neko_gif
17. eroyuri
18. kiss
19. 8ball
20. kuni
21. tits
22. pussy_jpg
23. cum_jpg
24. pussy
25. lewdkemo
26. lizard
27. slap
28. lewd
29. cum
30. cuddle
31. spank
32. smallboobs
33. goose
34. Random_hentai_gif
35. avatar
36. fox_girl
37. nsfw_avatar
38. hug
39. gecg
40. boobs
41. pat
42. feet
43. smug
44. kemonomimi
45. solog
46. holo
47. wallpaper
48. bj
49. woof
50. yuri
51. trap
52. anal
53. baka
54. blowjob
55. holoero
56. feed
57. neko
58. gasm
59. hentai
60. futanari
61. ero
62. solo
63. waifu
64. pwankg
65. eron
66. erokemo
  
Exemplo: /picanime neko`
                   const res = await axios({
                    method: 'GET',
                    url: `https://mnazria.herokuapp.com/api/picanime?list=${text}`, // link da api
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
                    },
                })
                
                   m.reply(`Processando os dados, aguarde...`)
                   conn.sendFile(m.chat, res.data.gambar, '', `${text}`, m) //enviando img
 }
handler.help = ['Picanime (nome)']
handler.tags = ['cs','anime']
handler.command = /^(picanime)$/i
module.exports = handler
