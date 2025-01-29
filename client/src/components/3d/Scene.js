import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import AnimatedCube from './AnimatedCube';

const Scene = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas style={{ height: '100vh', background: '#1a1a1a' }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedCube />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </Suspense>
  );
};

export default Scene;