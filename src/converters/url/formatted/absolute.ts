export function convertUrlToAbsoluteURL(relativeUrl: string, baseUrl: string): string {
  try {
    return new URL(relativeUrl, baseUrl).href
  } catch (e) {
    return relativeUrl
  }
}

export default convertUrlToAbsoluteURL
