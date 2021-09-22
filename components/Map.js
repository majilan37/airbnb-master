import { useState } from 'react';
import ReactMapGL,{Marker, Popup} from 'react-map-gl';
import { getCenter } from 'geolib';

function Map({searchResult}) {
    
    const coordinates = searchResult.map((item) => ({
        longitude: item.long, 
        latitude: item.lat
    }) )
    const center = getCenter(coordinates)
    const [selectedLocation, setSelectedLocation] = useState({})
    const [viewPort, setViewPort] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11
    })

    console.log(selectedLocation);  
    
    return (
        <ReactMapGL
            mapStyle = 'mapbox://styles/majilan/cktvncrqa2ffu17ok597z8plj'
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewPort}
            onViewportChange={(nextViewPort) => setViewPort(nextViewPort)}
        >
            {searchResult.map((item, index) => (
                <div key={index} >
                    <Marker 
                        longitude={item.long}
                        latitude={item.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <p 
                            onClick={() => setSelectedLocation(item)} 
                            className='cursor-pointer text-xl animate-bounce' 
                        >
                            📌
                        </p>
                    </Marker>
                    {selectedLocation.long === item.long ? (
                            <Popup 
                                onClose={() => setSelectedLocation({})}
                                closeOnClick={true}
                                latitude={item.lat}
                                longitude={item.long}
                            >
                                {item.title}
                            </Popup>
                        ): (false)}
                </div>
            ))}
        </ReactMapGL>
    )
}

export default Map
