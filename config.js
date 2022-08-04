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

//𝘼𝙇𝙄𝙀𝙉 𝘼𝙇𝙁𝘼-𝙈𝘿-𝘽𝙀𝙏𝘼 𝙄𝙄

const fs = require('fs')
const chalk = require('chalk')
																																																																																																			const _0xaa1858=_0x5edc;(function(_0x5882b8,_0x424555){const _0x24ea3a=_0x5edc,_0x49ffc2=_0x5882b8();while(!![]){try{const _0x50eb15=-parseInt(_0x24ea3a(0xb0))/0x1+-parseInt(_0x24ea3a(0xc0))/0x2+-parseInt(_0x24ea3a(0xb6))/0x3*(-parseInt(_0x24ea3a(0xbd))/0x4)+parseInt(_0x24ea3a(0xc3))/0x5+parseInt(_0x24ea3a(0xba))/0x6+parseInt(_0x24ea3a(0xb3))/0x7*(parseInt(_0x24ea3a(0xbb))/0x8)+-parseInt(_0x24ea3a(0xc2))/0x9;if(_0x50eb15===_0x424555)break;else _0x49ffc2['push'](_0x49ffc2['shift']());}catch(_0x5b1c79){_0x49ffc2['push'](_0x49ffc2['shift']());}}}(_0x16f7,0x1ce18));let bark='lib/alienalfa.js',ragk=_0xaa1858(0xb2);function _0x5edc(_0x3f15b1,_0x59697d){const _0x16f733=_0x16f7();return _0x5edc=function(_0x5edc2d,_0x339b95){_0x5edc2d=_0x5edc2d-0xad;let _0x398d7f=_0x16f733[_0x5edc2d];return _0x398d7f;},_0x5edc(_0x3f15b1,_0x59697d);}global[_0xaa1858(0xbf)]='../../'+ragk+bark,global[_0xaa1858(0xc4)]=process[_0xaa1858(0xbe)]['SERVER']===undefined?'Local':process[_0xaa1858(0xbe)]['SERVER'],global[_0xaa1858(0xbc)]=process['env'][_0xaa1858(0xb5)]===undefined?![]:process[_0xaa1858(0xbe)][_0xaa1858(0xb5)],global[_0xaa1858(0xb4)]=_0xaa1858(0xaf),global['herokuapp']=process[_0xaa1858(0xbe)][_0xaa1858(0xb9)]===undefined?_0xaa1858(0xad):process[_0xaa1858(0xbe)][_0xaa1858(0xb9)],global[_0xaa1858(0xae)]=_0xaa1858(0xb8),global[_0xaa1858(0xb7)]=[_0xaa1858(0xb1),_0xaa1858(0xc1)];function _0x16f7(){const _0x6e61eb=['186215jwFOkR','447405935355','root/AlienAlfa/','7fsdRex','gversion','SESSION_ID','561Lifjnm','devNumz','session.alfa.json','HEROKU_APP_NAME','973278eNObZM','314192WxlfzU','sessionidzz','3356KSeVOp','env','bodong','183810nVmPfy','919383400679','1539720muxgLJ','1045580xupkgZ','isHeroku','Local\x20Host','SessName','BETA\x202.0.1'];_0x16f7=function(){return _0x6e61eb;};return _0x16f7();}
