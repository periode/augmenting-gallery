import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'

function App() {

    // in order to get your URL from mapbox studio (https://studio.mapbox.com/)
    // you need to follow this pattern: https://api.mapbox.com/styles/v1/USERNAME/MAP_ID/tiles/{z}/{x}/{y}/?access_token=ACCESS_TOKEN
    // the USERNAME is the one you registered with
    // the MAP_ID is the random series of letters and numbers right after styles/ in URLs in the Share menu
    // the ACCESS_TOKEN can also be accessed in the Share popup
    let username = "pierrepierre"
    let mapID = "cjoo4ktpw01py2sp4mzgr51ak"
    let access_token = "pk.eyJ1IjoicGllcnJlcGllcnJlIiwiYSI6Ilk0NTlEcTAifQ.wb5BKEMZmXOC37hCDcC_lQ"
    let mapboxURL = "https://api.mapbox.com/styles/v1/"+username+"/"+mapID+"/tiles/{z}/{x}/{y}/?access_token=" + access_token
    
    return (
        <div id="map" style={{height: "1000px"}}>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url={mapboxURL}
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        <h1>HELLO</h1>
                    </Popup>
                </Marker>
                <Marker position={[51.510, -0.085]} >
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default App;
