import { useState } from "react";
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'

function Catalogue() {
    const tower = useLoader(GLTFLoader, '/models/Wood_Tower.glb')

    // TOGGLE BETWEEN AN IMAGE AND A TEXT

    // this is how we declare variables in react
    // if we want to GET the value, we use "language"
    // if we want to SET the value, we use "setLanguage"
    const [language, setLanguage] = useState("english")
    const [colorRed, setColorRed] = useState(255)
    const [colorBlue, setColorBlue] = useState(255)

    function handleSliderRedChange(e) {
        console.log(e.target.value)
        setColorRed(e.target.value)
    }

    function handleSliderBlueChange(e) {
        console.log(e.target.value)
        setColorBlue(e.target.value)
    }

    // this function is called by the button, with `onClick`
    function toggleLanguage() {

        // if the current language is english, we set it to deutsch
        if (language == "english") {
            setLanguage("deutsch")
        } else { // otherwise, we set it to english
            setLanguage("english")
        }
    }

    return (
        <div style={{ backgroundColor: "rgb(" + colorRed + ", 255, " + colorBlue + ")" }}>
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
            <input type="range" min={0} max={255} onChange={handleSliderRedChange}></input>
            <input type="range" min={0} max={255} onChange={handleSliderBlueChange}></input>
            
            <div style={{ height: "900px" }}>

                <Canvas>
                    <ambientLight intensity={1} />
                    {/* <directionalLight color="blue" position={[0, 0, 5]} /> */}
                    {/* <directionalLight color="red" position={[0, 0, -5]} /> */}
                    <primitive
                        object={tower.scene}
                        position={[0, 1, 0]}
                        scale={[0.5, 0.5, 0.5]}
                        children-0-castShadow
                    />
                    <OrbitControls />
                </Canvas>
            </div>
        </div>)
}

export default Catalogue;
