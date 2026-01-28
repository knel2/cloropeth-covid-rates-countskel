
mapboxgl.accessToken = 'pk.eyJ1Ijoia25lbDIiLCJhIjoiY21rdTlkYmx5MThyZjNmcHVrMDYzdXJ4dyJ9.HrXpvWOlXxo7fGCGnGQG6A';

const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/light-v10', // style URL
        zoom: 3, // starting zoom
        center: [-100, 40] // starting center
    }
);