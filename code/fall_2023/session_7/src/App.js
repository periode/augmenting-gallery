import { Link } from 'react-router-dom';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet/Marker';
import { Popup } from 'react-leaflet/Popup';
import { useMap } from 'react-leaflet/hooks'

// this is how we include css files
import './App.css';

// these are the components we created
import Image from './Image';

// these images need to be in the src folder
import demolition_drama_image from "./The Demolition Drama_small.png"
import house_europe from './HouseEurope_clean.png'

function App() {
  return (
    <div className="App">

      {/* we use the Link component imported from the react-router-dom package (line 1) */}
      {/* it is essentially a replacement to the <a href=""></a> tag in plain html */}
      <Link to="/about">go to about</Link>

      {/* here, we provide some information (legend, credits and src) to each image components */}
      {/* they then become available via the 'props' variable in the Image.js file */}
      <Image legend="the poster for a movie against housing speculation" credits="unknown artist" src={demolition_drama_image} />
      <Image legend="the poster for an European Citizens' Initative" credits="station.plus" src={house_europe} />
      <Image legend="A legend without an image" credits="no credits because no image!" />




      <div id="map">
        <MapContainer center={[52.50056,13.40011]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[52.50056,13.40011]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>

          <Marker position={[52.23, 21.01]}>
            <Popup>
              <div>
                <h1>Witam!</h1>
                <div>
                Witam z Warszawie!
                </div>
              
              </div>
              
            </Popup>
          </Marker>
        </MapContainer>
      </div>




    </div>
  );
}

export default App;
