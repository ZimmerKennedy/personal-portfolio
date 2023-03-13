import React from 'react'
import './test.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
const Test = () => {
  return (
    <div id='test-container'>
        <Canvas>
          <OrbitControls />
          <mesh>
            <boxGeometry args={[2,2,2]} />
          </mesh>
        </Canvas>
    </div>
  )
}

export default Test