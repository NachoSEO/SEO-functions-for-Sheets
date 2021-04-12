# Custom functions for sheets
In this repo you'll find a set of custom functions related to improve SEO work or specific utilities for Google Sheets using App Scripts.

## Available functions
| Function name      | Type    | Description                                                                                  |
|--------------------|---------|----------------------------------------------------------------------------------------------|
| getStatusCode      | SEO     | Get the status code of the URL requested                                                     |
| scrapeByRegex      | SEO     | Scrape an element from an URL using regex                                                    |
| existsInColumn     | Utility | Returns (True or False) if a value (literal & substring too) is in a column                  |
| groupByCell        | Utility | Group a number of cells in only one                                                          |
| myReplace          | Utility | Replace a string or substring for another one (because REPLACE function from sheet is awful) |
| returnCellInversed | Utility | Returns the value of a specific value by its inversed position filtering empty/falsy values  |
| returnLastCell     | Utility | Returns the last value of an array of cells filtering empty/falsy values                     |
| v2lookup           | Utility | Vertical lookup using two elements to get a value in specified index                         |
