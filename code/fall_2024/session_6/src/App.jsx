import './App.css'
import Photo from "./components/Photo"
import dependency from "./assets/dependency.png" // i import the img file
import indiana from "./assets/indianajones.gif"
import meme from "./assets/this-is-fine.jpg"

function App() {

  return (
    <>
    {/* i give the image file to the photo component, along with a caption */}
      <Photo caption={"the park"} imageSource={dependency}/>
      <Photo caption={"the field"} imageSource={indiana}/>
      <Photo caption={"the dance"} imageSource={meme}/>
    </>
  )
}

export default App
