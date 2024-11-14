# React map example

In this example, we display a map on a separate page.

In `main.jsx`, we set up the router to add a `/map` route that leads to the `<Map/>` component.

In [`index.html`](./index.html), we add the `script` and `link` tags, as per the [Leaflet Setup guide](https://leafletjs.com/examples/quick-start/) (follow only the "Preparing your Page" section). In [`index.css`](./src/index.css), we add a rule at the bottom of the file.

Then, we need to install the packages to use Leaflet in React (called [React-Leaflet](https://react-leaflet.js.org)). In the terminal, go to your project folder, and type `npm install leaflet react-leaflet`.

Finally, in the [`Map.jsx`](./src/Map.jsx), we import all the necessary components (`MapContainer`, `TileLayer`, etc.) and we use them inside the `return()` part of the component.
