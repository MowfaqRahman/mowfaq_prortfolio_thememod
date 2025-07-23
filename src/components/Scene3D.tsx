import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';

function AnimatedSphere() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} scale={1.5}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function AnimatedTorus() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={[2, -1, 0]} scale={0.8}>
        <torusGeometry args={[1, 0.3, 16, 100]} />
        <MeshDistortMaterial
          color="#a855f7"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.2}
          metalness={0.6}
        />
      </mesh>
    </Float>
  );
}

function AnimatedBox() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.25;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.5}>
      <mesh ref={meshRef} position={[-2, 1, 0]} scale={0.6}>
        <boxGeometry args={[1, 1, 1]} />
        <MeshDistortMaterial
          color="#7c3aed"
          attach="material"
          distort={0.2}
          speed={1.8}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
    </Float>
  );
}

const Scene3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1}
          color="#8b5cf6"
        />
        <pointLight 
          position={[-10, -10, -5]} 
          intensity={0.8}
          color="#a855f7"
        />
        
        <AnimatedSphere />
        <AnimatedTorus />
        <AnimatedBox />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;