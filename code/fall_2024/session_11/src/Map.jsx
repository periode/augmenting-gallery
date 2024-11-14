import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// we need to import all the components from the leaflet package
// which we installed with: npm install leaflet react-leaflet


function Map() {
  return (<>

    <div id="map">
      {/* this is the overall container, including the starting center of the map, and its starting zoom level */}
      <MapContainer center={[32.522499, -117.046623]} zoom={13} scrollWheelZoom={false}>
        {/* this is all of the different tiles that make up the background */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* we can add different markers popups and put some content inside it */}
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        <Marker position={[51.515, -0.09]}>
          <Popup>
            this is my second location!
          </Popup>
        </Marker>
      </MapContainer>

    </div>

  </>)
}

export default Map;
