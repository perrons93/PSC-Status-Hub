// reference: https://makandracards.com/makandra/53475-minimal-javascript-function-to-detect-version-of-internet-explorer-or-edge
function getIeVersion() {
  const uaString = navigator.userAgent;
  const match = /\b(MSIE |Trident.*?rv:)(\d+)/.exec(uaString);
  if (match) return parseInt(match[2], 10);
  return null;
}

export default getIeVersion;
