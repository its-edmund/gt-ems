import React, {useState} from 'react';
import ReactMapGL from 'react-map-gl'

const Map = () => {
  const [viewPort, setViewPort] = useState({
    latitude: 33.7765,
    longitude: -84.3963,
    zoom: 14
  })

  return (
    <ReactMapGL 
      {...viewPort}
      mapboxApiAccessToken="pk.eyJ1IjoibXhpbiIsImEiOiJja2p3ZXdkdTcwMmozMnF0ODZseWd5ZW9wIn0._-gH8OHmTvgXIi8Rlgj5yg"
      mapStyle="mapbox://styles/mapbox/outdoors-v9"
      showZoom
      showCompass
      width="60vw"
      height="50vh"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={(viewport) => setViewPort(viewport)}
    />
  )
}

export default Map;
