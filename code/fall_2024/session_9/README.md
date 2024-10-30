# React routing example

This project builds on the one from [session 6](../session_6/README.md).

The main changes is that we have added a navigate between pages, which we can do with the [React-Router package](https://reactrouter.com/).

## Installing

1. In the terminal, go to your project folder (using `cd`)
2. Install the package with the command: `npm install react-router-dom`

## Using

The Router package is used in the [`main.jsx`](./src/main.jsx) file, because it operates over our whole app.

First, import the necessary components by adding the line:

```js
import {
  createBrowserRouter, RouterProvider, } from "react-router-dom";
```

at the top of the file, along with the other import statements.

Then, create a very minimal `router` variable (which shows the `<App/>` component on the base URL) by adding the lines:

```js
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  }
]);
```

right after all the import statements.

Finally, replace the `<App/>` component in the `createRoot` function at the bottom of the file with a `<RouterProvider/>`.

If you want to __add a new route__, you can extend the data that you specificy when you create the router variable. Below, we add a route that connects the `/about` URL to show the `<About />` component (don't forget to `import` any component that you use in the router!).

```js
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: <About />
  }
]);
```

## Linking

If you want to link from one component to another, you have to use the `<Link>` component, which works just like the traditional HTML `<a>` tag.

1. Import the component with `import { Link } from 'react-router-dom'`
2. Use it to link to another page by specifiying the `to` prop. For instance, to go to `/about`, you can write: `<Link to={"/about"}>about page</Link>`.
3. Because we've specified it in `main.jsx`, the router will know that it should show the `<About/>` component!

## Additional Resources

- [React-Router tutorial](https://reactrouter.com/en/main/start/tutorial)
