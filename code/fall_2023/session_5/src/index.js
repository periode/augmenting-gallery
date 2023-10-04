import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// these are our two components, About.js and App.js
import App from './App';
import About from './About'

const root = ReactDOM.createRoot(document.getElementById('root'));

// here, we define our router (i.e. which component we should show for which URL)
// in this case, if we go to 'localhost:3000' we show <App/>
// if we go to 'localhost:3000/about' we show <About/>
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
