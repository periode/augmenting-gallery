import "./Sidewalk.css"

function Sidewalk({name, description}){
    return(
        <div class="sidewalk">
            <h1>
                { name }
            </h1>
            <div>
                { description }
            </div>
        </div>
    )
}

export default Sidewalk
