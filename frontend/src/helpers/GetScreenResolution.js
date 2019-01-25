function getScreenResolution() {
  const height = window.screen.availHeight;
  const width = window.screen.availWidth;
  const screenResolution = [height, width];
  return screenResolution;
}

export default getScreenResolution;
