import React, { useEffect, useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { Box, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

const Map = props => {
  const [viewPort, setViewPort] = useState({
    latitude: 33.7765,
    longitude: -84.3983,
    zoom: 13.5,
  });
  const [waypoints, setWaypoints] = useState([]);

  useEffect(() => {
    setWaypoints(props.data ? props.data.getWaypoints : []);
  }, []);

  return (
    <Box {...props} overflow="hidden" zIndex={0} borderRadius="10px" shadow="lg">
      <ReactMapGL
        {...viewPort}
        style={{ borderRadius: '10px' }}
        mapStyle="mapbox://styles/mapbox/outdoors-v9"
        showZoom
        showCompass
        width="100%"
        height="100%"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={viewport => setViewPort(viewport)}
      >
        {waypoints.map(waypoint => (
          <Marker longitude={waypoint.long} latitude={waypoint.lat} key={waypoint.id}>
            <FontAwesomeIcon
              icon={faMapPin}
              className="pin-icon"
              style={{
                cursor: 'pointer',
                color: '#003057',
                fontSize: '2rem',
                transform: 'translate(-9px, -32px)',
              }}
            />
            <Box
              backgroundColor="whiteAlpha.700"
              borderRadius={5}
              transform="translate(18px, -65px)"
              p={2}
            >
              <Text fontWeight="bold" zIndex={-2}>
                {waypoint.nature}
              </Text>
            </Box>
          </Marker>
        ))}
      </ReactMapGL>
    </Box>
  );
};

export default Map;
