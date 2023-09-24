// variable: assign value and stores data
let theName = "pierre" // string data
let score = 2390 // number data
let isVisible = true; // boolean (true/false) data


// this function finds the element in the document with the id "links"
// puts the element it found inside the variable called theLinks
// then it sets the display attribute of the style of the element to block
function showLinks() {
    let theLinks = document.getElementById("links")
    theLinks.style.display = "block"
}

// this does the same thing, but sets the style to none
function hideLinks(){
    let theLinks = document.getElementById("links")
    theLinks.style.display = "none"
}

function greet(){
    // first, we need to grab the html element that we want to use to display our message
    let theElement = document.getElementById("welcome-message")

    // second, we need to change the text inside the element
    theElement.innerText = "hello, " + theName
}

// this one is a bit more complex. we can have both showing and hiding behaviours by keeping track of whether we are showing the legend or not
let isLegendShowing = false;
function toggleLegend(){

    let theLegend = document.getElementById("legend")
    console.log("is the legend showing?", isLegendShowing)

    if(isLegendShowing == false){
        console.log("so now we show the legend")
        theLegend.style.display = "block"
        isLegendShowing = true
    }else{
        console.log("so now we hide the legend")
        theLegend.style.display = "none"
        isLegendShowing = false
    }
}

