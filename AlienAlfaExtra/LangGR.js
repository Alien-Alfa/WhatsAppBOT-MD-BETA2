


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







exports.active = 'Bereits aktiviert'


exports.inactive = 'Bereits deaktiviert'


 exports.mess = {
success: 'Fertig ✓',
admin: 'Diese Funktion ist nur für Administratoren!',
botAdmin: 'Bot muss zuerst Admin sein!',
owner: 'Diese Funktion ist nur für Besitzer!',
group: 'Funktion nur für Gruppen verwendet!',
private: 'Funktionen, die nur für den privaten Chat verwendet werden!',
bot: 'Diese Funktion ist nur für Bot',
wait: 'In Bearbeitung...',
linkm: 'Wo ist der Link?',
error: 'Fehler!!',
endLimit: 'Ihr Tageslimit ist abgelaufen, das Limit wird alle 12 Stunden zurückgesetzt',
ban: 'Sie wurden vom Eigentümer gesperrt, wenn Sie die Sperrung aufheben möchten, Chat-Besitzer.',
nsfw: 'Die nsfw-Funktion wurde nicht aktiviert. Bitte kontaktieren Sie den Administrator, um sie zu aktivieren',
banChat: 'Der Bot wurde in dieser Gruppe gesperrt, bitte kontaktieren Sie den Besitzer, um die Sperre aufzuheben'
}

//=============================================================================================================================================================


