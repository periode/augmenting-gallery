import './Home.css';
import { Link } from 'react-router-dom';


import Post from './Post.js';
import Login from './Login.js'

function Home() {


    return (
        <div className="App">

            <h1>hello!</h1>

            <div className="toc">
                here are the different links:
                <ul>
                    <li>
                        <Link className='toc-item' to="/3d">3d</Link>
                    </li>
                    <li>
                        <Link className='toc-item' to="/map">map</Link>
                    </li>
                    <li>
                        <Link className='toc-item' to="/api">api</Link>
                    </li>
                    <li>
                        <Link className='toc-item' to="about">about</Link>
                    </li>
                </ul>
            </div>

            <Login />
            <Post title="my first one" content="lorem ipsum"></Post>
            <Post title="the second one" content="lorem ipsum 2"></Post>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </div>
    );

}

export default Home;