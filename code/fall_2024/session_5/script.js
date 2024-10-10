// we define a function called greetUser, which is going to ask the visitor for a name, grab an HTML element, and modify it's text to greet the user
function greetUser() {
    // we prompt the user to enter a name
    var visitorName = prompt("what is your name?")

    // we need to grab an html element
    var welcomeMessageElement = document.getElementById("welcome-message")
    
    if(visitorName == "") { // if the visitor left the name empty
        welcomeMessageElement.innerText = "Welcome!"
    }else if(visitorName == null){ // if the visitor cancelled the process
        welcomeMessageElement.innerText = "Welcome!"
    }else{ // in any other case, that means we have a name we can use
        welcomeMessageElement.innerText = "Welcome,  "+visitorName+"!"
    }
}

function toggleImageSize(event) {
    var clickedImage = event.target;
    clickedImage.classList.toggle("smallImage")
}

function addTwo(number) {
    return number + 2
}

var result = addTwo(10) 
console.log(result)
