// File: src/components/3d/Scene.js
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  PerspectiveCamera,
  ScrollControls,
  Scroll
} from '@react-three/drei'

import BreakingCube from './BreakingCube'
import RotatingCube from './RotatingCube'
import SpinningTorus from './SpinningTorus'
import BouncingSphere from './BouncingSphere'

export default function Scene() {
  return (
    <Canvas style={{ width: '100%', height: '100vh', background: '#1a1a1a' }}>
      <Suspense fallback={null}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        {/* Enable scrolling through the scene. 
            "pages" sets how many "screen-heights" of scroll we have.
            Increase it if you have more objects or want more scroll space.
        */}
        <ScrollControls pages={4} damping={4}>
          {/* Place your 3D content inside <Scroll> */}
          <Scroll>
            {/* A camera (make it default) - remains fixed at start, 
                but react-three-drei ScrollControls will handle 
                offsetting the scene/camera as we scroll. 
            */}
            <PerspectiveCamera makeDefault position={[0, 0, 8]} />

            <OrbitControls enableZoom={false} />

            {/* Each component is placed at a different position so 
                you'll encounter them as you scroll. 
            */}
            <BreakingCube position={[0, 0, 0]} />
            <RotatingCube position={[0, -6, 0]} />
            <SpinningTorus position={[0, -12, 0]} />
            <BouncingSphere position={[0, -18, 0]} />
          </Scroll>
        </ScrollControls>
      </Suspense>
    </Canvas>
  )
}
