import './App.css'
import { useState } from 'react'
import DialogueBox from './components/DialogueBox'

function App() {

  // this function saves the name of the current dialogue
  const [dialogueName, setDialogueName] = useState("")

  return (
    <>
    <h1>Dialogues</h1>
    
    {/* this button sets the dialogue to "character 1" */}
    <button onClick={() =>setDialogueName("character 1")}>character 1</button>
    {/* this function sets the dialogue to character 2 */}
    <button onClick={() => setDialogueName("character 2")}>character 2</button>
    
   <div className="dialogue-container"> 
    {/* this is the component which will display our dialogue, so we give it the current dialogue name */}
    <DialogueBox name={dialogueName} />
   </div>
    </>
  )
}

export default App
