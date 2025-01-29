import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const AnimatedCube = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#00ff83" />
    </mesh>
  );
};

export default AnimatedCube;