import Model from './Model.js'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function ThreeD() {
    return (
        <div className="canvasContainer">
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <OrbitControls />
                <Model />
            </Canvas>
        </div>
    )
}

export default ThreeD;