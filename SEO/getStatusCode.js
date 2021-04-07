/**
 * Get the Status Code of an URL
 *
 * @param {string} url The URL to get the status
 * @return {number} The Status Code of the requested page
 * @customfunction
 */

function getStatusCode(url) {
    const requestHeaders = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Safari/537.36'
    };
    
    const options = {
      url: url,
      followRedirects: false,
      muteHttpExceptions: true,
      headers: requestHeaders
    }
   
    try {
      const response = UrlFetchApp.fetch(url, options);
      return response.getResponseCode();
    } catch(e) {
      return 'Error: unable to return any Status Code';
    }
  }
