import styles from "./styles/Song.module.css"

function Song(props) {
    return(<div class={styles.songCard}>
        <div><a target="_blank" href={props.data.url}>{props.data.title}</a> by {props.data.artist}</div>
    </div>)
}

export default Song;
