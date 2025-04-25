import { style_object } from './style.js'

let map = new maplibregl.Map({
  container: 'map',
  center: [151.2, -33.7],
  zoom: 10,
  style: style_object,
  hash: true,
  transformRequest: (url, resourceType) => {
    if (resourceType === 'Source' && url.startsWith('http://myHost')) {
      return {
        url: url.replace('http', 'https'),
        headers: { 'my-custom-header': true },
        credentials: 'include' // Include cookies for cross-origin requests
      }
    }
  }
})

// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('click', 'public.track_18april2025', e => {
  const coordinates = e.features[0].geometry.coordinates[0]
  const description = `<h3>${e.features[0].properties.name}:</h3>${e.features[0].properties.desc}`

  new maplibregl.Popup().setLngLat(coordinates).setHTML(description).addTo(map)
})

// Change the cursor to a pointer when the mouse is over the places layer.
map.on('mouseenter', 'public.track_18april2025', () => {
  map.getCanvas().style.cursor = 'pointer'
})

// Change it back to a pointer when it leaves.
map.on('mouseleave', 'public.track_18april2025', () => {
  map.getCanvas().style.cursor = ''
})

// Add geolocate control to the map.
map.addControl(
  new maplibregl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    trackUserLocation: true
  })
)
