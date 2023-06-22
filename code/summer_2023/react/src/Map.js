import { MapContainer } from 'react-leaflet/MapContainer'
import { Marker } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'
import { TileLayer } from 'react-leaflet/TileLayer'


// 1. with the url you get from mapbox studio, once you publish and choose Share Style > Allow copying
// 2. modify your account name, your tileset id, your access token

function Map() {
    return (
        <div id="map">
            <MapContainer center={[51.605, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://api.mapbox.com/styles/v1/pierrepierre/clj775x6s006g01qz63xg31zz/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGllcnJlcGllcnJlIiwiYSI6Ilk0NTlEcTAifQ.wb5BKEMZmXOC37hCDcC_lQ"
                />
                <Marker position={[51.605, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map;

