import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '500px',
    height: '400px'
};

const center = {
    lat: 21.4389,
    lng: -158.0001
};

function Map() {
    return (
        <div className="w-full flex justify-center">
            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_MAPAPI}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    <></>
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default React.memo(Map)