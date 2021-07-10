import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import ThreeSphere from './three-sphere';
import ThreeGeo from './three-geo';
import ThreeIss from './three-iss';

const ThreeScene = () => {
  return (
    <Canvas
      gl={{ antialias: false, alpha: false }}
      camera={{
        fov: 45,
        position: [0, 0, 300]
      }}
      onCreated={({ gl }) => {
        gl.setClearColor('#ffffff');
      }}
      style={{
        width: '100vw',
        height: '100vh',
        cursor: 'move'
      }}
    >
      <OrbitControls enableRotate={true} enableZoom={false} enablePan={false} />
      <ThreeSphere />
      <ThreeGeo />
      <ThreeIss />
    </Canvas>
  );
};

export default ThreeScene;
