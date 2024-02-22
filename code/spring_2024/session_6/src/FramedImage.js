// we import the styles like this, which allows us to use specific CSS classes which do not clash with other components
import styles from './styles/FramedImage.module.css'

// the "props" object holds all the information we're giving to the component (see App.js, lines 21-23)
function FramedImage(props) {
    return (<div className={styles.image}>
        <img height="200" src={props.image} />
        <div>{props.legend}</div>
    </div>)
}

export default FramedImage;
