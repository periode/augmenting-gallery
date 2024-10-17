import './App.css'
import Photo from "./components/Photo"
import Profile from './components/Profile'
import dependency from "./assets/dependency.png" // i import the img file
import indiana from "./assets/indianajones.gif"
import meme from "./assets/this-is-fine.jpg"
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
    <h1>Welcome to my App!</h1>
    <div>
      Visit the about page here: <Link to={"/about"}>click here</Link>
    </div>
    <Profile bio={"forbes most successful investor"} userName={"kimkardashian"}/>
    <Profile bio={"most combined social media followers, does soccer on the side. is not a robot"} userName={"christianoronaldo"}/>
    {/* i give the image file to the photo component, along with a caption */}

      <Photo caption={"the park"} imageSource={dependency}/>
      <Photo caption={"the field"} imageSource={indiana}/>
      <Photo caption={"the dance"} imageSource={meme}/>
    </>
  )
}

export default App
