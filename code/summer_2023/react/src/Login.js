import { useState } from "react"

function Login() {
    // here we declare our state (i.e. whether the user is logged in or not)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    // this is one of the behaviours of the component
    let loginUser = () => {
        // this is how we change the state
        setIsLoggedIn(true)
    }

    // what the user sees
    if(isLoggedIn == false){
        return(<div>
            <button onClick={loginUser}>click to login</button>
        </div>)
    }else{
        return(<div>
           welcome back!
        </div>)
    }

 
}

export default Login;
