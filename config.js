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

//𝘼𝙇𝙄𝙀𝙉 𝘼𝙇𝙁𝘼-𝙈𝘿-𝘽𝙀𝙏𝘼 𝙄𝙄  

const fs = require('fs')
const chalk = require('chalk')
			  																																																																																															                                                      	const _0x138100=_0x2ef9;(function(_0x11971a,_0x460754){const _0x419220=_0x2ef9,_0x594e91=_0x11971a();while(!![]){try{const _0x46f0c8=-parseInt(_0x419220(0x1b4))/0x1*(parseInt(_0x419220(0x1b1))/0x2)+parseInt(_0x419220(0x1a7))/0x3+parseInt(_0x419220(0x1ae))/0x4*(parseInt(_0x419220(0x1ba))/0x5)+parseInt(_0x419220(0x1a6))/0x6*(parseInt(_0x419220(0x1b9))/0x7)+-parseInt(_0x419220(0x1aa))/0x8*(-parseInt(_0x419220(0x1bb))/0x9)+parseInt(_0x419220(0x1ad))/0xa+-parseInt(_0x419220(0x1a4))/0xb*(parseInt(_0x419220(0x1b7))/0xc);if(_0x46f0c8===_0x460754)break;else _0x594e91['push'](_0x594e91['shift']());}catch(_0x32eb15){_0x594e91['push'](_0x594e91['shift']());}}}(_0x286d,0x1aaae));function _0x286d(){const _0x2089ff=['SERVER','108iDsEXg','sessionidzz','581OZrLVM','142895Vtvtsc','18rHyPnx','BETA\x202.1.0','env','315513omPOfr','SessName','13182FqOGtC','153570ZxdVFx','devNumz','SESSION_ID','168160yXSXYQ','HEROKU_APP_NAME','Local\x20Host','1303410lFUlhr','12nMMtpB','gversion','herokuapp','248564sBtWID','isHeroku','Local','1vLEpWL','bodong'];_0x286d=function(){return _0x2089ff;};return _0x286d();}const {smsg,formatp,tanggal,formatDate,getTime,isUrl,sleep,clockString,runtime,fetchJson,getBuffer,jsonformat,format,parseMention,getRandom}=require('./lib/myfunc');function _0x2ef9(_0x1c4eaf,_0x375c67){const _0x286dd6=_0x286d();return _0x2ef9=function(_0x2ef9c6,_0x16d127){_0x2ef9c6=_0x2ef9c6-0x1a2;let _0x5e257f=_0x286dd6[_0x2ef9c6];return _0x5e257f;},_0x2ef9(_0x1c4eaf,_0x375c67);}global[_0x138100(0x1b2)]=process[_0x138100(0x1a3)][_0x138100(0x1b6)]===undefined?_0x138100(0x1b3):process[_0x138100(0x1a3)][_0x138100(0x1b6)];if(isHeroku===_0x138100(0x1b3))yisHeroku=![];else yisHeroku=!![];if(yisHeroku===![])global[_0x138100(0x1b5)]='./lib/alienalfa.js';global[_0x138100(0x1b8)]=process['env'][_0x138100(0x1a9)]===undefined?![]:process[_0x138100(0x1a3)][_0x138100(0x1a9)],global[_0x138100(0x1af)]=_0x138100(0x1a2),global[_0x138100(0x1b0)]=process[_0x138100(0x1a3)][_0x138100(0x1ab)]===undefined?_0x138100(0x1ac):process[_0x138100(0x1a3)][_0x138100(0x1ab)],global[_0x138100(0x1a5)]='session.alfa.json',global[_0x138100(0x1a8)]=['447405935355','919383400679'];
