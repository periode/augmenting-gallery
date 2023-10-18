// this is the absolute minimum skeleton for a component

import { Link } from "react-router-dom";

function About(){
    return(<div>
        this is my about page. <Link to="/">Click here</Link> to go back.
    </div>)
}

export default About;
