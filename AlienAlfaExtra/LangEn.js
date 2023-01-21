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







 exports.active = () => {
    return 'Already activated'
} 

exports.inactive = () => {
    return  'Already deactivated'
}

 exports.mess  = () => {
success = 'Done ✓',
admin = 'This Feature Is Only For Admin!',
botAdmin = 'Bot Must Be Admin First!',
owner = 'This Feature Is Only For Owner!',
group = 'Feature Used Only For Groups!',
private = 'Features Used Only For Private Chat!',
bot = 'This Feature Is Only For Bot',
wait = '```Processing...```',
linkm = 'Where is the link?',
error = 'Error!!',
endLimit = 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
ban = 'You have been banned by the owner, if you want to be unbanned, chat owner.',
nsfw = 'The nsfw feature has not been activated, please contact the admin to activate',
banChat = 'The bot was banned in this group, please contact the owner to unban'
}

//=============================================================================================================================================================


//  AntiLink  \\

 exports.antilinkon  = () => {
    
    group = 'Success in turning on group chat antilink in this group',
    youtube = 'Success in turning on youtube video antilink in this group',
    youtubech = 'Success in turning on youtube channel antilink in this group',
    instagram = 'Success in turning on instagram antilink in this group',
    facebook = 'Success in turning on facebook antilink in this group',
    telegram = 'Success in turning on telegram antilink in this group',
    tiktok = 'Success in turning on tiktok antilink in this group',
    twitter = 'Success in turning on twitter antilink in this group',
    all = 'Success in turning on all antilink in this group'
}



 exports.antilinkwarn  = () => {
    
    group = `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send group chat link in this group or u will be kicked immediately!`,
    youtube = `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send youtube link in this group or u will be kicked immediately!`,
    youtubech = `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send youtube channel link in this group or u will be kicked immediately!`,
    instagram = `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send instagram link in this group or u will be kicked immediately!`,
    facebook = `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send facebook link in this group or u will be kicked immediately!`,
    telegram = `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send telegram link in this group or u will be kicked immediately!`,
    tiktok = `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send tiktok link in this group or u will be kicked immediately!`,
    twitter = `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send twitter link in this group or u will be kicked immediately!`,
    all = `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`
}



 exports.antilinkoff  = () => {
    group = 'Success in turning off group chat antilink in this group',
    youtube = 'Success in turning off youtube video antilink in this group',
    youtubech = 'Success in turning off youtube channel antilink in this group',
    instagram = 'Success in turning off instagram antilink in this group',
    facebook = 'Success in turning off facebook antilink in this group',
    telegram = 'Success in turning off telegram antilink in this group',
    tiktok = 'Success in turning off tiktok antilink in this group',
    twitter = 'Success in turning off twitter antilink in this group',
    all = 'Success in turning off all antilink in this group'
}



//=============================================================================================================================================================


//   Functions   \\
 exports.functionson  = () => {
    antivirus = 'Success in turning on antivirus in this group',
    autoreply = 'Success in turning on the autoreply in this group',
    antitoxic = 'Success in turning on antitoxic in this group',
    antiwame = 'Success in turning on antiwame in this group',
    nsfw = 'Success in turning on nsfw in this group'
}


 exports.functionswarn  = () => {
    antivirus = `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNo body is allowed to send virus in this group, member who send will be kicked immediately!`,
    antitoxic = `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to use bad words in this group, one who uses will be kicked immediately!`,
    antiwame = `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send wa.me in this group, one who sends will be kicked immediately!`,
    nsfw = `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`
}


 exports.functionsoff  = () => {
    antivirus = 'Success in turning off antivirus in this group',
    autoreply = 'Success in turning off the autoreply in this group',
    antitoxic = 'Success in turning off antitoxic in this group',
    antiwame = 'Success in turning off antiwame in this group',
    nsfw = 'Success in turning off nsfw in this group'
}



//=============================================================================================================================================================

//   Guess  \\

 exports.guess = (prefix,command) => {
unfinished = "There are still unfinished sessions!",
example = `Example : ${prefix + command} song\n\nOption : \n1.song\n2. picture\n3. saying\n4. sentence\n5. lyrics\n6.food`,
song = `What is the name of this song?\n\nArtist : ${result.artist}\nTime : 60s`,
picture = `Please answer the question above\n\nDescription : ${result.deskripsi}\nTime : 60s`,
word = `Please answer the following question\n\n${result.soal}\nTime : 60s`,
sentence = `Please answer the following question\n\n${result.soal}\nTime : 60s`,
lyrics = `Fill the missing lyrics below : *${result.soal}*?\nTime : 60s`,
saying = `*Answer the following questions :*\n${result.soal}*\nTime : 60s`
}

 exports.guessbutton  = () => {
    song = 'Guess the song',
    picture = 'Guess the picture',
    word = 'Guess The Word',
    sentence = 'Guess the Sentence',
    lyrics = 'Guess The Lyrics',
    saying = 'Guess The Saying'
}    

//=============================================================================================================================================================


 exports.enableordisable = () => {
    return `Please click the button below\n\nOn to enable\nOff to disable`
}

 exports.replycaption = (prefix,command) => {
    return `Send/Reply Image With Caption ${prefix + command}`
}

 exports.bcerr = (prefix,command) => {
    return `*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`
}

 exports.blocerr = (prefix,command) => {
    return `Use ${prefix}bcloc text\n\nExample : ${prefix + command} attention everybody`
}

 exports.notbybot = () => {
    return 'The message was not sent by a bot!'
}

 exports.mainerr = () => {
    return '*Error*'
}

 exports.takeresult = () => {
    return `Here you go!`
}

 exports.textNext = () => {
    return `Next `
}

 exports.textbutt1 = () => {
    return 'Ping'
}

 exports.textbutt2 = () => {
    return 'Menu 🐰'
}

 exports.textbutt3 = () => {
    return 'Owner 😈'
}

 exports.texturlbutt1 = () => {
    return 'YouTube 🍓'
}

 exports.texturlbutt2 = () => {
    return 'Script '
}

 exports.unfinished = "There are still unfinished sessions!"

 exports.stickererr = (prefix,command) => {
    return `Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`
}

 exports.sticviderr = (prefix,command) => {
    return 'Maximum 10 seconds!'
}

 exports.replycap = (prefix,command) => {
    return `Send/Reply Photo With Caption ${prefix + command} *text*`
}

 exports.textcap = (prefix,command) => {
    return `Reply Text With Caption ${prefix + command}`
} 

 exports.linkerr = "Link error!"

 exports.madeby = () => {
    return `Made by`
}

 exports.waitamin = () => {
    return `Wait a moment while making the logo about 1 minute`
}

 exports.emojiz = (prefix,command) => {
    return "Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} `
}

 exports.invalidlink = () => {
    return `*The link you provided is not valid*`
}

 exports.example = () => {
    return `Example`
}



























