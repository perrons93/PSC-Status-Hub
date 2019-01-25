// eslint-disable-next-line no-unused-vars
function detectBrowser() {
  let detectedBrowser = '';
  if (navigator.userAgent.indexOf('Chrome') !== -1) {
    detectedBrowser = 'chrome';
  } else if (navigator.userAgent.indexOf('Firefox') !== -1) {
    detectedBrowser = 'firefox';
  } else if ((navigator.userAgent.indexOf('MSIE') !== -1) || (!!document.documentMode === true)) {
    detectedBrowser = 'IE';
  } else {
    detectedBrowser = 'error';
  }
  return detectedBrowser;
}

// function getIeVersion() {
//   const uaString = navigator.userAgent;
//   const match = /\b(MSIE |Trident.*?rv:)(\d+)/.exec(uaString);
//   // eslint-disable-next-line radix
//   if (match) return parseInt(match[2]);
//   return null;
// }

export default detectBrowser;
