function getIeVersion() {
  const uaString = navigator.userAgent;
  const match = /\b(MSIE |Trident.*?rv:)(\d+)/.exec(uaString);
  // eslint-disable-next-line radix
  if (match) return parseInt(match[2]);
  return null;
}

export default getIeVersion;
