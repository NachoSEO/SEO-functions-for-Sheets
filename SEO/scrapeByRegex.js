/**
 * Remove HTML tags
 *
 * @param {Array} match The HTML you want to modify
 * @return {String} The content within HTML removing the HTML tags.
 * @customfunction
 */

function removeHtml(match) {
  const [ firstMatch ] = match;
  return firstMatch.replace(/<[^>]*>?/gmi, "");
}

/**
 * Scrape anything that you want with Regex
 *
 * @param {String} url The URL you want to scrape
 * @param {Regex} regex Regex that will select a part of the HTML of the URL
 * @param {Boolean} removeTag Set to True if you want to remove the HTML tags
 * @return {String} The HTML tag with its content or just the inner content.
 * @customfunction
 */

function scrapeByRegex(url, regex, removeTag) {
  if (!url || !regex) {
    return "Error: Please provide URL & regex";
  }

  const requestHeaders = {
    'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
  };

  try {
    const response = UrlFetchApp.fetch(url, requestHeaders);
    const statusCode = response.getResponseCode();
    let match = response
      .getContentText()
      .match(regex);

    if (statusCode === 200) {
      if (removeTag) {
        match = removeHtml(match);
      }
      return match;
    } else {
      
      return `Error: Status code returned: ${statusCode}`;
    }
  } catch (e) {
    
    return "Error: " + e;
  }
}
