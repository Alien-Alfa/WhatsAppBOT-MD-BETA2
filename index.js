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


//  𝘼𝙇𝙄𝙀𝙉 𝘼𝙇𝙁𝘼-𝙈𝘿-𝘽𝙀𝙏𝘼 𝙄𝙄


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




require('./config')
const { default: AlfaConnect, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")

const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const fetch = require('node-fetch')
const yargs = require('yargs/yargs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const { MakeSession } = require ('./lib/alienalfa')
const { exec, spawn, execSync } = require("child_process")
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')
const moment = require('moment-timezone')
global.authFile = global.SessName
let remsession = global.sessionidzz
const { state, saveState } = useSingleFileAuthState(authFile)
console.log('Generating Session File...\n')
try { MakeSession(remsession, authFile) }catch(err){ console.log('Session_ID Method Failed To generate. Please Do it Manualy') }
setTimeout(() => {
var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')

global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`database/database.json`)
)
global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
}

// save database every 30seconds

if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 30 * 1000)
																																																																																																																																																																																								var _0x5346ea=_0x36b0;(function(_0x5cb933,_0xbd0d19){var _0x4dbca0=_0x36b0,_0x462dd5=_0x5cb933();while(!![]){try{var _0x4ac4f9=parseInt(_0x4dbca0(0x160))/0x1+-parseInt(_0x4dbca0(0x164))/0x2*(parseInt(_0x4dbca0(0x15b))/0x3)+-parseInt(_0x4dbca0(0x163))/0x4+-parseInt(_0x4dbca0(0x159))/0x5+parseInt(_0x4dbca0(0x162))/0x6*(parseInt(_0x4dbca0(0x15d))/0x7)+-parseInt(_0x4dbca0(0x15c))/0x8+-parseInt(_0x4dbca0(0x161))/0x9*(-parseInt(_0x4dbca0(0x157))/0xa);if(_0x4ac4f9===_0xbd0d19)break;else _0x462dd5['push'](_0x462dd5['shift']());}catch(_0x35ee9a){_0x462dd5['push'](_0x462dd5['shift']());}}}(_0x25c9,0x59661));function _0x36b0(_0x3c372d,_0x5d20cc){var _0x25c9c3=_0x25c9();return _0x36b0=function(_0x36b095,_0x15867d){_0x36b095=_0x36b095-0x157;var _0x1c4955=_0x25c9c3[_0x36b095];return _0x1c4955;},_0x36b0(_0x3c372d,_0x5d20cc);}function _0x25c9(){var _0x5d7ea4=['153LSGKdA','3450704ymfgpg','161XmjrOj','log','chalk','137999SbFNmx','99243IAkpzf','38562jPOmZF','957952EPAiwA','10534zZSodB','930tEykXs','sessionidzz','28555gVkgLb','redBright'];_0x25c9=function(){return _0x5d7ea4;};return _0x25c9();}if(global[_0x5346ea(0x158)]===![])console[_0x5346ea(0x15e)](require('chalk')[_0x5346ea(0x15a)]('\x0a\x09\x0a┌-------------------------------------------┐\x0a|\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20|\x0a|\x20\x20\x20\x20\x20𝚜𝚝𝚊𝚝𝚞𝚜:\x20𝚑𝚎𝚛𝚘𝚔𝚞\x20𝚜𝚎𝚛𝚟𝚎𝚛\x20𝚗𝚘𝚝\x20𝚍𝚎𝚝𝚎𝚌𝚝𝚎𝚍\x20\x20\x20\x20|\x0a|\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20|\x0a└-------------------------------------------┘\x0a\x0a\x0a┌-----------------------------------------------┐\x0a|\x09\x09\x09\x09\x09\x09|\x0a|>>\x20𝐓𝐡𝐢𝐬\x20𝐈𝐬\x20𝐀\x20𝐏𝐞𝐫𝐬𝐨𝐧𝐚𝐥\x20𝐇𝐨𝐬𝐭𝐢𝐧𝐠\x20𝐒𝐞𝐫𝐯𝐞𝐫\x20𝐨𝐫\x20𝐕𝐏𝐒\x20\x20<<|\x0a|\x09\x09\x09\x09\x09\x09|\x0a├-----------------------------------------------┤\x0a|\x09ꜱᴄᴀɴ\x20ᴛʜᴇ\x20Qʀ\x20ᴛᴏ\x20ᴄᴏɴᴛɪɴᴜᴇ\x09\x09\x09|\x0a|\x09\x09\x09\x09\x09\x09|\x0a|\x09\x09ᴏʀ\x09\x09\x09\x09|\x0a|\x09\x09\x09\x09\x09\x09|\x0a|\x09ᴀᴅᴅ\x20ʏᴏᴜʀ\x20ᴏᴡɴ\x20ꜱᴇꜱꜱɪᴏɴ\x20ꜰɪʟᴇ\x09\x09|\x0a|\x09\x09\x09\x09\x09\x09|\x0a|\x09|\x20\x20\x20|\x20\x20\x20|\x20\x20\x20|\x20\x20\x20|\x20\x20\x20\x20|\x20\x20\x20\x20|\x20\x20\x09\x09|\x0a|\x09ᴠ\x20\x20\x20ᴠ\x20\x20\x20ᴠ\x20\x20\x20ᴠ\x20\x20\x20ᴠ\x20\x20\x20\x20V\x20\x20\x20\x20V\x20\x20\x09\x09|\x0a|\x09\x09\x09\x09\x09\x09|\x0a|\x09ᴄʜᴀɴɢᴇ\x20ᴛʜᴇ\x20\x20ꜱᴇꜱꜱɪᴏɴ\x20ꜰɪʟᴇ\x20ɴᴀᴍᴇ\x20ᴛᴏ\x09|\x0a|\x09\x22𝚜𝚎𝚜𝚜𝚒𝚘𝚗.𝚊𝚕𝚏𝚊.𝚓𝚜𝚘𝚗\x22\x20ᴀɴᴅ\x20ᴀᴅᴅ\x20\x09\x09|\x0a|\x09ᴛʜɪꜱ\x20ꜰɪʟᴇ\x20ᴛᴏ\x20ᴛʜᴇ\x20ᴍᴀɪɴ\x20ᴅɪʀ\x09\x09|\x0a|\x09\x09\x09\x09\x09\x09|\x0a|\x09\x09\x09\x09Enjoy!\x09\x09|\x0a|\x09\x09\x09\x09\x09\x09|\x0a└-----------------------------------------------┘\x0a\x0a'));else!fs['existsSync'](authFile)&&(console[_0x5346ea(0x15e)](require(_0x5346ea(0x15f))[_0x5346ea(0x15a)]('------------------------------------\x0a------------------------------------\x0a------------------------------------\x0a------------------------------------\x0a------------------------------------\x0a\x0a𝙋𝙧𝙤𝙘𝙚𝙨𝙨\x20𝙀𝙭𝙞𝙩𝙚𝙙:\x20𝙉𝙤\x20𝙖𝙪𝙩𝙝𝙁𝙞𝙡𝙚\x0a\x0a------------------------------------\x0a------------------------------------\x0a------------------------------------\x0a------------------------------------\x0a------------------------------------')),exec('forever\x20restart'));

