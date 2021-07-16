import React from 'react';

const ThreeSphere = () => {
  return (
    <mesh>
      <sphereGeometry args={[100, 32, 32]} />
      <meshBasicMaterial color="#f7f7f7" transparent={true} opacity={0.6} />
    </mesh>
  );
};

export default ThreeSphere;
