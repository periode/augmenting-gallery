import './App.css'
import { Link } from 'react-router-dom'
import Sidewalk from './components/Sidewalk'
import { useState } from 'react'

function App() {

  // var currentAbstractionLevel = "not abstract"
  const [currentAbstractionLevel, setCurrentAbstractionLevel] = useState("move the slide to change abstraction levels")

  const handleAbstractionLevelChange = (event) => {
    var currentValue = event.target.value;

    if(currentValue == "0") { // == is comparing left and right
      // currentAbstractionLevel = "not abstract at all" // = is assigning right to left
      setCurrentAbstractionLevel("not abstract at all")
    }else if(currentValue == "1") {
      // currentAbstractionLevel = "kinda abstract"
      setCurrentAbstractionLevel("kinda abstract")
    }else if(currentValue == "2") {
      // currentAbstractionLevel = "very abstract"
      setCurrentAbstractionLevel("very abstract")
    }

    console.log(currentAbstractionLevel)
  }


  return (
    <>
    <h1>Abstract sidewalks</h1>
    <div>
      Visit the about page here: <Link to={"/about"}>click here</Link>
    </div>

    <input type="range" min="0" max="2" defaultValue={1} onChange={handleAbstractionLevelChange}/>
    <div>{currentAbstractionLevel}</div>
   
   <div class="sidewalk-container">
    <Sidewalk sidewalkName={"Tokyo"} />
    <Sidewalk sidewalkName={"D.C."} />
    <Sidewalk sidewalkName={"Berlin"} />
   </div>
    </>
  )
}

export default App
