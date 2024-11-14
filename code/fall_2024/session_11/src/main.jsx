import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Map from './Map.jsx';

// this is our router, which allows us to add more pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/map",
    element: <Map/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* let's not forget to add the RouterProvider and the router here! */}
    <RouterProvider router={router} />
  </StrictMode>,
)
