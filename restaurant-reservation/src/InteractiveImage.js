import React, { useRef } from 'react'; // React and useRef hook import
import { Canvas, useFrame } from '@react-three/fiber'; // Imports from react-three/fiber

// This is a functional component for a rotating Box 
function Box() {
  const mesh = useRef(); // Creates a reference using useRef, which we can attach to the mesh.

  // useFrame is a react-three/fiber hook that allows us to run animations each frame
  // This function gets executed on every frame, which makes the box rotate around its X and Y axis.
  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  // This box component will show up as a rotating box in the 3D scene.
  return (
    <mesh ref={mesh}> {/* This attaches the mesh reference to this mesh */}
      {/* A Box geometry is added to the mesh */}
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      {/* This adds an orange material to the box */}
      <meshStandardMaterial attach="material" color="orange" />
    </mesh>
  );
}

// This is the main component that renders the Canvas and the Box
function InteractiveImage() {
  return (
    <Canvas style={{ width: '300px', height: '300px' }}>
      {/* This adds an ambient light to the whole scene */}
      <ambientLight />
      {/* This adds a point light at a specific position in the scene */}
      <pointLight position={[10, 10, 10]} />
      {/* This adds the Box component to the scene */}
      <Box />
    </Canvas>
  );
}

export default InteractiveImage;
