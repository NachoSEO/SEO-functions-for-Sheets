// Based on this post: https://codeseo.io/an-old-friend/ from @jroakes
/**
 * Scrape anything that you want with Regex
 *
 * @customfunction
 */

function scrapeTag(url, regex) {
  if (!url) {
    return "No URL";
  }

  var response, code, page, match;

  var requestHeaders = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Safari/537.36'
  };

  try {
    response = UrlFetchApp.fetch(url, requestHeaders);
    page = response.getContentText();
    code = response.getResponseCode();
    match = page.match(regex);

  } catch (e) {
    return "Error: " + e;
  }

  return code === 200 ? match : "URL Issue: Response (" + code + ")";
}
