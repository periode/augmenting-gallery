// to check if the script is loaded at all
// alert('script is loaded')

function makeImageDisappear() {
  // to check if the function is executed
  // alert('disappear')

  // get the DOM element of our image by its unique ID and
  // store it in a variable
  let theImage = document.getElementById("the-image");

  // check if the variable is what we expect
  // console.log gives an interactive output to the dev tools!
  console.log(theImage)

  // method 1 using DOM properties directly
  if (theImage.hidden) {
    theImage.hidden = false;
  } else {
    theImage.hidden = true;
  }

  // method 2 using styles
  // theImage.style.display = 'none';

  // method 3 using CSS classes
  // theImage.classList.add('disappeared')
}

// an array (list) of images
let imageGallery = [
  "http://placekitten.com/200/300",
  "http://placekitten.com/300/300",
  "http://placekitten.com/300/200",
];
// arrays are 0-indexed in JS!
let imageIndex = 0;
function nextGalleryImage() {
  let theImage = document.getElementById("the-image");
  imageIndex += 1;
  // if we reached the end of the array, start at the beginning
  if (imageIndex === imageGallery.length) {
    imageIndex = 0;
  }
  theImage.src = imageGallery[imageIndex];
}

// you can use :hover in CSS or two event listeners in JS
function mouseEntered() {
  console.log("entered");
  document.getElementById("the-image").style.opacity = 0.5;
}
function mouseLeft() {
  console.log("left");
  document.getElementById("the-image").style.opacity = 1;
}
