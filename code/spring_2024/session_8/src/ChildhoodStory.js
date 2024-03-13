// 1. every component is actually a function!
function ChildhoodStory(){
    // 2. every component returns some html
    return(<div>
        <h1>Childhood story!</h1>
        <p>every thing i type here!!!!</p>
        
    </div>)
}

// 3. this allows other files to use the component
export default ChildhoodStory;
