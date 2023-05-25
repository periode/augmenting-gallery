console.log('hello world')

// we declare a variable with the keyword 'let'
let theNewText = "hello world"

// the two main actions in javascript is manipulating the HTML and reacting to user actions.\
// to manipulate the HTML, we first need to access (a) specific element(s):
// e.g. document.getElementById("the-id-specified-in-the-html")

// to react to user actions, we need to tell an element what to do when a specific action (event) happens:
// e.g myElement.addEventListener("click", myFunctionToBeCalledOnClick)

let replaceText = () => {
    let par = document.getElementById("paragraph-section-1")

    par.innerText = theNewText
}

// global and local variables exist in different _scopes_. these are global.
// if we were to do the same thing within, e.g., the onImageEnter function, such a variable would be local
let image = document.getElementById("sitting-on-ledge")
let legend = document.getElementById("sitting-on-ledge-legend")

// function to be called when the "mouseenter" event happens for the image element
let onImageEnter = () => {
    console.log("mouse entered!")
    legend.style.display = "block"
}

// function to be called when the "mouseleave" event happens for the image element
let onImageExit = () => {
    console.log("mouse exit!")
    legend.style.display = "none"
}

image.addEventListener("mouseenter", onImageEnter)
image.addEventListener("mouseleave", onImageExit)