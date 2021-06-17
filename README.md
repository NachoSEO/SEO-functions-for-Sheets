# Custom functions for sheets
In this repo you'll find a set of custom functions related to improve SEO work or specific utilities for Google Sheets using App Scripts.

## Available functions
| Function name         | Type    | Dependencies              | Description                                                                   |
|-----------------------|---------|---------------------------|-------------------------------------------------------------------------------|
| getStatusCode         | SEO     | None                      | Get the status code of the URL requested                                      |
| scrapeByRegex         | SEO     | None                      | Scrape an element from an URL using regex                                     |
| getRunRateCurrentMonth| SEO     | getAvgDailytraffic        | Forecasts the run rate from an array of numbers. Used to forecast traffic     |
| getRunRateNextMonth   | SEO     | getAvgDailytraffic        | Forecasts the run rate from an array of numberspf the next month              |
| getAvgDailytraffic    | SEO     | None                      | Returns the average daily traffic. Every param is counted as weekly traffic   | 
| existsInColumn        | Utility | None                      | Returns (True or False) if a value (literal & substring too) is in a column   |
| groupByCell           | Utility | None                      | Group a number of cells in only one as a string                               |
| myReplace             | Utility | None                      | Replace a string or substring for another one                                 |
| returnCellInversed    | Utility | None                      | Returns the value of a specific value by its inversed position filtering empty/falsy values  |
| returnLastCell        | Utility | None                      | Returns the last value of an array of cells filtering empty/falsy values       |
| v2lookup              | Utility | None                      | Vertical lookup using two elements to get a value in specified index           |
| unlimitedVlookup      | Utility | None                      | Vertical lookup using N elements to get a value in specified index             |