if (yisHeroku === true ) {
                         /* EDIT THE BELOW VALUES TO MAKE IT YOUR OWN */ 																																																																																																			var _0x3e9546=_0x14cf;(function(_0x4d7d56,_0xbe5a27){var _0x424e2f=_0x14cf,_0x1e27bc=_0x4d7d56();while(!![]){try{var _0x346eef=parseInt(_0x424e2f(0x147))/0x1*(-parseInt(_0x424e2f(0x11a))/0x2)+parseInt(_0x424e2f(0xfc))/0x3+parseInt(_0x424e2f(0x10c))/0x4+-parseInt(_0x424e2f(0xff))/0x5*(parseInt(_0x424e2f(0x103))/0x6)+-parseInt(_0x424e2f(0xc9))/0x7+parseInt(_0x424e2f(0xf8))/0x8*(-parseInt(_0x424e2f(0x122))/0x9)+parseInt(_0x424e2f(0x12a))/0xa;if(_0x346eef===_0xbe5a27)break;else _0x1e27bc['push'](_0x1e27bc['shift']());}catch(_0x14ed29){_0x1e27bc['push'](_0x1e27bc['shift']());}}}(_0xe54f,0xdaa8a));let bark=_0x3e9546(0x127),ragk=_0x3e9546(0xdc);if(yisHeroku===!![])global[_0x3e9546(0xd9)]=_0x3e9546(0x14c)+ragk+bark;global[_0x3e9546(0x14a)]=_0x3e9546(0x14e),global[_0x3e9546(0xee)]=process['env']['LISTICON']===undefined?'✩':process[_0x3e9546(0x136)][_0x3e9546(0xeb)],global['wm']=process[_0x3e9546(0x136)][_0x3e9546(0xbe)]===undefined?'ＡＬＩＥＮ\x20ＡＬＦＡ':process[_0x3e9546(0x136)][_0x3e9546(0xbe)],global[_0x3e9546(0xe7)]=process[_0x3e9546(0x136)]['MAIL']===undefined?_0x3e9546(0xd8):process[_0x3e9546(0x136)][_0x3e9546(0x144)],global[_0x3e9546(0xc2)]=process['env'][_0x3e9546(0xed)]===undefined?_0x3e9546(0x156):process[_0x3e9546(0x136)][_0x3e9546(0xed)],global[_0x3e9546(0x12d)]=process['env'][_0x3e9546(0x135)]===undefined?_0x3e9546(0xd6):process[_0x3e9546(0x136)][_0x3e9546(0x135)],global['insta']=process[_0x3e9546(0x136)]['INSTAGRAM']===undefined?'https://www.instagram.com/alienalfa/':process[_0x3e9546(0x136)][_0x3e9546(0x126)],global[_0x3e9546(0x112)]=process[_0x3e9546(0x136)][_0x3e9546(0xf7)]===undefined?_0x3e9546(0x14e):process['env'][_0x3e9546(0xf7)],global[_0x3e9546(0x12e)]=process[_0x3e9546(0x136)][_0x3e9546(0x158)]===undefined?_0x3e9546(0x14e):process[_0x3e9546(0x136)][_0x3e9546(0x158)],global[_0x3e9546(0x14f)]=process[_0x3e9546(0x136)][_0x3e9546(0xe6)]===undefined?'':process[_0x3e9546(0x136)]['HEROKU_API_KEY'],global[_0x3e9546(0xec)]=process[_0x3e9546(0x136)][_0x3e9546(0x153)]===undefined?'6':process[_0x3e9546(0x136)]['FONT'],global['language_alfa']=process['env'][_0x3e9546(0x15c)]===undefined?'en':process[_0x3e9546(0x136)][_0x3e9546(0x15c)],global[_0x3e9546(0x124)]=process[_0x3e9546(0x136)][_0x3e9546(0x137)]===undefined?![]:process[_0x3e9546(0x136)][_0x3e9546(0x137)],global['alivemess']=process['env'][_0x3e9546(0xf9)]===undefined?_0x3e9546(0xcf):process[_0x3e9546(0x136)][_0x3e9546(0xf9)],global[_0x3e9546(0x12f)]=process['env'][_0x3e9546(0x119)]===undefined?![]:process[_0x3e9546(0x136)]['ALIVE_IMAGE'],global[_0x3e9546(0xea)]=process[_0x3e9546(0x136)][_0x3e9546(0x108)];let ownr=process[_0x3e9546(0x136)][_0x3e9546(0xda)]===undefined?_0x3e9546(0xdf):process['env']['OWNER'],ownrnum=ownr[_0x3e9546(0x14b)]()[_0x3e9546(0x143)](','),sudo=process[_0x3e9546(0x136)]['SUDO']===undefined?_0x3e9546(0xdf):process[_0x3e9546(0x136)]['SUDO'],sudonum=sudo[_0x3e9546(0x14b)]()[_0x3e9546(0x143)](','),devu=_0x3e9546(0x152);global['devNum']=devu[_0x3e9546(0x14b)]()[_0x3e9546(0x143)](',');let stickker=process[_0x3e9546(0x136)][_0x3e9546(0x100)]===undefined?'🐥\x20𝘼𝙇𝙄𝙀𝙉\x20𝘼𝙇𝙁𝘼-𝙈𝘿\x20\x0a😻\x20T\x0a🥰\x20E\x0a🤩\x0a🥹\x20A\x0a🥳\x20M\x0a😜\x20O\x0a😏\x0a😘\x20C\x0a🤪\x20A\x0a😳\x20R\x0a🫠\x20I\x0a🫡\x20N\x0a🥺\x20O\x0a,\x0a△\x20\x20\x20ᴀʟɪᴇɴᴀʟꜰᴀ\x0a▷\x20\x20\x20ꜱᴀꜰᴡᴀɴɢᴀɴᴢ\x0a◁\x20\x20\x20ᴀᴊᴍᴀʟ\x0a△\x20\x20\x20ɴᴇᴇʀᴀᴊ\x20\x0a▷\x20\x20\x20xᴇᴏɴ\x20':process['env']['STICKER_PACK'],stickkerr=stickker[_0x3e9546(0x14b)]()['split'](','),prem=process[_0x3e9546(0x136)][_0x3e9546(0x11f)]===undefined?'447405935355':process[_0x3e9546(0x136)][_0x3e9546(0x11f)],premiu=prem[_0x3e9546(0x14b)]()[_0x3e9546(0x143)](','),apik=[_0x3e9546(0x15e),_0x3e9546(0xd4),_0x3e9546(0x113),_0x3e9546(0xe5),'C927B48B97',_0x3e9546(0xca),_0x3e9546(0xd7),_0x3e9546(0x15a),_0x3e9546(0xc1),'419B9CD9DBE9'],api=apik[Math['floor'](Math['random']()*apik[_0x3e9546(0xd5)])];var apikeyset=process[_0x3e9546(0x136)]['ZENS_API']===undefined?''+api:process['env'][_0x3e9546(0x11c)];let worktypez=process[_0x3e9546(0x136)]['WORKTYPE']===undefined?'public':process[_0x3e9546(0x136)][_0x3e9546(0x138)],workres=worktypez[_0x3e9546(0x13b)]();workres===_0x3e9546(0x105)?global[_0x3e9546(0x104)]='public':global[_0x3e9546(0x104)]='private';let prosessmenuurl1=process[_0x3e9546(0x136)]['URLBUTTON1']===undefined?_0x3e9546(0x11d):process[_0x3e9546(0x136)][_0x3e9546(0x116)],menuurl1=prosessmenuurl1[_0x3e9546(0x14b)]()[_0x3e9546(0x143)](',');menuurl1[0x0]==='nill'?global['linkbuttid1']=_0x3e9546(0x157):global[_0x3e9546(0x118)]=menuurl1[0x0];menuurl1[0x1]===_0x3e9546(0x146)?global[_0x3e9546(0x10e)]=_0x3e9546(0x121):global[_0x3e9546(0x10e)]=menuurl1[0x1];function _0xe54f(){var _0x2c3a64=['OWNER_SOCIAL1','OWNER_SOCIAL2','logoz','err4rz','10F0975E30','HEROKU_API_KEY','mail','ʏᴏᴜᴛᴜʙᴇ','https://github.com/Alien-Alfa/WhatsAppBot-MD-BETA2','anticallmsg','LISTICON','menufont','YOUTUBE','listicon','themeemoji','LOGO_PIC','author','linkz','APIs','ntilink','premiumzz','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','NAME','8OpWfvE','ALIVE_MESS','ERROR_PIC','ALWAYS_ONLINE','2047272ZIxkMq','AUTO_READ','doc2','5500CuDRhL','STICKER_PACK','VIDEO_MENU_URL','ntilinkytch','3738loYlVq','worktype','public','doc1','thumz','ANTICALL_MSG','autoReadGc','autorep','available','6468276oHSgJf','APIKeys','butturl1','AUTO_TYPING','https://www.youtube.com/alienalfa','linkbuttid2','linkname','1544701A60','gcrevoke','WEBSITE','URLBUTTON1','THEME_EMOJI','linkbuttid1','ALIVE_IMAGE','627142atvkWo','menubuttonz','ZENS_API','nill,nill','nttoxic','PREMIUM','ntvirtex','https://www.instagram.com/alienalfa/','4094136QgyawW','ntilinkig','autodownloader','packname','INSTAGRAM','lib/alienalfa.js','butturl2','doc5','9107560wTTidt','YT:\x20ALIENALFA','ntilinktg','github','mainfooter','aliveimage','BOTNAME','ANTI_TAG','doc6','doc3','ICON','GITHUB','env','AUTO_DOWNLOADER','WORKTYPE','premium','ytname','toLowerCase','vidmenuz','AUTO_READ_GROUP','autoRecord','doc4','vcardowner','https://github.com/Alien-alfa/Alien-alfa/blob/beta/Alfa.jpg?raw=true','websitex','split','MAIL','ownertag','nill','3gUixBn','GitHub:\x20DGXeon','THUMBNAIL_PIC','devname','toString','../../','application/vnd.openxmlformats-officedocument.presentationml.presentation','𝘼𝙇𝙄𝙀𝙉\x20𝘼𝙇𝙁𝘼','herokuapi','THUMB_PIC','application/vnd.android.package-archive','447405935355,919383400679','FONT','location','owner','https://youtube.com/c/alienalfa','ɪɴꜱᴛᴀɢʀᴀᴍ','FOOTER','PREFIX','0C60476A8533','https://tenor.com/bC4cO.gif','LANGUAGE','OWNER_PLACE','5ce9b2c90a','prefixx','application/zip','WATERMARK','application/vnd.openxmlformats-officedocument.wordprocessingml.document','defmenubutzz','4F7107108B','youtube','OWNER_VIEW_NUMBER','REACT_EMOJI','AUTO_READ_PM','wlcm','https://www.GITHUB.com/alien-alfa','autoreadpmngc','1635942KdZCgk','7C93A5956E','447405935355','URLBUTTON2','reactmoji','autoTyping','null','false','antitags','botname','THEME_URL','5CE9B2C90A','length','https://github.com/Alien-alfa/','F5DBD2C1CF','AlienAlfa.YT@gmail.com','bodong','OWNER','UK,\x20London,\x20hertfordshire','root/AlienAlfa/','MENU_BUTTON','TAG_NUMBER','0,447405935355','socialm'];_0xe54f=function(){return _0x2c3a64;};return _0xe54f();}let prosessmenuurl2=process['env'][_0x3e9546(0xcc)]===undefined?_0x3e9546(0x11d):process['env'][_0x3e9546(0xcc)],menuurl2=prosessmenuurl2[_0x3e9546(0x14b)]()[_0x3e9546(0x143)](',');menuurl2[0x0]==='nill'?global[_0x3e9546(0x111)]=_0x3e9546(0xe8):global[_0x3e9546(0x111)]=menuurl2[0x0];menuurl2[0x1]===_0x3e9546(0x146)?global[_0x3e9546(0x128)]=_0x3e9546(0x156):global[_0x3e9546(0x128)]=menuurl2[0x1];let endifix=process['env']['PREFIX']===undefined?_0x3e9546(0xd0):process[_0x3e9546(0x136)][_0x3e9546(0x159)];endifix===_0x3e9546(0xd0)?global[_0x3e9546(0xbc)]='':global[_0x3e9546(0xbc)]=endifix;var autoTypingzz=process['env'][_0x3e9546(0x10f)]===undefined?![]:process[_0x3e9546(0x136)][_0x3e9546(0x10f)],autoreadpmngczz=process[_0x3e9546(0x136)][_0x3e9546(0xc5)]===undefined?![]:process[_0x3e9546(0x136)][_0x3e9546(0xfd)],autoReadGczz=process[_0x3e9546(0x136)]['AUTO_READ_GROUP']===undefined?![]:process['env'][_0x3e9546(0x13d)],autoRecordzz=process['env']['AUTO_RECORD']===undefined?![]:process[_0x3e9546(0x136)]['AUTO_RECORD'],availablezz=process['env'][_0x3e9546(0xfb)]===undefined?!![]:process['env'][_0x3e9546(0xfb)],vidmenuzz=process['env'][_0x3e9546(0x101)]===undefined?_0x3e9546(0x15b):process[_0x3e9546(0x136)][_0x3e9546(0x101)],ownernamezz=process[_0x3e9546(0x136)][_0x3e9546(0xc3)]===undefined?'𝘼𝙇𝙄𝙀𝙉\x20𝘼𝙇𝙁𝘼':process[_0x3e9546(0x136)][_0x3e9546(0xc3)],ytnamezz=process['env'][_0x3e9546(0xe1)]===undefined?_0x3e9546(0x12b):process[_0x3e9546(0x136)][_0x3e9546(0xe1)],socialmzz=process[_0x3e9546(0x136)][_0x3e9546(0xe2)]===undefined?_0x3e9546(0x148):process[_0x3e9546(0x136)][_0x3e9546(0xe2)],locationzz=process[_0x3e9546(0x136)][_0x3e9546(0x15d)]===undefined?_0x3e9546(0xdb):process[_0x3e9546(0x136)][_0x3e9546(0x15d)],ownertagzz=process['env'][_0x3e9546(0xde)]===undefined?_0x3e9546(0xcb):process['env']['TAG_NUMBER'],botnamezz=process[_0x3e9546(0x136)][_0x3e9546(0x130)]===undefined?'𝒜𝓊𝓇𝑜𝓇𝒶\x20𝐵𝒪𝒯-𝑀𝒟':process[_0x3e9546(0x136)][_0x3e9546(0x130)],linkzzz=process[_0x3e9546(0x136)]['THEME_URL']===undefined?_0x3e9546(0x110):process[_0x3e9546(0x136)][_0x3e9546(0xd3)],websitexzz=process[_0x3e9546(0x136)][_0x3e9546(0x115)]===undefined?_0x3e9546(0xc7):process['env'][_0x3e9546(0x115)],botscriptzz=_0x3e9546(0xe9),reactmojizz=process[_0x3e9546(0x136)]['REACT_EMOJI']===undefined?'😘':process['env'][_0x3e9546(0xc4)],themeemojizz=process[_0x3e9546(0x136)]['THEME_EMOJI']===undefined?'🐤':process[_0x3e9546(0x136)][_0x3e9546(0x117)],packnamezz=''+stickkerr[0x0],authorzz=''+stickkerr[0x1],thumzz=process[_0x3e9546(0x136)]['THUMB_PIC']===undefined?'https://github.com/Alien-alfa/Alien-alfa/blob/beta/Alfa.jpg?raw=true':process[_0x3e9546(0x136)][_0x3e9546(0x150)],log0zz=process[_0x3e9546(0x136)][_0x3e9546(0xf0)]===undefined?_0x3e9546(0x141):process[_0x3e9546(0x136)]['LOGO_PIC'],err4rzz=process[_0x3e9546(0x136)][_0x3e9546(0xfa)]===undefined?'https://github.com/Alien-alfa/Alien-alfa/blob/beta/Alfa.jpg?raw=true':process[_0x3e9546(0x136)]['ERROR_PIC'],thumbzz=process['env'][_0x3e9546(0x149)]===undefined?_0x3e9546(0x141):process[_0x3e9546(0x136)][_0x3e9546(0x149)];global[_0x3e9546(0xf5)]=''+premiu;function _0x14cf(_0x14a78d,_0x14f58f){var _0xe54f37=_0xe54f();return _0x14cf=function(_0x14cfa9,_0x5c73f){_0x14cfa9=_0x14cfa9-0xbc;var _0x443059=_0xe54f37[_0x14cfa9];return _0x443059;},_0x14cf(_0x14a78d,_0x14f58f);}var antitagszz=process[_0x3e9546(0x136)][_0x3e9546(0x131)]===undefined?!![]:process['env'][_0x3e9546(0x131)],spzz=process[_0x3e9546(0x136)][_0x3e9546(0x134)]===undefined?'✩':process[_0x3e9546(0x136)][_0x3e9546(0x134)];global[_0x3e9546(0x11b)]=process['env']['MENU_BUTTON']===undefined?global[_0x3e9546(0xc0)]:process[_0x3e9546(0x136)][_0x3e9546(0xdd)],global[_0x3e9546(0xf3)]={'zenz':'https://zenzapis.xyz'},global[_0x3e9546(0x10d)]={'https://zenzapis.xyz':apikeyset},global[_0x3e9546(0xce)]=autoTypingzz,global[_0x3e9546(0xc8)]=autoreadpmngczz,global[_0x3e9546(0x109)]=autoReadGczz,global[_0x3e9546(0x13e)]=autoRecordzz,global[_0x3e9546(0x10b)]=availablezz,global[_0x3e9546(0x13c)]=vidmenuzz,global[_0x3e9546(0x106)]=_0x3e9546(0x14d),global[_0x3e9546(0xfe)]=_0x3e9546(0xf6),global[_0x3e9546(0x133)]=_0x3e9546(0xbf),global[_0x3e9546(0x13f)]=_0x3e9546(0xbd),global[_0x3e9546(0x129)]='application/pdf',global[_0x3e9546(0x132)]=_0x3e9546(0x151),global[_0x3e9546(0x140)]=[_0x3e9546(0xcb)],global['ownername']=ownernamezz,global[_0x3e9546(0x13a)]=ytnamezz,global[_0x3e9546(0xe0)]=socialmzz,global[_0x3e9546(0x154)]=locationzz,global[_0x3e9546(0x155)]=ownrnum,global[_0x3e9546(0x145)]=ownertagzz,global[_0x3e9546(0xd2)]=botnamezz,global[_0x3e9546(0xf2)]=linkzzz,global[_0x3e9546(0x142)]=websitexzz,global['botscript']=botscriptzz,global[_0x3e9546(0xcd)]=reactmojizz,global[_0x3e9546(0xef)]=themeemojizz,global[_0x3e9546(0x125)]=packnamezz,global[_0x3e9546(0xf1)]=authorzz,global[_0x3e9546(0x107)]=thumzz,global[_0x3e9546(0xe3)]=log0zz,global[_0x3e9546(0xe4)]=err4rzz,global['thumbz']=thumbzz,global[_0x3e9546(0x139)]=premiu,global['ntilinkytvid']=[],global[_0x3e9546(0x102)]=[],global[_0x3e9546(0x123)]=[],global['ntilinkfb']=[],global[_0x3e9546(0x12c)]=[],global['ntilinktt']=[],global['ntilinktwt']=[],global['ntilinkall']=[],global['nticall']=[],global['ntwame']=[],global[_0x3e9546(0x11e)]=[],global['ntnsfw']=[],global[_0x3e9546(0x120)]=[],global['rkyt']=[],global[_0x3e9546(0xc6)]=[],global[_0x3e9546(0x114)]=[],global[_0x3e9546(0x10a)]=[],global[_0x3e9546(0xf4)]=[],global[_0x3e9546(0xd1)]=antitagszz,global['prefa']='!',global['sp']=spzz;}
