import styles from "./walltext.module.css"
// we import styles from a CSS file called modules

function Walltext(props) {

    return(
        <div>
            <div className={styles.walltextcontents}>
                <h1>wall text</h1>
            </div>
            <div className={styles.menu}>
                <div>home</div>
                <div>about</div>
                <div>contact</div>
            </div>
        </div>
    )
}

export default Walltext;
