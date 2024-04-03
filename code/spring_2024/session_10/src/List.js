import Song from "./Song";
import songs from "./data/songs";

function List() {


    return(<div>

        <h1>here is my list of songs</h1>

        {songs.map((song_item) => {
            return <Song data={song_item}/>
        })}

    </div>)
}

export default List;