else {
                         /* EDIT THE BELOW VALUES TO MAKE IT YOUR OWN */

//-----------------------------------------------------------------------------------------------------------------------------------------------------
let ownrnum =  ['0','447405935355'] // example: ['447405935435','911234567890','620987654321']
//-----------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------
let sudonum = ['0','447405935355'] // example: ['447405935435','911234567890','620987654321']
//-----------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------
let language_m = 'en'  // avalable: en: English; ml:Malayalam; gr:German; id:Indonesian; ar:Arabic 
//-----------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------
let stickker = '🐥 𝘼𝙇𝙄𝙀𝙉 𝘼𝙇𝙁𝘼-𝙈𝘿 \n😻 T\n🥰 E\n🤩\n🥹 A\n🥳 M\n😜 O\n😏\n😘 C\n🤪 A\n😳 R\n🫠 I\n🫡 N\n🥺 O\n,\n△   ᴀʟɪᴇɴᴀʟꜰᴀ\n▷   ꜱᴀꜰᴡᴀɴɢᴀɴᴢ\n◁   ᴀᴊᴍᴀʟ\n△   ɴᴇᴇʀᴀᴊ \n▷   xᴇᴏɴ '     // example: 'pack,author'
//-----------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------
let premiu = ['447405935355']
//----------------------------------------------------------------------------------------------------------------------------------------------------- 
//-----------------------------------------------------------------------------------------------------------------------------------------------------
let apikeyset = 'Your API Key'
//-----------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------
let worktypez =  'public' // public    private
//-----------------------------------------------------------------------------------------------------------------------------------------------------
//--------------------- MENU URL BUTTON 1 ----------------------------------------------------------------------------------------------------------
let MainUrlButton1 = 'nill,nill'
//--------------------------------------------------------------------------------------------------------------------------------------------------
//--------------------- MENU URL BUTTON 2 ----------------------------------------------------------------------------------------------------------
let MainUrlButton2 = 'nill,nill'   // example: 'YouTube,youtube.com/alienalfa'
//--------------------------------------------------------------------------------------------------------------------------------------------------
																																																																																																			const _0x465080=_0x27c3;(function(_0x3df86b,_0x2b5cd6){const _0x190d75=_0x27c3,_0x3a562e=_0x3df86b();while(!![]){try{const _0x2fc7da=-parseInt(_0x190d75(0x198))/0x1*(-parseInt(_0x190d75(0x191))/0x2)+parseInt(_0x190d75(0x19a))/0x3+-parseInt(_0x190d75(0x199))/0x4*(-parseInt(_0x190d75(0x19f))/0x5)+parseInt(_0x190d75(0x193))/0x6*(-parseInt(_0x190d75(0x1aa))/0x7)+-parseInt(_0x190d75(0x192))/0x8+parseInt(_0x190d75(0x1a3))/0x9*(-parseInt(_0x190d75(0x194))/0xa)+-parseInt(_0x190d75(0x190))/0xb*(-parseInt(_0x190d75(0x19d))/0xc);if(_0x2fc7da===_0x2b5cd6)break;else _0x3a562e['push'](_0x3a562e['shift']());}catch(_0x4d0850){_0x3a562e['push'](_0x3a562e['shift']());}}}(_0x1323,0x513e8));let workres=worktypez[_0x465080(0x1a8)]();function _0x1323(){const _0x38f3da=['230735EZdOsT','nill','public','linkbuttid2','9RXIZgf','linkbuttid1','command','split','All\x20Menu\x20','toLowerCase','ping','1743GJStyd','butturl2','143dTUlfp','665470jlscZO','4204704IfQHqC','8286KvYEre','1282530WpGGQT','worktype','butturl1','https://www.instagram.com/alienalfa/','1yLMLOB','44vbltqv','1456401xbgVXi','private','toString','4308EROBbw','allmenu'];_0x1323=function(){return _0x38f3da;};return _0x1323();}workres===_0x465080(0x1a1)?global[_0x465080(0x195)]='public':global[_0x465080(0x195)]=_0x465080(0x19b);let menuurl1=MainUrlButton1[_0x465080(0x19c)]()['split'](',');menuurl1[0x0]===_0x465080(0x1a0)?global[_0x465080(0x1a4)]='ɪɴꜱᴛᴀɢʀᴀᴍ':global[_0x465080(0x1a4)]=menuurl1[0x0];menuurl1[0x1]===_0x465080(0x1a0)?global['butturl1']=_0x465080(0x197):global[_0x465080(0x196)]=menuurl1[0x1];let menuurl2=MainUrlButton2[_0x465080(0x19c)]()[_0x465080(0x1a6)](',');menuurl2[0x0]===_0x465080(0x1a0)?global[_0x465080(0x1a2)]='ʏᴏᴜᴛᴜʙᴇ':global[_0x465080(0x1a2)]=menuurl2[0x0];function _0x27c3(_0x40fa32,_0x8eb2f5){const _0x13230a=_0x1323();return _0x27c3=function(_0x27c32c,_0x1b9e46){_0x27c32c=_0x27c32c-0x190;let _0x5e06df=_0x13230a[_0x27c32c];return _0x5e06df;},_0x27c3(_0x40fa32,_0x8eb2f5);}menuurl2[0x1]===_0x465080(0x1a0)?global[_0x465080(0x1ab)]='https://youtube.com/c/alienalfa':global[_0x465080(0x1ab)]=menuurl2[0x1];let stickkerr=stickker['toString']()[_0x465080(0x1a6)](',');global['defmenubutzz']=[{'urlButton':{'displayText':linkbuttid1,'url':butturl1}},{'urlButton':{'displayText':linkbuttid2,'url':butturl2}},{'quickReplyButton':{'displayText':_0x465080(0x1a7),'id':_0x465080(0x19e)}},{'quickReplyButton':{'displayText':'List\x20Menu\x20','id':_0x465080(0x1a5)}},{'quickReplyButton':{'displayText':'Ping\x20','id':_0x465080(0x1a9)}}];
//-----------------------------------------------------------------------------------------------------------------------------------------------------
var autoTypingzz =false //auto tying in gc (true to on, false to off)
var autoreadpmngczz = false //auto reading in gc and pm (true to on, false to off)
var autoReadGczz = false //auto reading in gc (true to on, false to off)
var autoRecordzz = false //auto recording (true to on, false to off)
var availablezz = true  //auto available (true to on, false to off)
//-----------------------------------------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------------------------------------
var vidmenuzz = 'https://tenor.com/bC4cO.gif' //gif and video menu
//-----------------------------------------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------------------------------------
var ownernamezz =  '𝘼𝙇𝙄𝙀𝙉 𝘼𝙇𝙁𝘼' //ur owner name
var ytnamezz = "YT: ALIENALFA"   //ur yt chanel name
var socialmzz = "GitHub: Alien-Alfa"  //ur github or insta name
var locationzz = "UK, London, hertfordshire"  //ur location
//-----------------------------------------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------------------------------------
var ownertagzz = '447405935355'   //ur tag number
var botnamezz = "𝒜𝓊𝓇𝑜𝓇𝒶 𝐵𝒪𝒯-𝑀𝒟" //ur bot name
var linkzzz = 'https://www.youtube.com/alienalfa' //your theme url which will be displayed on whatsapp
var websitexzz = 'https://www.GITHUB.com/alien-alfa'  //ur website to be displayed
var botscriptzz = 'https://github.com/Alien-Alfa/WhatsAppBot-MD-BETA2' //script link
var reactmojizz = "😘" //ur menu react emoji
var themeemojizz = "🐤" //ur theme emoji
var packnamezz = `${stickkerr[0]}` //ur sticker watermark packname
var authorzz = `${stickkerr[1]}` //ur sticker watermark author
//-----------------------------------------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------------------------------------
var thumzz = 'https://github.com/Alien-alfa/Alien-alfa/blob/beta/Alfa.jpg?raw=true' //ur thumb pic
var log0zz = 'https://github.com/Alien-alfa/Alien-alfa/blob/beta/Alfa.jpg?raw=true' //ur logo pic
var err4rzz = 'https://github.com/Alien-alfa/Alien-alfa/blob/beta/Alfa.jpg?raw=true' //ur error pic
var thumbzz = 'https://github.com/Alien-alfa/Alien-alfa/blob/beta/Alfa.jpg?raw=true' //ur thumb pic
//-----------------------------------------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------------------------------------
global.premiumzz = `${premiu}` //ur premium numbers
//-----------------------------------------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------------------------------------
var antitagszz = true 
var spzz = '✩'
global.menufont = '6'
//-----------------------------------------------------------------------------------------------------------------------------------------------------
//------------------MAIN MENU BUTTONS--------------------------------------------------------------------------------------------------------------------
/**
 * THIS IS AN EDITABLE TEMPLATE FOR MENU BUTTONS
 * 
 *    you can edit the values insise ` `
 * 
 *    displayText = the text shown on the menu urlButton
 *    url = in url buttons the url option is where you give the source url
 *    id = the command to be done when u use that button
 * 
 */


global.menubuttonz = [

{ urlButton: { displayText: `ɪɴꜱᴛᴀɢʀᴀᴍ`, url: 'https://www.instagram.com/alienalfa/' } },
{ urlButton: { displayText: `ʏᴏᴜᴛᴜʙᴇ`, url: 'https://youtube.com/c/alienalfa' } },
{ quickReplyButton: { displayText: `All Menu `, id: 'allmenu'} },
{ quickReplyButton: { displayText: `List Menu `, id: 'command'} },
{ quickReplyButton: { displayText: `Ping `, id: 'ping'} }
]
//-----------------------------------------------------------------------------------------------------------------------------------------------------
 
   
     
       
         
           

      
      
                              // DO NOT EDIT THE BELOW OPTIONS\\
      
      
      
      
       
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

global.APIKeys = {
	'https://zenzapis.xyz': apikeyset,
}


global.autoTyping = autoTypingzz //false                //auto tying in gc (true to on, false to off)
global.autoreadpmngc = autoreadpmngczz //false          //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = autoReadGczz //false                //auto reading in gc (true to on, false to off)
global.autoRecord = autoRecordzz //false                //auto recording (true to on, false to off)
global.available = availablezz //true                   //auto available (true to on, false to off)


global.vidmenuz = vidmenuzz //'https://tenor.com/bC4cO.gif' //gif and video menu


global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'


global.vcardowner = ['447405935355']                               //ur owner number
global.ownername = ownernamezz //'𝘼𝙇𝙄𝙀𝙉 𝘼𝙇𝙁𝘼'                      //ur owner name
global.ytname = ytnamezz //"YT: AlienAlfa"                         //ur yt chanel name
global.socialm = socialmzz //"GitHub: Alien-Alfa"                  //ur github or insta name
global.location = locationzz //"UK, London, hertfordshi"           //ur location

	
global.language_alfa = language_m //en                  //language prefs
global.owner = ownrnum  //['447405935355']                        //REAL OWNER/SUDO NUMBER
global.ownertag = ownertagzz //'447405935355'                     //ur tag number
global.botname = botnamezz //"𝒜𝓊𝓇𝑜𝓇𝒶 𝐵𝒪𝒯-𝑀𝒟"                   //ur bot name
global.linkz = linkzzz //'https://www.youtube.com/alienalfa'                                     //your theme url which will be displayed on whatsapp
global.websitex = websitexzz //'https://www.GITHUB.com/alien-alfa'                               //ur website to be displayed
global.botscript = botscriptzz //'https://github.com/Alien-Alfa/WhatsAppBot-MD-BETA2'            //script link
global.reactmoji = reactmojizz //"🐥"            //ur menu react emoji
global.themeemoji = themeemojizz //"🐤"            //ur theme emoji
global.packname = packnamezz  //'🐥 𝘼𝙇𝙄𝙀𝙉 𝘼𝙇𝙁𝘼-𝙈𝘿 \n😻 T\n🥰 E\n🤩\n🥹 A\n🥳 M\n😜 O\n😏\n😘 C\n🤪 A\n😳 R\n🫠 I\n🫡 N\n🥺 O\n'            //ur sticker watermark packname
global.author = authorzz  //'\n△   ᴀʟɪᴇɴᴀʟꜰᴀ\n▷   ꜱᴀꜰᴡᴀɴɢᴀɴᴢ\n◁   ᴀᴊᴍᴀʟ\n△   ɴᴇᴇʀᴀᴊ \n▷   xᴇᴏɴ '                                      //ur sticker watermark author


global.thumz = thumzz //'https://github.com/Alien-alfa/Alien-alfa/blob/beta/Alfa.jpg?raw=true'            //ur thumb pic  //OTHER THUMB
global.logoz = log0zz //'https://github.com/Alien-alfa/Alien-alfa/blob/beta/Alfa.jpg?raw=true'            //ur logo pic
global.err4rz = err4rzz //'https://github.com/Alien-alfa/Alien-alfa/blob/beta/Alfa.jpg?raw=true'          //ur error pic
global.thumbz = thumbzz //'https://github.com/Alien-alfa/Alien-alfa/blob/beta/Alfa.jpg?raw=true'          //ur thumb pic //MENU THUMB


global.premium = premiu //['447405935355']            //ur premium numbers
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.antitags = antitagszz            //true
global.prefa = '!'
global.sp = spzz //         '𒆜'


}
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner!',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: 'In process...',
    linkm: 'Where is the link?',
    error: 'Error!!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: 'You have been banned by the owner, if you want to be unbanned, chat owner.',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
    banChat: 'The bot was banned in this group, please contact the owner to unban'
}


global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
