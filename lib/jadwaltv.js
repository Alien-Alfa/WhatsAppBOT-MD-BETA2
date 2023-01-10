  //═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                                                                     //
//                                                       ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ ２                                                           //
//                                                                                                                                                     //
//                                                                    Ｖ：１．０．１                                                                     //
//                                                                                                                                                     //
//                                                       ▄▀█ █░░ █ █▀▀ █▄░█   ▄▀█ █░░ █▀▀ ▄▀█                                                          //
//                                                       █▀█ █▄▄ █ ██▄ █░▀█   █▀█ █▄▄ █▀░ █▀█                                                          //
//                                                                                                                                                     //
//                                                                                                                                                     //
//═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════//





// Obfuscated By AlienAlfa


/**
 * //═══════════[ Thanks To ]══════════════//
 * 
 * Dika Ardnt.
 * Xeon Bot Inc.
 * Alien-Alfa.
 * SafwanGanz
 * A-J-M-A-L
 * Neeraj-x0
 * 
 * //════════════════════════════//
*/

// CURRENTLY RUNNING ON BETA VERSION!!
/**
   * MIT License
* 
   * Create By Dika Ardnt.
   * Edited By Xeon Bot Inc.
   * Modified By Alien-Alfa
   * © 2022 Alien-Alfa.
* 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
* 
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
*/




const {default: Axios} = require('axios')
const cheerio = require('cheerio')

function jadwaltv(query) {
	return new Promise(async (resolve, reject) => {
const channelna = query;
               let stasiun = [
                    "rcti",
                    "nettv",
                    "antv",
                    "gtv",
                    "indosiar",
                    "inewstv",
                    "kompastv",
                    "metrotv",
                    "mnctv",
                    "rtv",
                    "sctv",
                    "trans7",
                    "transtv",
                    "tvone",
                    "tvri",
               ];
               let isist = `*Available channels* :\n\n`;
               for (let i = 0;i < stasiun.length;i++) {
                    isist += `*➣*  ${stasiun[i]}\n`;
               }
               try {
                    // const tv_switch = stasiun[0]
                    Axios.get("https://www.jadwaltv.net/channel/" + channelna)
                         .then(({
                              data
                         }) => {
                              const $ = cheerio.load(data);
                              let isitable1 = [];
                              let isitable2 = [];
                              $("div > div > table:nth-child(3) > tbody > tr").each(function (
                                   i,
                                   result
                              ) {
                                   isitable1.push({
                                        jam: result.children[0].children[0].data,
                                        tayang: result.children[1].children[0].data,
                                   });
                              });
                              // console.log(isitable1)
                              $("div > div > table:nth-child(5) > tbody > tr").each(function (
                                   i,
                                   result
                              ) {
                                   isitable2.push({
                                        jam: result.children[0].children[0].data,
                                        tayang: result.children[1].children[0].data,
                                   });
                              });
                              const semuatable = [];

                              for (let i = 0;i < isitable1.length;i++) {
                                   semuatable.push(isitable1[i]);
                              }
                              for (let i = 0;i < isitable2.length;i++) {
                                   semuatable.push(isitable2[i]);
                              }
                              // console.log(semuatable)
                              let daftartay = `*Menampilkan daftar tayang channel ${channelna}*\n\n`;
                              for (let i = 0;i < semuatable.length;i++) {
                                   daftartay += `${semuatable[i].jam}  ${semuatable[i].tayang}\n`;
                              }
                              resolve(daftartay);
                              // console.log(semuatable)
                         })
                         .catch((e) => {
                              resolve(isist);
                              // console.log(e)
                         });
               } catch (e) {
                    resolve(isist);
                    console.log(e);
               }
	})
}

module.exports = {jadwaltv}