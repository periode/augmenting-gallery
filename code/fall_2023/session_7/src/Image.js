import { useState } from "react";
import "./image.css"; //this is a custom css we created

// we need to have the 'props' variable in order to access the information given to us from App.js
// in this case, App.js gives us information called legend, credits and src, but we could pass more!


function Image(props) {
    const [size, setSize] = useState("400")
    
    function handleClick(){
        if(size == "400"){
            setSize("600")
            console.log("make bigger")
        }else if(size == "600"){
            setSize("400")
            console.log("make smaller")
        }
    }

    return (
    <div class="image">
        {/* we access this information by typing props.NAME-OF-INFORMATION passed from App.js */}
        {/* in this case, it's props.src, props.legend and props.legend */}
        {/* to show these variables in the HTML, don't forget to surround them with {} curly brackets! */}
        <img onClick={handleClick} width={size} src={props.src}></img>
        <div>{props.credits}</div>
        <div>{props.legend}</div>
    </div>
    )
}

export default Image;
