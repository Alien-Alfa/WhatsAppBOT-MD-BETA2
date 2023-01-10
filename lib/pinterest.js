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



 

const gis = require("g-i-s")

async function pinterest(query) {
	return new Promise((resolve, reject) => {
	  let err = { status: 404, message: "There is an error" }
	  gis({ searchTerm: query + ' site:id.pinterest.com', }, (er, res) => {
	   if (er) return err
	   let hasil = {
		  status: 200,
		  creator: 'xeon',
		  result: []
	   }
	   res.forEach(x => hasil.result.push(x.url))
	   resolve(hasil)
	  })
	})
}

module.exports.pinterest = pinterest