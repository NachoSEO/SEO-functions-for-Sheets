// Based on this post: https://codeseo.io/an-old-friend/ from @jroakes


function removeHtml(match) {
  match = match.toString();
  finalMatch = match.replace(/<[^>]*>?/gmi, "");
  return finalMatch;
}

/**
 * Scrape anything that you want with Regex
 *
 * @param url The URL you want to scrape
 * @param regex Regex that will select a part of the HTML of the URL
 * @param removeTag Set to True if you want to remove the HTML tags
 * @customfunction
 */

function scrapeTag(url, regex, removeTag) {
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
  
  if (code === 200) {
      if (removeTag) {
        match = removeHtml(match);
       }
      return match; 
  } else {
    return "URL Issue: Response (" + code + ")";
  }
}
