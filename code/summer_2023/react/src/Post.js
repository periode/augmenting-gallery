import './Post.css'

function Post({title, content}) {
    return (
        <div className="post">
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}

export default Post;