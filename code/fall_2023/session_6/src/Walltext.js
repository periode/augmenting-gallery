import styles from "./walltext.module.css"

function Walltext(props) {
    console.log(styles);
    return(<div className={styles.walltextcontents}>
        <h1>wall text</h1>
    </div>)
}

export default Walltext;
