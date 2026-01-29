# cloropeth-covid-rates-countskel
## Introduction
### For the project I have 2 maps, the first one map 1 being the chlorpeth map of covid 19 rates in the U.S and the second map being map 2 being a proportional symbol map that looks at the counts of cases of covid 19 in the U.S. The data used for these two datasets are set in 2020 which lists out the. For the first map when you hover over the chloropeth map it provides the rates of person of for a county and example of this is shown in the first image bellow when we hover over the king county it shows the rate 28.527. In the other map it shows the proportion of number of cases per county when you click on the dot it as seen in the screenshot in map 2 where king county cases are 61712. Each dot in map 2 is represented in the legend by a cluster of number of cases that I chose to set as categorical numbers based on looking at the data of cases. For the legend I categorized them by the cases that are close to the number in the cluster, for ezample the last category 10,000 it means the number of casses that are close to that category number and then number of cases that are further from that number.

## Map links
[Map 1](https://knel2.github.io/cloropeth-covid-rates-countskel/map1.html)
[Map 2](https://knel2.github.io/cloropeth-covid-rates-countskel/map2.html)

## Functions
### For the new type of functions used in the main.js I used they were mainly introduced in the review of how to make chloropeth maps such as of lab 4 from geog 328 these include map.on hover where your able to hover over the specific county similar to the function that we used to map 2 with the proportional map with the function of clicking on a point. The fetch function that helps with grabing to get the data, structure the map with colors depending on the rate of the state and the legend and then calling the fucntion again to be able to present it on the map.

## Screenshots
![Chloropeth map](img/choropeth-map.jpg)

![proportional map](img/proportional-map.jpg)

## Library in use, data sources used and ackowledgements
### The data sources that I used are [Covid-2020-cases](assets/us-covid-2020-counts.json) and [Covid-2020-rates](assets/us-covid-2020-rates.json) these two datasets used as geojson for the maps are from census data by the help of the lab that provided in the dilverable on step 6 of this lab.

