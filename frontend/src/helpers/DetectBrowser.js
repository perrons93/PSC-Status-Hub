// Reference: https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser/9851769
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

export default detectBrowser;
