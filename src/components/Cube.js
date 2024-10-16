import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshWobbleMaterial } from '@react-three/drei';

function Cube() {
  const meshRef = useRef();

  // Анимация вращения куба с помощью хука useFrame
  useFrame((state) => {
    const { mouse } = state;
    meshRef.current.rotation.x = mouse.y * Math.PI;
    meshRef.current.rotation.y = mouse.x * Math.PI;
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <boxGeometry args={[1, 1, 1]} />
      <MeshWobbleMaterial
        color="royalblue"
        speed={1} // Скорость "колебания" материала
        factor={0.6} // Амплитуда колебания
      />
    </mesh>
  );
}

export default Cube;
