import { useEffect, useState } from 'react';
import { dialogues } from '../data/dialogues'
import './DialogueBox.css'

function DialogueBox ({name}) {

    // this variable keeps track of which line of dialogue we're showing
    const [currentLine, setCurrentLine] = useState(0)
    // this variable is keeping track of the current name we're displaying
    const [currentName, setCurrentName] = useState("")

    // this function checks if the variable `name` (that we get on line 5) has changed
    useEffect(() => {
            // there is a new name (e.g. going from "character 1" to "character 2"), then we reset the whole thing
            setCurrentName(name)
            setCurrentLine(0)
    }, [name])

    // this function increases the currentLine of dialogue
    const nextDialogue = () => {
        // only if there are still dialogue lines to display
        if(currentLine < dialogues[name].length-1){
            setCurrentLine(currentLine+1)
        }else{ // otherwise we set the name to "" to hide the dialogue
            setCurrentName("")
        }
    }

    // this line allows us to inspect the dialogues in the console of the browser. check it out!
    console.log(dialogues)

    // we only show some HTML if we have the name of the dialogue
    if(currentName != ""){
        return(<div className="dialogue-box">
            <div className="dialogue-name">
                {currentName}
            </div>
            {/* here, we show a given line of a given dialogue (e.g. line 2 of dialogue "character 1") */}
            <div className="dialogue-lines">
                {dialogues[name][currentLine]}
            </div>
            <button className="dialogue-next" onClick={nextDialogue}>next</button>
        </div>)
    }else{ // if we don't have a name, then we show nothing
        return (<>
        </>)
        }
}

export default DialogueBox;
