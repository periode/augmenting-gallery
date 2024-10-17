// props are data/variable that we give to components
// the photo requires a caption and it requires a image
function Photo({caption, imageSource}) {

    return(<div>
        <img width="200px" src={imageSource} />
        <p>{ caption }</p>
    </div>)
}

export default Photo;
