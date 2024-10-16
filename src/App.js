import React from 'react';
import { Canvas } from '@react-three/fiber';
import Cube from './components/Cube';

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube />
    </Canvas>
  );
}

export default App;
