import { useState } from "react";

function Catalogue() {

    // TOGGLE BETWEEN AN IMAGE AND A TEXT

    // this is how we declare variables in react
    // if we want to GET the value, we use "language"
    // if we want to SET the value, we use "setLanguage"
    const [language, setLanguage] = useState("english")

    // this function is called by the button, with `onClick`
    function toggleLanguage() {

        // if the current language is english, we set it to deutsch
        if(language == "english"){
            setLanguage("deutsch")
        }else{ // otherwise, we set it to english
            setLanguage("english")
        }
    }

    return (<div>
        <h1>catalogue</h1>
        <div>
            {language == "english" ? // this is the equivalent of writing "if"
                <div>
                    <p>tired 1</p>
                    <p>no idea 2</p>
                    <p>five 3</p>
                </div>
                : // this is the equivalent of writing "else"
                <div>
                    <p>müde 1</p>
                    <p>keine Ahnung 2</p>
                    <p>funf 1</p>
                </div>
            }
        </div>
        <button onClick={toggleLanguage}>translate to {language == "english" ? "deutsch" : "english"}</button>
    </div>)
}

export default Catalogue;
