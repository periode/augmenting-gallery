import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Catalogue from './Catalogue';
import List from './List';
import reportWebVitals from './reportWebVitals';

// the router part is how we can create multiple pages
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FramedImage from './FramedImage';
import About from './About';

// here, we list each route, and the component that should be shown when the user goes there
// for instance, if they go to "localhost:3000/about", we show the <About> component
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/image",
    element: <FramedImage legend="welcome!" />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/more",
    element: <About/>
  },
  {
    path: "/catalogue",
    element: <Catalogue />
  },
  {
    path: "/list",
    element: <List/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
