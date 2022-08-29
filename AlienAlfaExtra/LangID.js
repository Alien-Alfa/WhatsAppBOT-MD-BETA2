


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
 * Alien-Alfa.
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







exports.active = 'Telah diaktifkan'


exports.inactive = 'Sudah dinonaktifkan'


 exports.mess = {
success: 'Selesai ✓',
admin: 'Fitur Ini Hanya Untuk Admin!',
botAdmin: 'Bot Harus Admin Dulu!',
owner: 'Fitur Ini Hanya Untuk Pemilik!',
group: 'Fitur Hanya Digunakan Untuk Grup!',
private: 'Fitur Hanya Digunakan Untuk Obrolan Pribadi!',
bot: 'Fitur Ini Hanya Untuk Bot',
wait: 'Dalam proses...',
linkm: 'Dimana linknya?',
error: 'Kesalahan!!',
endLimit: 'Batas Harian Anda Telah Kedaluwarsa, Batas Akan Direset Setiap 12 Jam',
ban: 'Anda telah diblokir oleh pemiliknya, jika Anda ingin diblokir, chat pemilik.',
nsfw: 'Fitur nsfw belum diaktifkan, silahkan hubungi admin untuk aktivasi',
banChat: 'Bot diblokir di grup ini, harap hubungi pemiliknya untuk membatalkan pemblokiran'
}

//=============================================================================================================================================================


