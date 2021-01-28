import React from 'react';
import { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import CreateSurfBreakFormPage from '../CreateSurfBreakFormPage/CreateSurfBreakForm'

const containerStyle = {
    width: '800px',
    height: '400px'
};

const center = {
    lat: 21.4389,
    lng: -158.0001
};

const position = {
    lat: 21.649413,
    lng: -157.927923
}

const onLoad = marker => {
    console.log('marker: ', marker)
}

 export let location;

function Map() {
    let [location, setLocation] = useState(position);

    // const updateLocation = (e) => console.log(e.latLng.lat(), "latitude", e.latLng.lng(), "longitude");
    const updateLocation = (e) => setLocation({lat: e.latLng.lat(), lng: e.latLng.lng()});


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
                    <>
                    <Marker
                        onLoad={onLoad}
                        position={location}
                        draggable={true}
                        onDragEnd={updateLocation}
                        
                    />
                    </>
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default React.memo(Map)