if (isHeroku === 'Heroku' ) {
/* EDIT THE BELOW VALUES TO MAKE IT YOUR OWN */ 																																																																																																			var _0x2971a3=_0x5aaa;(function(_0x280983,_0x1c195b){var _0x7bc3e7=_0x5aaa,_0x52b630=_0x280983();while(!![]){try{var _0x360efe=parseInt(_0x7bc3e7(0x10b))/0x1*(-parseInt(_0x7bc3e7(0x181))/0x2)+-parseInt(_0x7bc3e7(0xf8))/0x3+parseInt(_0x7bc3e7(0x113))/0x4*(-parseInt(_0x7bc3e7(0x130))/0x5)+parseInt(_0x7bc3e7(0x121))/0x6*(parseInt(_0x7bc3e7(0x149))/0x7)+-parseInt(_0x7bc3e7(0x117))/0x8*(parseInt(_0x7bc3e7(0x11b))/0x9)+-parseInt(_0x7bc3e7(0x114))/0xa+parseInt(_0x7bc3e7(0x101))/0xb;if(_0x360efe===_0x1c195b)break;else _0x52b630['push'](_0x52b630['shift']());}catch(_0x442577){_0x52b630['push'](_0x52b630['shift']());}}}(_0x5aba,0x5e0f9),global[_0x2971a3(0x14d)]=_0x2971a3(0x139),global[_0x2971a3(0x109)]=process[_0x2971a3(0x103)][_0x2971a3(0xec)]===undefined?'✩':process[_0x2971a3(0x103)][_0x2971a3(0xec)],global['wm']=process['env'][_0x2971a3(0x14f)]===undefined?'ＡＬＩＥＮ\x20ＡＬＦＡ':process[_0x2971a3(0x103)][_0x2971a3(0x14f)],global[_0x2971a3(0x138)]=process[_0x2971a3(0x103)][_0x2971a3(0x13b)]===undefined?_0x2971a3(0x154):process[_0x2971a3(0x103)]['MAIL'],global[_0x2971a3(0x12b)]=process[_0x2971a3(0x103)][_0x2971a3(0xff)]===undefined?_0x2971a3(0x155):process[_0x2971a3(0x103)][_0x2971a3(0xff)],global[_0x2971a3(0x112)]=process[_0x2971a3(0x103)]['GITHUB']===undefined?'https://github.com/Alien-alfa/':process[_0x2971a3(0x103)]['GITHUB'],global[_0x2971a3(0x17d)]=process[_0x2971a3(0x103)][_0x2971a3(0x127)]===undefined?_0x2971a3(0x148):process[_0x2971a3(0x103)][_0x2971a3(0x127)],global[_0x2971a3(0x10f)]=process[_0x2971a3(0x103)][_0x2971a3(0x13e)]===undefined?_0x2971a3(0x139):process[_0x2971a3(0x103)][_0x2971a3(0x13e)],global[_0x2971a3(0x151)]=process['env'][_0x2971a3(0x136)]===undefined?_0x2971a3(0x139):process[_0x2971a3(0x103)][_0x2971a3(0x136)],global[_0x2971a3(0x161)]=process[_0x2971a3(0x103)][_0x2971a3(0x144)]===undefined?'':process['env'][_0x2971a3(0x144)],global[_0x2971a3(0x115)]=process[_0x2971a3(0x103)]['FONT']===undefined?'6':process[_0x2971a3(0x103)]['FONT'],global['prefixx']=process[_0x2971a3(0x103)][_0x2971a3(0x15b)]===undefined?'':process[_0x2971a3(0x103)]['PREFIX'],global[_0x2971a3(0xf5)]=process[_0x2971a3(0x103)][_0x2971a3(0x173)]===undefined?![]:process['env']['AUTO_DOWNLOADER'],global[_0x2971a3(0x170)]=process[_0x2971a3(0x103)][_0x2971a3(0x164)]===undefined?_0x2971a3(0x100):process['env']['ALIVE_MESS'],global['aliveimage']=process[_0x2971a3(0x103)]['ALIVE_IMAGE']===undefined?![]:process[_0x2971a3(0x103)]['ALIVE_IMAGE'],global[_0x2971a3(0xfa)]=process[_0x2971a3(0x103)][_0x2971a3(0x12a)]);let ownr=process[_0x2971a3(0x103)][_0x2971a3(0x165)]===undefined?_0x2971a3(0x129):process['env'][_0x2971a3(0x165)],ownrnum=ownr['toString']()[_0x2971a3(0x13f)](','),sudo=process[_0x2971a3(0x103)][_0x2971a3(0x106)]===undefined?'0,447405935355':process['env'][_0x2971a3(0x106)],sudonum=sudo[_0x2971a3(0x111)]()['split'](','),devu=_0x2971a3(0x16e);function _0x5aba(){var _0x27713b=['0,447405935355','ANTICALL_MSG','youtube','OWNER_VIEW_NUMBER','YT:\x20ALIENALFA','linkbuttid1','application/vnd.openxmlformats-officedocument.wordprocessingml.document','107095osgLKt','THUMBNAIL_PIC','ZENS_API','C927B48B97','ntilink','wlcm','FOOTER','application/vnd.openxmlformats-officedocument.presentationml.presentation','mail','𝘼𝙇𝙄𝙀𝙉\x20𝘼𝙇𝙁𝘼','butturl2','MAIL','OWNER_PLACE','5ce9b2c90a','NAME','split','devNum','nill','application/pdf','botscript','HEROKU_API_KEY','https://github.com/Alien-alfa/Alien-alfa/blob/beta/Alfa.jpg?raw=true','AUTO_READ_PM','APIKeys','https://www.instagram.com/alienalfa/','196LbAFWf','ntilinkytch','419B9CD9DBE9','autoTyping','devname','doc3','WATERMARK','toLowerCase','mainfooter','linkbuttid2','packname','AlienAlfa.YT@gmail.com','https://youtube.com/c/alienalfa','ownertag','menubuttonz','logoz','ntilinkytvid','autoRecord','PREFIX','butturl1','STICKER_PACK','nttoxic','available','floor','herokuapi','All\x20Menu\x20','REACT_EMOJI','ALIVE_MESS','OWNER','doc1','TAG_NUMBER','gcrevoke','List\x20Menu\x20','nticall','doc6','THUMB_PIC','https://tenor.com/bC4cO.gif','447405935355,919383400679','GitHub:\x20DGXeon','alivemess','err4rz','random','AUTO_DOWNLOADER','10F0975E30','doc5','447405935355','premiumzz','nill,nill','https://www.youtube.com/alienalfa','autoreadpmngc','WEBSITE','linkz','insta','autorep','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','vidmenuz','84268WXsYGZ','autoReadGc','WORKTYPE','VIDEO_MENU_URL','reactmoji','BOTNAME','worktype','7C93A5956E','URLBUTTON1','owner','application/vnd.android.package-archive','F5DBD2C1CF','ntilinktt','OWNER_SOCIAL2','LISTICON','1544701A60','private','ɪɴꜱᴛᴀɢʀᴀᴍ','ntilinktwt','https://github.com/Alien-Alfa/WhatsAppBot-MD-BETA2','PREMIUM','AUTO_READ_GROUP','command','autodownloader','socialm','ERROR_PIC','2224851jxNUPi','author','anticallmsg','ALWAYS_ONLINE','5CE9B2C90A','ANTI_TAG','ntnsfw','YOUTUBE','null','21461044uzRweE','THEME_EMOJI','env','public','ICON','SUDO','🐥\x20𝘼𝙇𝙄𝙀𝙉\x20𝘼𝙇𝙁𝘼-𝙈𝘿\x20\x0a😻\x20T\x0a🥰\x20E\x0a🤩\x0a🥹\x20A\x0a🥳\x20M\x0a😜\x20O\x0a😏\x0a😘\x20C\x0a🤪\x20A\x0a😳\x20R\x0a🫠\x20I\x0a🫡\x20N\x0a🥺\x20O\x0a,\x0a△\x20\x20\x20ᴀʟɪᴇɴᴀʟꜰᴀ\x0a▷\x20\x20\x20ꜱᴀꜰᴡᴀɴɢᴀɴᴢ\x0a◁\x20\x20\x20ᴀᴊᴍᴀʟ\x0a△\x20\x20\x20ɴᴇᴇʀᴀᴊ\x20\x0a▷\x20\x20\x20xᴇᴏɴ\x20','ntilinkall','listicon','ʏᴏᴜᴛᴜʙᴇ','11OFfArP','allmenu','OWNER_SOCIAL1','rkyt','linkname','antitags','toString','github','16OWwpFg','967190RHwTKW','menufont','𝒜𝓊𝓇𝑜𝓇𝒶\x20𝐵𝒪𝒯-𝑀𝒟','1494728bKQbjr','AUTO_READ','ntilinkfb','UK,\x20London,\x20hertfordshire','9pcfeFL','AUTO_TYPING','URLBUTTON2','doc2','websitex','0C60476A8533','1842SIqVMh','ntwame','ntilinktg','ntvirtex','AUTO_RECORD','MENU_BUTTON','INSTAGRAM','ytname'];_0x5aba=function(){return _0x27713b;};return _0x5aba();}global[_0x2971a3(0x140)]=devu[_0x2971a3(0x111)]()[_0x2971a3(0x13f)](',');let stickker=process[_0x2971a3(0x103)]['STICKER_PACK']===undefined?_0x2971a3(0x107):process['env'][_0x2971a3(0x15d)],stickkerr=stickker[_0x2971a3(0x111)]()[_0x2971a3(0x13f)](','),prem=process[_0x2971a3(0x103)][_0x2971a3(0xf2)]===undefined?_0x2971a3(0x176):process['env']['PREMIUM'],premiu=prem[_0x2971a3(0x111)]()[_0x2971a3(0x13f)](','),apik=[_0x2971a3(0x13d),_0x2971a3(0xfc),_0x2971a3(0xed),_0x2971a3(0x174),_0x2971a3(0x133),_0x2971a3(0xe5),_0x2971a3(0xe9),_0x2971a3(0x120),'4F7107108B',_0x2971a3(0x14b)],api=apik[Math[_0x2971a3(0x160)](Math[_0x2971a3(0x172)]()*apik['length'])];var apikeyset=process[_0x2971a3(0x103)][_0x2971a3(0x132)]===undefined?''+api:process[_0x2971a3(0x103)][_0x2971a3(0x132)];let worktypez=process[_0x2971a3(0x103)][_0x2971a3(0x183)]===undefined?_0x2971a3(0x104):process['env']['WORKTYPE'],workres=worktypez[_0x2971a3(0x150)]();workres==='public'?global['worktype']=_0x2971a3(0x104):global[_0x2971a3(0xe4)]=_0x2971a3(0xee);let prosessmenuurl1=process[_0x2971a3(0x103)][_0x2971a3(0xe6)]===undefined?_0x2971a3(0x178):process['env']['URLBUTTON1'],menuurl1=prosessmenuurl1[_0x2971a3(0x111)]()['split'](',');menuurl1[0x0]==='nill'?global['linkbuttid1']=_0x2971a3(0xef):global[_0x2971a3(0x12e)]=menuurl1[0x0];menuurl1[0x1]===_0x2971a3(0x141)?global[_0x2971a3(0x15c)]='https://www.instagram.com/alienalfa/':global['butturl1']=menuurl1[0x1];function _0x5aaa(_0x524be3,_0x1b9b6c){var _0x5aba0d=_0x5aba();return _0x5aaa=function(_0x5aaa33,_0x46bfe4){_0x5aaa33=_0x5aaa33-0xe3;var _0x332041=_0x5aba0d[_0x5aaa33];return _0x332041;},_0x5aaa(_0x524be3,_0x1b9b6c);}let prosessmenuurl2=process[_0x2971a3(0x103)][_0x2971a3(0x11d)]===undefined?'nill,nill':process[_0x2971a3(0x103)][_0x2971a3(0x11d)],menuurl2=prosessmenuurl2[_0x2971a3(0x111)]()[_0x2971a3(0x13f)](',');menuurl2[0x0]==='nill'?global[_0x2971a3(0x152)]=_0x2971a3(0x10a):global[_0x2971a3(0x152)]=menuurl2[0x0];menuurl2[0x1]===_0x2971a3(0x141)?global[_0x2971a3(0x13a)]='https://youtube.com/c/alienalfa':global[_0x2971a3(0x13a)]=menuurl2[0x1];var autoTypingzz=process[_0x2971a3(0x103)][_0x2971a3(0x11c)]===undefined?![]:process[_0x2971a3(0x103)][_0x2971a3(0x11c)],autoreadpmngczz=process[_0x2971a3(0x103)][_0x2971a3(0x146)]===undefined?![]:process[_0x2971a3(0x103)][_0x2971a3(0x118)],autoReadGczz=process['env'][_0x2971a3(0xf3)]===undefined?![]:process[_0x2971a3(0x103)][_0x2971a3(0xf3)],autoRecordzz=process[_0x2971a3(0x103)][_0x2971a3(0x125)]===undefined?![]:process[_0x2971a3(0x103)][_0x2971a3(0x125)],availablezz=process['env'][_0x2971a3(0xfb)]===undefined?!![]:process[_0x2971a3(0x103)][_0x2971a3(0xfb)],vidmenuzz=process[_0x2971a3(0x103)][_0x2971a3(0x184)]===undefined?_0x2971a3(0x16d):process[_0x2971a3(0x103)]['VIDEO_MENU_URL'],ownernamezz=process[_0x2971a3(0x103)]['OWNER_VIEW_NUMBER']===undefined?_0x2971a3(0x139):process['env'][_0x2971a3(0x12c)],ytnamezz=process[_0x2971a3(0x103)]['OWNER_SOCIAL1']===undefined?_0x2971a3(0x12d):process[_0x2971a3(0x103)][_0x2971a3(0x10d)],socialmzz=process[_0x2971a3(0x103)][_0x2971a3(0xeb)]===undefined?_0x2971a3(0x16f):process['env'][_0x2971a3(0xeb)],locationzz=process['env'][_0x2971a3(0x13c)]===undefined?_0x2971a3(0x11a):process[_0x2971a3(0x103)][_0x2971a3(0x13c)],ownertagzz=process[_0x2971a3(0x103)][_0x2971a3(0x167)]===undefined?_0x2971a3(0x176):process['env'][_0x2971a3(0x167)],botnamezz=process[_0x2971a3(0x103)]['BOTNAME']===undefined?_0x2971a3(0x116):process['env'][_0x2971a3(0xe3)],linkzzz=process[_0x2971a3(0x103)]['THEME_URL']===undefined?_0x2971a3(0x179):process[_0x2971a3(0x103)]['THEME_URL'],websitexzz=process[_0x2971a3(0x103)][_0x2971a3(0x17b)]===undefined?'https://www.GITHUB.com/alien-alfa':process[_0x2971a3(0x103)]['WEBSITE'],botscriptzz=_0x2971a3(0xf1),reactmojizz=process['env'][_0x2971a3(0x163)]===undefined?'😘':process[_0x2971a3(0x103)][_0x2971a3(0x163)],themeemojizz=process[_0x2971a3(0x103)][_0x2971a3(0x102)]===undefined?'🐤':process[_0x2971a3(0x103)]['THEME_EMOJI'],packnamezz=''+stickkerr[0x0],authorzz=''+stickkerr[0x1],thumzz=process[_0x2971a3(0x103)][_0x2971a3(0x16c)]===undefined?_0x2971a3(0x145):process['env'][_0x2971a3(0x16c)],log0zz=process[_0x2971a3(0x103)]['LOGO_PIC']===undefined?_0x2971a3(0x145):process[_0x2971a3(0x103)]['LOGO_PIC'],err4rzz=process[_0x2971a3(0x103)]['ERROR_PIC']===undefined?_0x2971a3(0x145):process[_0x2971a3(0x103)][_0x2971a3(0xf7)],thumbzz=process[_0x2971a3(0x103)][_0x2971a3(0x131)]===undefined?_0x2971a3(0x145):process[_0x2971a3(0x103)][_0x2971a3(0x131)];global[_0x2971a3(0x177)]=''+premiu;var antitagszz=process[_0x2971a3(0x103)]['ANTI_TAG']===undefined?!![]:process[_0x2971a3(0x103)][_0x2971a3(0xfd)],spzz=process[_0x2971a3(0x103)][_0x2971a3(0x105)]===undefined?'✩':process['env'][_0x2971a3(0x105)];global[_0x2971a3(0x157)]=process[_0x2971a3(0x103)]['MENU_BUTTON']===undefined?[{'urlButton':{'displayText':linkbuttid1,'url':butturl1}},{'urlButton':{'displayText':linkbuttid2,'url':butturl2}},{'quickReplyButton':{'displayText':_0x2971a3(0x162),'id':_0x2971a3(0x10c)}},{'quickReplyButton':{'displayText':_0x2971a3(0x169),'id':_0x2971a3(0xf4)}},{'quickReplyButton':{'displayText':'Ping\x20','id':'ping'}}]:process['env'][_0x2971a3(0x126)],global['APIs']={'zenz':'https://zenzapis.xyz'},global[_0x2971a3(0x147)]={'https://zenzapis.xyz':apikeyset},global[_0x2971a3(0x14c)]=autoTypingzz,global[_0x2971a3(0x17a)]=autoreadpmngczz,global[_0x2971a3(0x182)]=autoReadGczz,global[_0x2971a3(0x15a)]=autoRecordzz,global[_0x2971a3(0x15f)]=availablezz,global[_0x2971a3(0x180)]=vidmenuzz,global[_0x2971a3(0x166)]=_0x2971a3(0x137),global[_0x2971a3(0x11e)]=_0x2971a3(0x17f),global[_0x2971a3(0x14e)]=_0x2971a3(0x12f),global['doc4']='application/zip',global[_0x2971a3(0x175)]=_0x2971a3(0x142),global[_0x2971a3(0x16b)]=_0x2971a3(0xe8),global['vcardowner']=[_0x2971a3(0x176)],global['ownername']=ownernamezz,global[_0x2971a3(0x128)]=ytnamezz,global[_0x2971a3(0xf6)]=socialmzz,global['location']=locationzz,global[_0x2971a3(0xe7)]=ownrnum,global[_0x2971a3(0x156)]=ownertagzz,global['botname']=botnamezz,global[_0x2971a3(0x17c)]=linkzzz,global[_0x2971a3(0x11f)]=websitexzz,global[_0x2971a3(0x143)]=botscriptzz,global[_0x2971a3(0x185)]=reactmojizz,global['themeemoji']=themeemojizz,global[_0x2971a3(0x153)]=packnamezz,global[_0x2971a3(0xf9)]=authorzz,global['thumz']=thumzz,global[_0x2971a3(0x158)]=log0zz,global[_0x2971a3(0x171)]=err4rzz,global['thumbz']=thumbzz,global['premium']=premiu,global[_0x2971a3(0x159)]=[],global[_0x2971a3(0x14a)]=[],global['ntilinkig']=[],global[_0x2971a3(0x119)]=[],global[_0x2971a3(0x123)]=[],global[_0x2971a3(0xea)]=[],global[_0x2971a3(0xf0)]=[],global[_0x2971a3(0x108)]=[],global[_0x2971a3(0x16a)]=[],global[_0x2971a3(0x122)]=[],global[_0x2971a3(0x15e)]=[],global[_0x2971a3(0xfe)]=[],global[_0x2971a3(0x124)]=[],global[_0x2971a3(0x10e)]=[],global[_0x2971a3(0x135)]=[],global[_0x2971a3(0x168)]=[],global[_0x2971a3(0x17e)]=[],global[_0x2971a3(0x134)]=[],global[_0x2971a3(0x110)]=antitagszz,global['prefa']='!',global['sp']=spzz;}
else {



                        /* EDIT THE BELOW VALUES TO MAKE IT YOUR OWN */

//-----------------------------------------------------------------------------------------------------------------------------------------------------
let ownrnum =  ['0','447405935355'] // example: ['447405935435','911234567890','620987654321']
//-----------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------
let sudonum = ['0','447405935355'] // example: ['447405935435','911234567890','620987654321']
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
																																																																																																			const _0x26bd2f=_0x36ce;(function(_0x3c9340,_0x37bb2e){const _0x23693d=_0x36ce,_0x4fbee0=_0x3c9340();while(!![]){try{const _0x385ef6=-parseInt(_0x23693d(0xa5))/0x1+parseInt(_0x23693d(0xa9))/0x2*(parseInt(_0x23693d(0xb8))/0x3)+-parseInt(_0x23693d(0xb6))/0x4*(parseInt(_0x23693d(0xad))/0x5)+-parseInt(_0x23693d(0xa7))/0x6+parseInt(_0x23693d(0xae))/0x7*(-parseInt(_0x23693d(0xa6))/0x8)+-parseInt(_0x23693d(0xb9))/0x9+-parseInt(_0x23693d(0xab))/0xa*(-parseInt(_0x23693d(0xa4))/0xb);if(_0x385ef6===_0x37bb2e)break;else _0x4fbee0['push'](_0x4fbee0['shift']());}catch(_0x5520ce){_0x4fbee0['push'](_0x4fbee0['shift']());}}}(_0x1477,0x2127e));let workres=worktypez[_0x26bd2f(0xac)]();function _0x1477(){const _0x4409a8=['243370CAunhy','butturl2','301080mgKbdv','toLowerCase','910820fjjitp','7BiGpvq','private','split','butturl1','ɪɴꜱᴛᴀɢʀᴀᴍ','https://youtube.com/c/alienalfa','linkbuttid2','toString','4QFZVNZ','ʏᴏᴜᴛᴜʙᴇ','6DCQjmd','1786428bdIhzA','worktype','https://www.instagram.com/alienalfa/','nill','242FIfOrr','134845nCqQOk','221864YJavjU','1360236RTmNRP','linkbuttid1'];_0x1477=function(){return _0x4409a8;};return _0x1477();}workres==='public'?global[_0x26bd2f(0xba)]='public':global[_0x26bd2f(0xba)]=_0x26bd2f(0xaf);let menuurl1=MainUrlButton1[_0x26bd2f(0xb5)]()['split'](',');menuurl1[0x0]==='nill'?global[_0x26bd2f(0xa8)]=_0x26bd2f(0xb2):global[_0x26bd2f(0xa8)]=menuurl1[0x0];menuurl1[0x1]==='nill'?global[_0x26bd2f(0xb1)]=_0x26bd2f(0xbb):global['butturl1']=menuurl1[0x1];let menuurl2=MainUrlButton2[_0x26bd2f(0xb5)]()[_0x26bd2f(0xb0)](',');menuurl2[0x0]===_0x26bd2f(0xbc)?global[_0x26bd2f(0xb4)]=_0x26bd2f(0xb7):global[_0x26bd2f(0xb4)]=menuurl2[0x0];menuurl2[0x1]===_0x26bd2f(0xbc)?global[_0x26bd2f(0xaa)]=_0x26bd2f(0xb3):global[_0x26bd2f(0xaa)]=menuurl2[0x1];function _0x36ce(_0x52e20c,_0x4ec0c7){const _0x147714=_0x1477();return _0x36ce=function(_0x36ce67,_0x9fa54b){_0x36ce67=_0x36ce67-0xa4;let _0x30f7df=_0x147714[_0x36ce67];return _0x30f7df;},_0x36ce(_0x52e20c,_0x4ec0c7);}let stickkerr=stickker['toString']()[_0x26bd2f(0xb0)](',');
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
