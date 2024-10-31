import './App.css'
import Sidewalk from './components/Sidewalk'
import { useState } from 'react'

// here we have a list of descriptions for tokyo and berlin. each description has 3 entries (our slider <input type="range"> also has a range of 3 values, this is not a coincidence!)
const tokyoDescriptions = [
  "tokyo sometimes has no sidewalks",
  "particular neighborhoods of tokyo do not make the distinction between sidewalks and roads",
  "in tokyo, the urban density suggests a compression, or optimization, of the shared urban space. therefore, pedestrians and vehicles just need to share the same surface"
]

const berlinDescriptions = [
  "berlin has big sidewalks",
  "the history of berlin has led to a city that is not very dense, so there's a lot of space for sidewalks",
  "in the urbanization process in the late 19th century, Berlin extended beyond far beyond its walls, and thus needed wide sidewalks to accomodate horse carriage deliveries. additionally, the second world war destroyed a lot of the buildings, and the subsequent undesirability of the city prevented to much density"
]

function App() {

  // this is how we create new variables in React.
  // the left part (e.g. currentAbstractionLevel) is to read the information inside the variable
  // the right part (e.g. setCurrentAbstractionLevel) is to changre the information inside the variable
  const [currentAbstractionLevel, setCurrentAbstractionLevel] = useState("move the slide to change abstraction levels")
  const [currentAbstractionValue, setCurrentAbstractionValue] = useState(0)

  // this is the function that gets executed when ever we change the slider
  const handleAbstractionLevelChange = (event) => {
    var value = parseInt(event.target.value)
    setCurrentAbstractionValue(value) // we save the value coming from the slider to the currentAbstractionValue variable

    if(value == 0) { // == is comparing left and right
      // currentAbstractionLevel = "not abstract at all" // = is assigning right to left
      setCurrentAbstractionLevel("very abstract")
    }else if(value == 1) {
      // currentAbstractionLevel = "kinda abstract"
      setCurrentAbstractionLevel("kinda abstract")
    }else if(value == 2) {
      // currentAbstractionLevel = "very abstract"
      setCurrentAbstractionLevel("very detailed")
    }

    console.log(currentAbstractionLevel)
  }


  return (
    <>
    <h1>Abstract sidewalks</h1>
    {/* this is our slider, which goes from 0 to 2, starts at 1 (the initial value of currentAbstractionValue, see line 25) and which executes the function handleAbstractionChange every time it is moved */}
    <input type="range" min="0" max="2" defaultValue={currentAbstractionValue} onChange={handleAbstractionLevelChange}/>
    {/* this is where we display the text informing the user of the current abstraction value */}
    <div>{currentAbstractionLevel}</div> 
   
   {/* this class .sidewalk-container allows us to layout the sidewalks side by side */}
   <div class="sidewalk-container"> 
    <Sidewalk name={"Tokyo"} description={tokyoDescriptions[currentAbstractionValue]}/>
    <Sidewalk name={"Berlin"} description={berlinDescriptions[currentAbstractionValue]}/>
   </div>
    </>
  )
}

export default App
