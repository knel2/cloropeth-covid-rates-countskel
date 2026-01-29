
// mapboxgl.accessToken = 'pk.eyJ1Ijoia25lbDIiLCJhIjoiY21rdTlkYmx5MThyZjNmcHVrMDYzdXJ4dyJ9.HrXpvWOlXxo7fGCGnGQG6A';

// const map = new mapboxgl.Map({
//         container: 'map', // container ID
//         style: 'mapbox://styles/mapbox/light-v10', // style URL
//         zoom: 3, // starting zoom
//         center: [-100, 40] // starting center
//     }
// );
mapboxgl.accessToken =
            'pk.eyJ1Ijoia25lbDIiLCJhIjoiY21rdTlkYmx5MThyZjNmcHVrMDYzdXJ4dyJ9.HrXpvWOlXxo7fGCGnGQG6A';
        let map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/light-v10',
            projection: 'albers',
            zoom: 3,
            minZoom: 4,
            center: [-96, 37]
        });

    async function geojsonFetch() {
      let response = await fetch('assets/us-covid-2020-rates.json');
      let usdata = await response.json();

          map.on('load', function loadingData() {
              map.addSource('stateData', {
              type: 'geojson',
              data: usdata
          });

          map.addLayer({
    'id': 'rate-Data-layer',
    'type': 'fill',
    'source': 'stateData',
    'paint': {
        'fill-color': [
            'step',
            ['get', 'rates'],
            '#FFEDA0',
            10,
            '#FED976',
            20,
            '#FEB24C',
            50,
            '#FD8D3C',
            100,
            '#FC4E2A',
            200,
            '#E31A1C'
        ],
        'fill-outline-color': '#BBBBBB',
        'fill-opacity': 0.7,
    }
});

const layers = [
    '0-9',
    '10-19',
    '20-49',
    '50-99',
    '100-199',
    '200-499'
];
const colors = [
    '#FFEDA070',
    '#FED97670',
    '#FEB24C70',
    '#FD8D3C70',
    '#FC4E2A70',
    '#E31A1C70',
];

const legend = document.getElementById('legend');
legend.innerHTML = "<b>Covid-19 Rates<br>cases per thousand residents</b><br><br>";

layers.forEach((layer, i) => {
    const color = colors[i];
    const item = document.createElement('div');
    const key = document.createElement('span');
    key.className = 'legend-key';
    key.style.backgroundColor = color;

    const value = document.createElement('span');
    value.innerHTML = `${layer}`;
    item.appendChild(key);
    item.appendChild(value);
    legend.appendChild(item);
});
map.on('mousemove', ({point}) => {

    const county = map.queryRenderedFeatures(point, {

        layers: ['rate-Data-layer']
    });


    document.getElementById('text-description').innerHTML = county.length ?
        `<h3>County: ${county[0].properties.county}</h3><p><strong><em>${county[0].properties.rates}</strong> cases per thousand residents</em></p>` :
        `<p>Hover over counties </p>`;
});

    });
    }

    geojsonFetch();



    //map 2

// mapboxgl.accessToken =
//             'pk.eyJ1Ijoia25lbDIiLCJhIjoiY21rdTlkYmx5MThyZjNmcHVrMDYzdXJ4dyJ9.HrXpvWOlXxo7fGCGnGQG6A';
//         let map2 = new mapboxgl.Map({
//             container: 'map2', // container ID
//             style: 'mapbox://styles/mapbox/light-v10',
//             projection: 'albers',
//             zoom: 3,
//             minZoom: 4,
//             center: [-96, 37]
//         });

// const grades = [50, 100, 1000],
//       colors = ['rgb(208,209,230)', 'rgb(103,169,207)', 'rgb(1,108,89)'],
//       radii = [5, 15, 20];

//     map2.on('load', () => {
//     map2.addSource('covidrates', {
//         type: 'geojson',
//         data: 'assets/us-covid-2020-counts.json'
//     });

//     map2.addLayer({
//         'id': 'rates-point',
//         'type': 'circle',
//         'source': 'covidrates',
//         'paint': {
//     // increase the radii of the circle as the zoom level and dbh value increases
//     'circle-radius': {
//         'property': 'cases',
//         'stops': [
//             [grades[0], radii[0]],
//             [grades[1], radii[1]],
//             [grades[2], radii[2]]
//         ]
//     },
//     'circle-color': {
//         'property': 'cases',
//         'stops': [
//             [grades[0], colors[0]],
//             [grades[1], colors[1]],
//             [grades[2], colors[2]]
//         ]
//     },
//     'circle-stroke-color': 'white',
//     'circle-stroke-width': 1,
//     'circle-opacity': 0.6
// }

// });

// // click on tree to view magnitude in a popup
// map2.on('click', 'rates-point', (event) => {
//     new mapboxgl.Popup()
//         .setLngLat(event.features[0].geometry.coordinates)
//         .setHTML(`<strong>Number of Cases:</strong> ${event.features[0].properties.cases}  `)
//         .addTo(map2);
// });

//     });

//   // create legend
//         const legend = document.getElementById('legend');
//         //set up legend grades and labels
//         var labels = ['<strong>Magnitude</strong>'],
//             vbreak;
//         //iterate through grades and create a scaled circle and label for each
//         for (var i = 0; i < grades.length; i++) {
//             vbreak = grades[i];
//             // you need to manually adjust the radius of each dot on the legend
//             // in order to make sure the legend can be properly referred to the dot on the map.
//             dot_radii = 2 * radii[i];
//             labels.push(
//                 '<p class="break"><i class="dot" style="background:' + colors[i] + '; width: ' + dot_radii +
//                 'px; height: ' +
//                 dot_radii + 'px; "></i> <span class="dot-label" style="top: ' + dot_radii / 2 + 'px;">' + vbreak +
//                 '</span></p>');
//         }
//         // add the data source
//         const source =
//             '<p style="text-align: right; font-size:10pt">Source: <a href="https://data.census.gov/table/ACSDP5Y2018.DP05?g=0100000US$050000&d=ACS+5-Year+Estimates+Data+Profiles&hidePreview=true">census</a></p>';
//         // combine all the html codes.
//         legend.innerHTML = labels.join('') + source;