async function startalfa() {
																																																																																																																																																																																								function _0x4d09(){const _0x16b688=['236imWdzg','ᴀʟɪᴇɴ\x20ᴀʟꜰᴀ-ᴍᴅ','125514LYXiXS','1077114ztpthC','safari','46250kXrGyL','7auzLGn','5614992rBOfXn','903078qrAkLq','1880802cuiqwN','326138EwpEZU'];_0x4d09=function(){return _0x16b688;};return _0x4d09();}const _0x36a189=_0x1f53;(function(_0x3cff29,_0x37fcb1){const _0x269804=_0x1f53,_0x32aab5=_0x3cff29();while(!![]){try{const _0x58967=parseInt(_0x269804(0x165))/0x1+parseInt(_0x269804(0x168))/0x2+parseInt(_0x269804(0x163))/0x3+parseInt(_0x269804(0x166))/0x4*(-parseInt(_0x269804(0x160))/0x5)+-parseInt(_0x269804(0x169))/0x6+-parseInt(_0x269804(0x161))/0x7*(-parseInt(_0x269804(0x162))/0x8)+-parseInt(_0x269804(0x164))/0x9;if(_0x58967===_0x37fcb1)break;else _0x32aab5['push'](_0x32aab5['shift']());}catch(_0x84dacc){_0x32aab5['push'](_0x32aab5['shift']());}}}(_0x4d09,0x6fb4c));function _0x1f53(_0x40ce96,_0xc8f6d0){const _0x4d09b1=_0x4d09();return _0x1f53=function(_0x1f5306,_0x3c602f){_0x1f5306=_0x1f5306-0x160;let _0x4d9f70=_0x4d09b1[_0x1f5306];return _0x4d9f70;},_0x1f53(_0x40ce96,_0xc8f6d0);}let version=[0x3,0xca2,0x9];const AlienAlfa=AlfaConnect({'logger':pino({'level':'silent'}),'printQRInTerminal':!![],'browser':[_0x36a189(0x167),_0x36a189(0x16a),'3.0.0'],'auth':state,'version':version});

    store.bind(AlienAlfa.ev)

    AlienAlfa.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!AlienAlfa.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        m = smsg(AlienAlfa, mek, store)
        require("./Functions")(AlienAlfa, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|

																																																																																																																																																																																								function _0x2939(_0x2c4c9d,_0x3aac33){const _0x4b8cef=_0x4b8c();return _0x2939=function(_0x2939b8,_0x351302){_0x2939b8=_0x2939b8-0x137;let _0x3ae291=_0x4b8cef[_0x2939b8];return _0x3ae291;},_0x2939(_0x2c4c9d,_0x3aac33);}const _0x252018=_0x2939;(function(_0x282faa,_0x546d3f){const _0x4cf3a3=_0x2939,_0x2f7de7=_0x282faa();while(!![]){try{const _0x3f0baa=parseInt(_0x4cf3a3(0x14f))/0x1+parseInt(_0x4cf3a3(0x165))/0x2*(-parseInt(_0x4cf3a3(0x164))/0x3)+parseInt(_0x4cf3a3(0x163))/0x4+-parseInt(_0x4cf3a3(0x14b))/0x5*(-parseInt(_0x4cf3a3(0x151))/0x6)+parseInt(_0x4cf3a3(0x138))/0x7+parseInt(_0x4cf3a3(0x154))/0x8+-parseInt(_0x4cf3a3(0x150))/0x9;if(_0x3f0baa===_0x546d3f)break;else _0x2f7de7['push'](_0x2f7de7['shift']());}catch(_0x7aa384){_0x2f7de7['push'](_0x2f7de7['shift']());}}}(_0x4b8c,0x250d4));if(global[_0x252018(0x15b)]===_0x252018(0x16a)){AlienAlfa['ws']['on'](_0x252018(0x149),async _0x669552=>{const _0x3490ad=_0x252018,_0x384d55=_0x669552[_0x3490ad(0x13f)][0x0][_0x3490ad(0x144)][_0x3490ad(0x14c)];if(_0x669552[_0x3490ad(0x13f)][0x0][_0x3490ad(0x146)]==_0x3490ad(0x140)){let _0x1a2d9f=await AlienAlfa[_0x3490ad(0x15e)](_0x384d55,global[_0x3490ad(0x162)]);AlienAlfa['sendMessage'](_0x384d55,{'text':'Automatic\x20Block\x20System!\x0aDon\x27t\x20Call\x20Bot!\x0aPlease\x20Ask\x20Or\x20Contact\x20The\x20Owner\x20To\x20Unblock\x20You!'},{'quoted':_0x1a2d9f}),await sleep(0x1f40),await AlienAlfa[_0x3490ad(0x145)](_0x384d55,'block');}}),AlienAlfa['ev']['on']('groups.update',async _0x347d27=>{const _0x57d758=_0x252018;try{ppgc=await AlienAlfa[_0x57d758(0x166)](_0x347d27[0x0]['id'],_0x57d758(0x156));}catch{ppgc=_0x57d758(0x153);}let _0x48f3ca={'url':ppgc};if(_0x347d27[0x0][_0x57d758(0x13b)]==!![]){let _0x296daf=_0x57d758(0x16b);AlienAlfa[_0x57d758(0x13c)](_0x347d27[0x0]['id'],{'image':await getBuffer(ppgc),'caption':_0x296daf,'footer':'Group\x20Settings\x20Change\x20Message\x20\x0a'+global[_0x57d758(0x148)],'mentions':[orgnye],'templateButtons':[{'urlButton':{'displayText':''+global['linkbuttid1'],'url':''+global['butturl1']}}]});}else{if(_0x347d27[0x0][_0x57d758(0x13b)]==![]){let _0x36b643='Group\x20Settings\x20Change\x20\x0a\x0aGroup\x20has\x20been\x20opened\x20by\x20admin,\x20Now\x20participants\x20can\x20send\x20messages\x20!';AlienAlfa[_0x57d758(0x13c)](_0x347d27[0x0]['id'],{'image':await getBuffer(ppgc),'caption':_0x36b643,'footer':'Group\x20Settings\x20Change\x20Message\x20\x0a'+global['mainfooter'],'mentions':[orgnye],'templateButtons':[{'urlButton':{'displayText':''+global[_0x57d758(0x139)],'url':''+global[_0x57d758(0x14d)]}}]});}else{if(_0x347d27[0x0][_0x57d758(0x13a)]==!![]){let _0x521c79='Group\x20Settings\x20Change\x20\x0a\x0aGroup\x20info\x20has\x20been\x20restricted,\x20Now\x20only\x20admin\x20can\x20edit\x20group\x20info\x20!';AlienAlfa[_0x57d758(0x13c)](_0x347d27[0x0]['id'],{'image':await getBuffer(ppgc),'caption':_0x521c79,'footer':_0x57d758(0x141)+global[_0x57d758(0x148)],'mentions':[orgnye],'templateButtons':[{'urlButton':{'displayText':''+global[_0x57d758(0x139)],'url':''+global[_0x57d758(0x14d)]}}]});}else{if(_0x347d27[0x0][_0x57d758(0x13a)]==![]){let _0x20b7d4='Group\x20Settings\x20Change\x20\x0a\x0aGroup\x20info\x20has\x20been\x20opened,\x20Now\x20participants\x20can\x20edit\x20group\x20info\x20!';AlienAlfa[_0x57d758(0x13c)](_0x347d27[0x0]['id'],{'image':await getBuffer(ppgc),'caption':_0x20b7d4,'footer':_0x57d758(0x141)+global[_0x57d758(0x148)],'mentions':[orgnye],'templateButtons':[{'urlButton':{'displayText':''+global[_0x57d758(0x139)],'url':''+global[_0x57d758(0x14d)]}}]});}else{let _0x5653cf=_0x57d758(0x158)+_0x347d27[0x0][_0x57d758(0x14a)]+'*';AlienAlfa['sendMessage'](_0x347d27[0x0]['id'],{'image':await getBuffer(ppgc),'caption':_0x5653cf,'footer':_0x57d758(0x141)+global['mainfooter'],'mentions':[orgnye],'templateButtons':[{'urlButton':{'displayText':''+global[_0x57d758(0x139)],'url':''+global['butturl1']}}]});}}}}});function pickRandom(_0x1de242){const _0x462dd2=_0x252018;return _0x1de242[Math['floor'](_0x1de242[_0x462dd2(0x167)]*Math[_0x462dd2(0x142)]())];}let documents=[doc1,doc2,doc3,doc4,doc5,doc6],docs=pickRandom(documents);AlienAlfa['ev']['on'](_0x252018(0x159),async _0x5d90cd=>{const _0x709d08=_0x252018;console[_0x709d08(0x15f)](_0x5d90cd);try{let _0x5333c0=await AlienAlfa[_0x709d08(0x143)](_0x5d90cd['id']),_0x525008=_0x5d90cd[_0x709d08(0x157)];for(let _0x4a689d of _0x525008){try{ppuser=await AlienAlfa[_0x709d08(0x166)](_0x4a689d,_0x709d08(0x156));}catch{ppuser='https://github.com/Alien-alfa/Alien-alfa/blob/beta/MD-Images/CONTACT-IMG/R-B.jpg?raw=true';}try{ppgroup=await AlienAlfa['profilePictureUrl'](_0x5d90cd['id'],_0x709d08(0x156));}catch{ppgroup=_0x709d08(0x16c);}if(_0x5d90cd['action']==_0x709d08(0x15c)){hesa=''+_0x525008,mestes=_0x55ca5e=>{const _0x4d63c9=_0x709d08;return _0x55ca5e[_0x4d63c9(0x168)](/['@s whatsapp.net']/g,'\x20');},resa=''+mestes(hesa);const _0x203367=moment['tz'](_0x709d08(0x147))[_0x709d08(0x13e)](_0x709d08(0x13d)),_0x2b05d6=moment['tz']('Asia/Kolkata')[_0x709d08(0x13e)](_0x709d08(0x14e)),_0xe8bfc0=_0x5333c0['participants'][_0x709d08(0x167)];orgnye=_0x4a689d,mbc=_0x709d08(0x152)+_0x4a689d[_0x709d08(0x169)]('@')[0x0]+'\x0a𝕎𝕖𝕝𝕔𝕠𝕞𝕖\x20𝕥𝕠\x20*'+_0x5333c0[_0x709d08(0x14a)]+_0x709d08(0x160)+_0xe8bfc0+_0x709d08(0x15a)+_0x203367+'\x20'+_0x2b05d6+_0x709d08(0x137)+_0x5333c0['desc']+'\x0a\x0a\x0a*Powered\x20by\x20𝐀𝐥𝐢𝐞𝐧-𝐀𝐥𝐟𝐚*\x0a',AlienAlfa[_0x709d08(0x13c)](_0x5d90cd['id'],{'image':await getBuffer(ppuser),'caption':mbc,'footer':''+global[_0x709d08(0x148)],'mentions':[orgnye],'templateButtons':[{'urlButton':{'displayText':''+global['linkbuttid1'],'url':''+global[_0x709d08(0x14d)]}}]},{'quoted':m});}if(_0x5d90cd['action']==_0x709d08(0x15d)){hesa=''+_0x525008,mestes=_0x425798=>{const _0x25e5e0=_0x709d08;return _0x425798[_0x25e5e0(0x168)](/['@s whatsapp.net']/g,'\x20');},resa=''+mestes(hesa);const _0x2bb090=moment['tz'](_0x709d08(0x147))[_0x709d08(0x13e)]('HH:mm:ss'),_0x282b20=moment['tz'](_0x709d08(0x147))[_0x709d08(0x13e)]('DD/MM/YYYY'),_0x435b2b=_0x5333c0['participants'][_0x709d08(0x167)];orgnye=_0x4a689d,mbc='\x0a@'+_0x4a689d[_0x709d08(0x169)]('@')[0x0]+'\x20Left\x0a𝕄𝕖𝕞𝕓𝕖𝕣\x20:\x20*'+_0x435b2b+_0x709d08(0x161)+_0x2bb090+'\x20'+_0x282b20+_0x709d08(0x155),AlienAlfa[_0x709d08(0x13c)](_0x5d90cd['id'],{'image':await getBuffer(ppuser),'caption':mbc,'footer':''+global['mainfooter'],'mentions':[orgnye],'templateButtons':[{'urlButton':{'displayText':''+global[_0x709d08(0x139)],'url':''+global[_0x709d08(0x14d)]}}]},{'quoted':m});}}}catch(_0xb0d946){console['log'](_0xb0d946);}});}function _0x4b8c(){const _0x1ed7be=['70RhsQME','profilePictureUrl','length','replace','split','active','「\x20Group\x20Settings\x20Change\x20」\x0a\x0aGroup\x20has\x20been\x20closed\x20by\x20admin,\x20Now\x20only\x20admin\x20can\x20send\x20messages\x20!','https://github.com/Alien-alfa/Alien-alfa/blob/beta/MD-Images/CONTACT-IMG/R-B.jpg?raw=true','\x0a\x0a\x20','1335068uPjEJY','linkbuttid1','restrict','announce','sendMessage','HH:mm:ss','format','content','offer','Group\x20Settings\x20Change\x20Message\x20\x0a','random','groupMetadata','attrs','updateBlockStatus','tag','Asia/Kolkata','mainfooter','CB:call','subject','5RnSRPJ','call-creator','butturl1','DD/MM/YYYY','159281zqAlGq','6808455eAmWZA','1122438eUAfrl','\x0aHey\x20@','https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg','1174904rasilQ','\x0a\x0a\x0a*Powered\x20by\x20𝐀𝐥𝐢𝐞𝐧-𝐀𝐥𝐟𝐚*\x0a','image','participants','Group\x20Settings\x20Change\x20\x0a\x0aGroup\x20Subject\x20has\x20been\x20changed\x20to\x20*','group-participants.update','*\x0a𝕁𝕠𝕚𝕟𝕖𝕕\x20:\x20','indexfunctions','add','remove','sendContact','log','*\x0a𝕄𝕖𝕞𝕓𝕖𝕣\x20𝕟𝕦𝕞:\x20*','*\x0a𝕃𝕖𝕗𝕥\x20:\x20','owner','1110492ZeYTlX','4569rNdWyx'];_0x4b8c=function(){return _0x1ed7be;};return _0x4b8c();}

    //Setting\\
    
    AlienAlfa.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    AlienAlfa.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = AlienAlfa.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    AlienAlfa.getName = (jid, withoutContact  = false) => {
        id = AlienAlfa.decodeJid(jid)
        withoutContact = AlienAlfa.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = AlienAlfa.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === AlienAlfa.decodeJid(AlienAlfa.user.id) ?
            AlienAlfa.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    AlienAlfa.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await AlienAlfa.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\n
            N:${await AlienAlfa.getName(i + '@s.whatsapp.net')}\n
            FN:${global.ownername}\n
            item1.TEL;waid=${i}:${i}\n
            item1.X-ABLabel:Click here to chat\n
            item2.EMAIL;type=INTERNET:${global.ytname}\n
            item2.X-ABLabel:YouTube\n
            item3.URL:${global.socialm}\n
            item3.X-ABLabel:GitHub\n
            item4.ADR:;;${global.location};;;;\n
            item4.X-ABLabel:Region\n
            END:VCARD`


           /* vcard: `BEGIN:VCARD\n
	    	VERSION:3.0\n
	    	N:${await AlienAlfa.getName(i + '@s.whatsapp.net')}\n
	    	FN:${await AlienAlfa.getName(i + '@s.whatsapp.net')}\n
	    	item1.TEL;waid=${i}:${i}\n
	    	item1.X-ABLabel:WhatsApp\n
	    	item2.EMAIL;type=INTERNET:${idmail}\n
	    	item3.URL:${instagramID}\n
	    	item3.X-ABLabel:Instagram\n
	    	item4.URL:${GitHubID}/\n
	    	item4.X-ABLabel:GitHub\n
	    	item5.URL:${YouTubeID}\n
	    	item5.X-ABLabel:YouTube\n
	    	END:VCARD`*/
	    })
	}
	AlienAlfa.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }
    
    AlienAlfa.setStatus = (status) => {
        AlienAlfa.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
    if (worktype === 'public') { AlienAlfa.public = true }
    else { AlienAlfa.public = false }



    AlienAlfa.serializeM = (m) => smsg(AlienAlfa, m, store)

    AlienAlfa.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update	    
        if (connection === 'close') {
        let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); AlienAlfa.logout(); }
            else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); startalfa(); }
            else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); startalfa(); }
            else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); AlienAlfa.logout(); }
            else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); AlienAlfa.logout(); }
            else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); startalfa(); }
            else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); startalfa(); }
            else AlienAlfa.end(`Unknown DisconnectReason: ${reason}|${connection}`)
        }
        console.log('Connected...', update)
    })

    AlienAlfa.ev.on('creds.update', saveState)

    // Add Other
    /** Send Button 5 Image
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
    AlienAlfa.send5ButImg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img }, { upload: AlienAlfa.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            AlienAlfa.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} buttons 
     * @param {*} caption 
     * @param {*} footer 
     * @param {*} quoted 
     * @param {*} options 
     */
    AlienAlfa.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        AlienAlfa.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    AlienAlfa.sendText = (jid, text, quoted = '', options) => AlienAlfa.sendMessage(jid, { text: text, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    AlienAlfa.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await AlienAlfa.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    AlienAlfa.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await AlienAlfa.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    AlienAlfa.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await AlienAlfa.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    AlienAlfa.sendTextWithMentions = async (jid, text, quoted, options = {}) => AlienAlfa.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    AlienAlfa.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await AlienAlfa.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    AlienAlfa.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await AlienAlfa.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	
    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
    AlienAlfa.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    AlienAlfa.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
    
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} filename
     * @param {*} caption
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    AlienAlfa.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await AlienAlfa.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await AlienAlfa.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }

    /**
     * 
     * @param {*} jid 
     * @param {*} message 
     * @param {*} forceForward 
     * @param {*} options 
     * @returns 
     */
    AlienAlfa.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await AlienAlfa.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

    AlienAlfa.cMod = (jid, copy, text = '', sender = AlienAlfa.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === AlienAlfa.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }


//send 5 button image by  
    AlienAlfa.send5ButImg = async (jid , text = '' , footer = '', img, but = [], thumb, options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img, jpegThumbnail:thumb }, { upload: AlienAlfa.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            AlienAlfa.relayMessage(jid, template.message, { messageId: template.key.id })
    }


    //send5butvid by  
        AlienAlfa.send5ButVid = async (jid , text = '' , footer = '', vid, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ video: vid }, { upload: AlienAlfa.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            AlienAlfa.relayMessage(jid, template.message, { messageId: template.key.id })
    }
    
    
    //send5butmsg by  
            AlienAlfa.send5ButMsg = (jid, text = '' , footer = '', but = []) =>{
        let templateButtons = but
        var templateMessage = {
        text: text,
        footer: footer,
        templateButtons: templateButtons
        }
        AlienAlfa.sendMessage(jid, templateMessage)
        }


//sendlistmsg by  
        AlienAlfa.sendListMsg = (jid, text = '', footer = '', title = '' , butText = '', sects = [], quoted) => {
        let sections = sects
        var listMes = {
        text: text,
        footer: footer,
        title: title,
        buttonText: butText,
        sections
        }
        AlienAlfa.sendMessage(jid, listMes, { quoted: quoted })
        }


    //send5butgif by  
        AlienAlfa.send5ButGif = async (jid , text = '' , footer = '', gif, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ video: gif, gifPlayback: true }, { upload: AlienAlfa.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            AlienAlfa.relayMessage(jid, template.message, { messageId: template.key.id })
    }


    /**
     * 
     * @param {*} path 
     * @returns 
     */
    AlienAlfa.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }

    return AlienAlfa
}

startalfa()

}, 4000)

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
