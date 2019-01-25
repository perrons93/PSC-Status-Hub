// reference: https://stackoverflow.com/questions/2242086/how-to-detect-the-screen-resolution-with-javascript
function getScreenResolution() {
  const height = window.screen.availHeight;
  const width = window.screen.availWidth;
  const screenResolution = [height, width];
  return screenResolution;
}

export default getScreenResolution;
