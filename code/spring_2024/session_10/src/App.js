import logo from './logo.svg';
import './App.css';
import ChildhoodStory from './ChildhoodStory';
import FramedImage from './FramedImage';

import timesSquare from './images/timesquare.jpg'
import ctrlcv from './images/ctrlcv.jpg'
import lifebeforegoogle from './images/life-before-google.jpg'

// here we import the Link, which is React's equivalent to HTML's <a href=""> tag
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div>Go to my <Link to="/about">about page</Link>! </div>
        <Link to="/catalogue">catalogue here!</Link>

        {/* the image holder class applies the "flex" display type to help us better layout the children elements (here, FramedImage) */}
        {/* see App.css, lines 10-14 to see the rules that apply */}
        <div class="image-holder">
          {/* here we specify which image and legend should be displayed for each FramedImage component */}
          <FramedImage image={timesSquare} legend="times square with ad blocker" />
          <FramedImage image={ctrlcv} legend="second legend" />
          <FramedImage image={lifebeforegoogle} legend="yet another explanation of a picture" />
        </div>
      </header>
    </div>
  );
}

export default App;
