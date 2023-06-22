import './App.css';

import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import ThreeD from './ThreeD';
import Map from './Map';
import Api from './Api';
import About from './About';

// how to navigate between pages: https://www.codeconcisely.com/posts/react-navigation/

// 1. install react-router-dom -> "npm install react-router-dom@6"
// 2. modify index.js to include BrowserRouter
// 3. include routing in App.JS
// 4. use the <Link> element to navigate to different routes

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>here is some text</div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="3d" element={<ThreeD />} />
          <Route path="map" element={<Map />} />
          <Route path="api" element={<Api />} />
          <Route path="about" element={<About />}/>
        </Routes>
      </header>
    </div >
  );
}

export default App;
