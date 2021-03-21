import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Box, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

const Map = props => {
  const [viewPort, setViewPort] = useState({
    lat: 33.7765,
    lng: -84.3983,
  });
  const [zoom, setZoom] = useState(15);
  const [waypoints, setWaypoints] = useState([]);
 
  useEffect(() => {
    setWaypoints(props.data ? props.data.getWaypoints : []);
  }, []);

  return (
    <Box {...props} overflow="hidden" zIndex={0} borderRadius="10px" shadow="lg">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={viewPort}
        defaultZoom={zoom}
      >
        {waypoints.map(waypoint => (
          <div
            key={waypoint}
            lng={waypoint.long}
            lat={waypoint.lat}
          >
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
              display='inline-block'
              whiteSpace='nowrap'
              backgroundColor="whiteAlpha.900"
              borderRadius={5}
              transform="translate(18px, -65px)"
              p={2}
            >
              <Text fontWeight="bold" zIndex={-2}>
                {waypoint.nature}
              </Text>
            </Box>
          </div>
        ))}
      </GoogleMapReact>
    </Box>
  );
};

export default Map;
