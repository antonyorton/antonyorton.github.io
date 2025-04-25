//Tileserver details
export const pg_tileserv_host = 'https://pg-tileserv.whitegrass-e74755b7.australiaeast.azurecontainerapps.io/'

// const pg_tileserv_host = process.env.PG_TILESERV_HOST

//style object
export const style_object = {
  version: 8,
  glyphs: 'https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf',
  sources: {
    osm: {
      type: 'raster',
      // Excellent source-guide:
      // https://medium.com/@daniel_819/the-10-best-free-to-use-map-layers-8c8e1b4ad0a
      //
      // tiles: ['https://a.tile.opentopomap.org/{z}/{x}/{y}.png'],
      tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
      tileSize: 256,
      attribution: '&copy; OpenStreetMap Contributors',
      maxzoom: 19
    },
    'public.vic_places': {
      type: 'vector',
      tiles: [`${pg_tileserv_host}/public.vic_places/{z}/{x}/{y}.pbf`],
      minzoom: 3,
      maxzoom: 16
    },
    'public.track_18april2025': {
      type: 'vector',
      tiles: [`${pg_tileserv_host}/public.track_18april2025/{z}/{x}/{y}.pbf`],
      minzoom: 3,
      maxzoom: 16
    },
    'public.nsw_localities': {
      type: 'vector',
      tiles: [`${pg_tileserv_host}/public.nsw_localities/{z}/{x}/{y}.pbf`],
      minzoom: 3,
      maxzoom: 16
    },
    'public.dem_clip_syd_north': {
      type: 'vector',
      tiles: [`${pg_tileserv_host}/public.dem_clip_syd_north/{z}/{x}/{y}.pbf`],
      minzoom: 11,
      maxzoom: 16
    },
    'public.dem_clip_dharug': {
      type: 'vector',
      tiles: [`${pg_tileserv_host}/public.dem_clip_dharug/{z}/{x}/{y}.pbf`],
      minzoom: 11,
      maxzoom: 16
    },
    'public.dem_clip_watagans': {
      type: 'vector',
      tiles: [`${pg_tileserv_host}/public.dem_clip_watagans/{z}/{x}/{y}.pbf`],
      minzoom: 11,
      maxzoom: 16
    }
  },
  layers: [
    {
      id: 'osm',
      type: 'raster',
      source: 'osm'
    },
    {
      id: 'public.vic_places',
      type: 'line',
      source: 'public.vic_places',
      'source-layer': 'public.vic_places',
      type: 'circle',
      paint: {
        'circle-radius': 3,
        'circle-color': 'green',
        'circle-opacity': 0.5
      }
    },
    {
      id: 'public.track_18april2025',
      type: 'line',
      source: 'public.track_18april2025',
      'source-layer': 'public.track_18april2025',
      paint: {
        'line-width': 3,
        'line-color': 'red'
      }
    },
    {
      id: 'public.nsw_localities',
      type: 'line',
      source: 'public.nsw_localities',
      'source-layer': 'public.nsw_localities',
      paint: {
        'line-width': 0.7,
        'line-color': 'grey'
      }
    },
    {
      id: 'public.dem_clip_syd_north',
      type: 'line',
      source: 'public.dem_clip_syd_north',
      'source-layer': 'public.dem_clip_syd_north',
      paint: {
        'line-width': 0.6,
        'line-opacity': 0.5,
        'line-color': 'brown'
      }
    },
    {
      id: 'public.dem_clip_dharug',
      type: 'line',
      source: 'public.dem_clip_dharug',
      'source-layer': 'public.dem_clip_dharug',
      paint: {
        'line-width': 0.6,
        'line-opacity': 0.5,
        'line-color': 'brown'
      }
    },
    {
      id: 'public.dem_clip_watagans',
      type: 'line',
      source: 'public.dem_clip_watagans',
      'source-layer': 'public.dem_clip_watagans',
      paint: {
        'line-width': 0.6,
        'line-opacity': 0.5,
        'line-color': 'brown'
      }
    }
  ],
  maxzoom: 18
}