//  AntiLink  \\

 exports.antilinkon  = {
    
    group: 'Berhasil mengaktifkan antilink chat grup di grup ini',
    youtube: 'Sukses aktifkan antilink video youtube di grup ini',
    youtubech: 'Sukses aktifkan antilink channel youtube di grup ini',
    instagram: 'Sukses aktifkan antilink instagram di grup ini',
    facebook: 'Sukses aktifkan antilink facebook di grup ini',
    telegram: 'Sukses aktifkan antilink telegram di grup ini',
    tiktok: 'Sukses aktifkan antilink tiktok di grup ini',
    twitter: 'Sukses aktifkan antilink twitter di grup ini',
    all: 'Berhasil mengaktifkan semua antilink di grup ini'
}



 exports.antilinkwarn  = {
    
    group: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim tautan obrolan grup di grup ini atau Anda akan langsung ditendang!`,
    youtube: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim tautan youtube di grup ini atau Anda akan langsung ditendang!`,
    youtubech: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim tautan saluran youtube di grup ini atau Anda akan langsung ditendang!`,
    instagram: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim tautan instagram di grup ini atau Anda akan langsung ditendang!`,
    facebook: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim tautan facebook di grup ini atau Anda akan langsung ditendang!`,
    telegram: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim tautan telegram di grup ini atau Anda akan langsung ditendang!`,
    tiktok: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim tautan tiktok di grup ini atau Anda akan langsung ditendang!`,
    twitter: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim tautan twitter di grup ini atau Anda akan langsung ditendang!`,
    all: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim tautan apa pun di grup ini atau Anda akan langsung ditendang!`
}



 exports.antilinkoff  = {
    group: 'Berhasil mematikan antilink chat grup di grup ini',
    youtube: 'Berhasil mematikan antilink video youtube di grup ini',
    youtubech: 'Sukses mematikan channel youtube antilink di grup ini',
    instagram: 'Sukses mematikan antilink instagram di grup ini',
    facebook: 'Berhasil mematikan antilink facebook di grup ini',
    telegram: 'Sukses mematikan antilink telegram di grup ini',
    tiktok: 'Berhasil mematikan antilink tiktok di grup ini',
    twitter: 'Sukses mematikan antilink twitter di grup ini',
    all: 'Berhasil mematikan semua antilink di grup ini'
}



//=============================================================================================================================================================


//   Functions   \\
 exports.functionson  = {
    antivirus: 'Sukses nyalakan antivirus di grup ini',
    autoreply: 'Berhasil mengaktifkan autoreply di grup ini',
    antitoxic: 'Sukses nyalakan antitoxic di grup ini',
    antiwame: 'Sukses menyalakan antiwame di grup ini',
    nsfw: 'Sukses aktifkan nsfw di grup ini'
}


 exports.functionswarn  = {
    antivirus: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTidak ada tubuh yang diizinkan mengirim virus di grup ini, anggota yang mengirim akan langsung ditendang!`,
    antitoxic: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTidak ada yang diperbolehkan menggunakan kata-kata buruk di grup ini, yang menggunakan akan langsung ditendang!`,
    antiwame: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTidak ada yang diperbolehkan mengirim wa.me di grup ini, yang mengirim akan langsung ditendang!`,
    nsfw: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nFitur Nsfw (tidak aman untuk bekerja) telah diaktifkan di grup ini, yang berarti seseorang dapat mengakses grafik seksual dari bot!`
}


 exports.functionsoff  = {
    antivirus: 'Berhasil mematikan antivirus di grup ini',
    autoreply: 'Berhasil mematikan autoreply di grup ini',
    antitoxic: 'Sukses mematikan antitoxic di grup ini',
    antiwame: 'Sukses mematikan antiwame di grup ini',
    nsfw: 'Berhasil mematikan nsfw di grup ini'
}



//=============================================================================================================================================================

//   Guess  \\

 exports.guess = (prefix,command) => {
unfinished = "Masih ada sesi yang belum selesai!",
example = `Example : ${prefix + command} lagu\n\nOpsi : \n1.lagu\n2. gambar\n3. mengatakan\n4. kalimat\n5. lirik\n6.makanan`,
song = `Apa judul lagu ini?\n\nArtis : ${result.artist}\nWaktu : 60s`,
picture = `Tolong jawab pertanyaan di atas\n\nKeterangan : ${result.deskripsi}\nWaktu : 60s`,
word = `Tolong jawab pertanyaan berikut\n\n${result.soal}\nWaktu : 60s`,
sentence = `Tolong jawab pertanyaan berikut\n\n${result.soal}\nWaktu : 60s`,
lyrics = `Isi lirik yang hilang di bawah ini: *${result.soal}*?\nWaktu : 60s`,
saying = `*Jawab pertanyaan berikut :*\n${result.soal}*\nWaktu : 60s`
}

 exports.guessbutton  = {
    song: 'Tebak lagu',
    picture: 'Tebak gambarnya',
    word: 'Tebak kata',
    sentence: 'Tebak Kalimatnya',
    lyrics: 'Tebak Liriknya',
    saying: 'Tebak Ucapannya'
}    

//=============================================================================================================================================================


exports.enableordisable = `Klik tombol di bawah\n\nAktif untuk mengaktifkan\nNonaktif untuk menonaktifkan`


exports.replycaption = (prefix,command) => {
   return `Kirim/Balas Gambar Dengan Caption ${prefix + command}`
}

exports.bcerr = (prefix,command) => {
   return `*Kirim/Balas Video/Audio/Gambar yang Ingin Disiarkan Dengan Caption* ${prefix + command}`
}

exports.blocerr = (prefix,command) => {
   return `Menggunakan ${prefix}bcloc text\n\nContoh : ${prefix + command} attention everybody`
}

exports.notbybot = 'Pesan itu tidak dikirim oleh bot!'


exports.mainerr = '*Kesalahan*'


exports.takeresult = `Ini dia!`


exports.textNext = `Lanjut `


exports.textbutt1 = 'ping'


exports.textbutt2 = 'Menu 🐰'


exports.textbutt3 = 'Pemilik 😈'


exports.texturlbutt1 = 'Youtube 🍓'


exports.texturlbutt2 = 'Naskah '


exports.unfinished = "Masih ada sesi yang belum selesai!"

exports.stickererr = (prefix,command) => {
   return `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}

exports.sticviderr = (prefix,command) => {
   return 'Maksimal 10 detik!'
}

exports.replycap = (prefix,command) => {
   return `Kirim/Balas Foto Dengan Caption ${prefix + command} *teks*`
}

exports.textcap = (prefix,command) => {
   return `Balas Teks Dengan Caption ${prefix + command}`
} 

exports.linkerr = "Kesalahan tautan!"

exports.madeby = `Dibuat oleh`


exports.waitamin = `Tunggu sebentar sambil membuat logo sekitar 1 menit`


exports.emojiz = (prefix,command) => {
   return "Masukkan emoji, maksimal 1 emoji, mis?" + ` ${prefix + command} `
}

exports.invalidlink = `*Link yang anda berikan tidak valid*`


exports.example = `Contoh`


//=============================================================================================================================================================
