import './App.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function App() {

  // this function saves the name of the current dialogue
  const [dialogueName, setDialogueName] = useState("")

  return (
    <>
    <h1>Leaflet Map</h1>
    <Link to={"/map"}>Click here to see our map!</Link>
    </>
  )
}

export default App
