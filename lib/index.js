exports.alien = require('./link')
exports.AlfaMenu = require('./menulist')

exports.AlfaMenu = require('./menulist');


async function styletext (text, index)  {
    index = index - 1;
    return listall(text)[index];
  };
  async function isIgUrl (url) {
    /(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am|instagr.com)\/(\w+)/gim.test(
      url
    );
  };
module.export = { styletext }

const ffmpeg = require('fluent-ffmpeg')
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffprobePath = require('@ffprobe-installer/ffprobe').path;

ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);

module.exports = ffmpeg;
