import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '800px',
    height: '400px'
};

const center = {
    lat: 21.4389,
    lng: -158.0001
};

const position = {
    lat: 21.466770194373073,
    lng: -157.99658755078124
}

function Map({ sendDataToParent }) {
    console.log(process.env.REACT_APP_MAPAPI, "api-key")
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
                    <>
                    <Marker
                        position={position}
                        draggable={true}
                        onDragEnd={(e) => {
                            sendDataToParent([e.latLng.lat(), e.latLng.lng()]);
                        }} 
                        
                    />
                    </>
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default React.memo(Map)