//  AntiLink  \\

 exports.antilinkon  = {
    
    group: 'Erfolg beim Aktivieren des Gruppenchat-Antilinks in dieser Gruppe',
    youtube: 'Erfolg beim Aktivieren von YouTube-Video-Antilink in dieser Gruppe',
    youtubech: 'Antilink für YouTube-Kanal in dieser Gruppe erfolgreich aktiviert',
    instagram: 'Erfolg beim Aktivieren von Instagram Antilink in dieser Gruppe',
    facebook: 'Erfolg beim Aktivieren von Facebook Antilink in dieser Gruppe',
    telegram: 'Telegramm-Antilink in dieser Gruppe erfolgreich aktiviert',
    tiktok: 'Erfolg beim Aktivieren von Tiktok Antilink in dieser Gruppe',
    twitter: 'Erfolg beim Aktivieren von Twitter Antilink in dieser Gruppe',
    all: 'Aktivierung aller Antilinks in dieser Gruppe erfolgreich'
}



 exports.antilinkwarn  = {
    
    group: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nWenn Sie kein Administrator sind, senden Sie keinen Gruppenchat-Link in dieser Gruppe oder Sie werden sofort gekickt!`,
    youtube: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nWenn Sie kein Administrator sind, senden Sie keinen YouTube-Link in dieser Gruppe, oder Sie werden sofort gekickt!`,
    youtubech: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nWenn Sie kein Administrator sind, senden Sie keinen YouTube-Kanal-Link in dieser Gruppe oder Sie werden sofort gekickt!`,
    instagram: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nWenn Sie kein Administrator sind, senden Sie keinen Instagram-Link in dieser Gruppe oder Sie werden sofort gekickt!`,
    facebook: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nWenn Sie kein Administrator sind, senden Sie keinen Facebook-Link in dieser Gruppe, oder Sie werden sofort gekickt!`,
    telegram: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nWenn Sie kein Admin sind, senden Sie keinen Telegrammlink in dieser Gruppe oder Sie werden sofort gekickt!`,
    tiktok: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nWenn Sie kein Administrator sind, senden Sie keinen Tiktok-Link in dieser Gruppe oder Sie werden sofort gekickt!`,
    twitter: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nWenn Sie kein Admin sind, senden Sie keinen Twitter-Link in dieser Gruppe oder Sie werden sofort gekickt!`,
    all: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nWenn Sie kein Admin sind, senden Sie keinen Link in diese Gruppe oder Sie werden sofort gekickt!`
}



 exports.antilinkoff  = {
    group: 'Erfolg beim Deaktivieren des Gruppenchat-Antilinks in dieser Gruppe',
    youtube: 'Erfolg beim Deaktivieren von YouTube-Video-Antilink in dieser Gruppe',
    youtubech: 'Erfolg beim Deaktivieren des YouTube-Kanal-Antilinks in dieser Gruppe',
    instagram: 'Erfolg beim Deaktivieren von Instagram-Antilink in dieser Gruppe',
    facebook: 'Erfolg beim Deaktivieren von Facebook Antilink in dieser Gruppe',
    telegram: 'Erfolg beim Deaktivieren von Telegramm-Antilink in dieser Gruppe',
    tiktok: 'Erfolg beim Deaktivieren von Tiktok Antilink in dieser Gruppe',
    twitter: 'Erfolg beim Deaktivieren von Twitter Antilink in dieser Gruppe',
    all: 'Alle Antilinks in dieser Gruppe wurden erfolgreich deaktiviert'
}



//=============================================================================================================================================================


//   Functions   \\
 exports.functionson  = {
    antivirus: 'Erfolg beim Aktivieren des Virenschutzes in dieser Gruppe',
    autoreply: 'Erfolg beim Aktivieren der automatischen Antwort in dieser Gruppe',
    antitoxic: 'Erfolg beim Einschalten von Antitoxin in dieser Gruppe',
    antiwame: 'Erfolg beim Einschalten von Antiwame in dieser Gruppe',
    nsfw: 'Erfolg beim Einschalten von nsfw in dieser Gruppe'
}


 exports.functionswarn  = {
    antivirus: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNiemand darf Viren in dieser Gruppe versenden, Mitglieder, die senden, werden sofort gekickt!`,
    antitoxic: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNiemand darf in dieser Gruppe Schimpfwörter verwenden, wer verwendet, wird sofort gekickt!`,
    antiwame: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNiemand darf in dieser Gruppe wa.me senden, wer sendet wird sofort gekickt!`,
    nsfw: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nDie Nsfw-Funktion (not safe for work) wurde in dieser Gruppe aktiviert, was bedeutet, dass man vom Bot aus auf sexuelle Grafiken zugreifen kann!`
}


 exports.functionsoff  = {
    antivirus: 'Erfolg beim Deaktivieren des Antivirus in dieser Gruppe',
    autoreply: 'Erfolg beim Deaktivieren der automatischen Antwort in dieser Gruppe',
    antitoxic: 'Erfolg beim Ausschalten von Antitoxin in dieser Gruppe',
    antiwame: 'Erfolg beim Deaktivieren von Antiwame in dieser Gruppe',
    nsfw: 'Erfolg beim Deaktivieren von nsfw in dieser Gruppe'
}



//=============================================================================================================================================================

//   Guess  \\

 exports.guess = (prefix,command) => {
unfinished = "Es gibt noch unfertige Sessions!",
example = `Example : ${prefix + command} Lied\n\nOption : \n1.Lied\n2. Bild\n3. sagen\n4. Satz\n5. Songtexte\n6.Essen`,
song = `Wie heisst dieses Lied?\n\nKünstler : ${result.artist}\nZeit : 60s`,
picture = `Bitte beantworten Sie die obige Frage\n\nBeschreibung : ${result.deskripsi}\nZeit : 60s`,
word = `Bitte beantworten Sie die folgende Frage\n\n${result.soal}\nZeit : 60s`,
sentence = `Bitte beantworten Sie die folgende Frage\n\n${result.soal}\nZeit : 60s`,
lyrics = `Füllen Sie die fehlenden Texte unten aus: *${result.soal}*?\nZeit : 60s`,
saying = `*Beantworten Sie folgende Fragen :*\n${result.soal}*\nZeit : 60s`
}

 exports.guessbutton  = {
    song: 'Rate das Lied',
    picture: 'Erraten Sie das Bild',
    word: 'Rate das Wort',
    sentence: 'Erraten Sie den Satz',
    lyrics: 'Erraten Sie die Texte',
    saying: 'Erraten Sie das Sprichwort'
}    

//=============================================================================================================================================================


exports.enableordisable = `Bitte klicken Sie auf die Schaltfläche unten\n\nEin zum Aktivieren\nAus zum Deaktivieren`


exports.replycaption = (prefix,command) => {
   return `Bild mit Bildunterschrift senden/antworten ${prefix + command}`
}

exports.bcerr = (prefix,command) => {
   return `* Senden/Antworten von Video/Audio/Bild, das Sie mit Untertitel senden möchten* ${prefix + command}`
}

exports.blocerr = (prefix,command) => {
   return `Verwenden ${prefix}bcloc text\n\nBeispiel : ${prefix + command} attention everybody`
}

exports.notbybot = 'Die Nachricht wurde nicht von einem Bot gesendet!'


exports.mainerr = '*Fehler*'


exports.takeresult = `Bitte schön!`


exports.textNext = `Nächste `


exports.textbutt1 = 'Klingeln'


exports.textbutt2 = 'Speisekarte 🐰'


exports.textbutt3 = 'Eigentümer 😈'


exports.texturlbutt1 = 'Youtube 🍓'


exports.texturlbutt2 = 'Skript '


exports.unfinished = "Es gibt noch unfertige Sessions!"

exports.stickererr = (prefix,command) => {
   return `Senden Sie Bild/Video mit Bildunterschrift ${prefix + command}\nVideodauer 1-9 Sekunden`
}

exports.sticviderr = (prefix,command) => {
   return 'Maximal 10 Sekunden!'
}

exports.replycap = (prefix,command) => {
   return `Foto mit Bildunterschrift senden/antworten ${prefix + command} *Text*`
}

exports.textcap = (prefix,command) => {
   return `Antworttext mit Bildunterschrift ${prefix + command}`
} 

exports.linkerr = "Linkfehler!"

exports.madeby = `Hergestellt von`


exports.waitamin = `Warten Sie einen Moment, während Sie das Logo etwa 1 Minute lang erstellen`


exports.emojiz = (prefix,command) => {
   return "Emoji eingeben, max. 1 Emoji, zB?" + ` ${prefix + command} `
}

exports.invalidlink = `*Der angegebene Link ist ungültig*`


exports.example = `Beispiel`


//=============================================================================================================================================================
