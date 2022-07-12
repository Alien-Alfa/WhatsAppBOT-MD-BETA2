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




const axios = require('axios');
const cheerio = require('cheerio');

const Gempa = () => new Promise((resolve, reject) => {

  axios.get('https://www.bmkg.go.id/gempabumi/gempabumi-dirasakan.bmkg').then((response) => {

  const $ = cheerio.load(response.data)

  const urlElems = $('table.table-hover.table-striped')

  for (let i = 0; i < urlElems.length; i++) {
    const urlSpan = $(urlElems[i]).find('tbody')[0]

    if (urlSpan) {
      const urlData = $(urlSpan).find('tr')[0]
      var Kapan = $(urlData).find('td')[1]
      var Letak = $(urlData).find('td')[2]
      var Magnitudo = $(urlData).find('td')[3]
      var Kedalaman = $(urlData).find('td')[4]
      var Wilayah = $(urlData).find('td')[5]
      var lintang = $(Letak).text().split(' ')[0]
      var bujur = $(Letak).text().split(' ')[2]
      var hasil = {
        status: true,
        code: 200,
        result: {
        Waktu: $(Kapan).text(),
        Lintang: lintang,
        Bujur: bujur,
        Magnitudo: $(Magnitudo).text(),
        Kedalaman: $(Kedalaman).text().replace(/\t/g, '').replace(/I/g, ''),
        Wilayah: $(Wilayah).text().replace(/\t/g, '').replace(/I/g, '').replace('-','').replace(/\r/g, '').split('\n')[0],
        Map: $('div.row > div > img').attr('src')
        }
      }
      // We then print the text on to the console
      resolve(hasil);
    }
  }
  }).catch(err => reject(err))
})

exports.Gempa = Gempa