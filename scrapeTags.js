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

  try {
    response = UrlFetchApp.fetch(url);
    page = response.getContentText();
    code = response.getResponseCode();
    match = page.match(regex);

  } catch (e) {
    return "Error: " + e;
  }

  return code === 200 ? match : "URL Issue: Response (" + code + ")";
}
