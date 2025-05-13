/* eslint-disable */
export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoicGVrdHJhbW9tIiwiYSI6ImNtYWVwdmdrbzBiMnMyam9nM3pnY2dodTAifQ.AjEzMloerROXOP-ZG8r4Iw';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/pektramom/cmaeqqd8y00y501s0hfdo1y8b',
    scrollZoom: false
    //   zoom: 5,
    //   center: [-118.113491, 34.111745]
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
