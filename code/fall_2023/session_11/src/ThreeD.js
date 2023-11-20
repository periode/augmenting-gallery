import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'

import './index.css';
import './App.css';


function ThreeD() {
    const { pomegranate } = useGLTF('/pomegranate.gltf')
    return (
        <div className="canvasContainer">
        <Canvas camera={{ fov: 35, zoom: 4, near: 1, far: 1000 }}>
        <ambientLight />
            <pointLight position={[0, 5, -10]} intensity={500} color={"#f8da77"}/>
            <pointLight position={[-20, 0, -10]} intensity={900} color={"#f8da77"}/>
            <primitive object={pomegranate}/>
            <OrbitControls/>
        </Canvas>
    </div>
    )
}

export default ThreeD;
