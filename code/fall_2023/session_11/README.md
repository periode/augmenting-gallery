# Adding 3D models

The module we use is called [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction), and is based on [ThreeJS](https://threejs.org/).

In order to display a 3D model, there are several steps we need to follow:

1. Install React Three Fiber and additional helpers: `npm install three @react-three/fiber @react-three/drei`
2. Set up a new component (we do that in [`ThreeD.js`](./src/ThreeD.js))
3. In there, we need to put all our 3D related element inside a `<Canvas/>` element.
4. In order to load a 3D model, we need to import `{ useGLTF } from '@react-three/drei'`, give the name of our 3D model which should be inside the `public` folder, and then add it to a `<primitive>` component.
5. Finally, to see our 3D object, we need to add some lights! (i.e. at least one `<ambientLight/>`)
