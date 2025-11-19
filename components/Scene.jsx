"use client";
import { Suspense, useMemo } from 'react';
import * as THREE from 'three';
import { OrbitControls, SoftShadows } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import { VoxelBoy } from './VoxelBoy.jsx';
import { Books } from './props/Books.jsx';
import { OilLamp } from './props/OilLamp.jsx';

export function Scene() {
  const clayColor = '#7a5c3a';
  const wallColor = '#6d5436';
  const floorColor = '#5c452e';

  const wallMaterial = useMemo(() => new THREE.MeshStandardMaterial({ color: wallColor, roughness: 1, metalness: 0, flatShading: true }), []);
  const floorMaterial = useMemo(() => new THREE.MeshStandardMaterial({ color: floorColor, roughness: 1, metalness: 0, flatShading: true }), []);

  return (
    <Suspense fallback={null}>
      <SoftShadows size={8} samples={8} focus={0.6} />

      {/* Dim ambient */}
      <ambientLight intensity={0.08} color={'#3a2a1a'} />

      {/* Lamp warm light */}
      <pointLight position={[0.6, 1.1, 0.2]} intensity={2.4} color={'#ffdd88'} distance={6} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />

      {/* Room: floor and clay walls */}
      <group position={[0, 0, 0]}>
        {/* Floor */}
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
          <planeGeometry args={[10, 10, 1, 1]} />
          <primitive object={floorMaterial} attach="material" />
        </mesh>

        {/* Back wall */}
        <mesh castShadow receiveShadow position={[0, 1.5, -2.5]}>
          <boxGeometry args={[10, 3, 0.2]} />
          <primitive object={wallMaterial} attach="material" />
        </mesh>
        {/* Left wall */}
        <mesh castShadow receiveShadow rotation={[0, Math.PI / 2, 0]} position={[-2.5, 1.5, 0]}>
          <boxGeometry args={[10, 3, 0.2]} />
          <primitive object={wallMaterial} attach="material" />
        </mesh>
      </group>

      {/* Desk */}
      <group position={[0, 0, 0]}>
        <mesh castShadow receiveShadow position={[0.2, 0.75, 0]}>
          <boxGeometry args={[1.8, 0.08, 1]} />
          <meshStandardMaterial color={clayColor} roughness={1} flatShading />
        </mesh>
        {/* Legs */}
        {[-0.8, 0.8].map((x) => (
          [-0.46, 0.46].map((z) => (
            <mesh key={`leg-${x}-${z}`} castShadow receiveShadow position={[0.2 + x * 0.5, 0.38, z]}>
              <boxGeometry args={[0.08, 0.7, 0.08]} />
              <meshStandardMaterial color={clayColor} roughness={1} flatShading />
            </mesh>
          ))
        ))}
      </group>

      {/* Props: lamp and books */}
      <OilLamp position={[0.6, 0.82, 0.1]} />
      <Books position={[-0.2, 0.80, 0]} />

      {/* Character */}
      <VoxelBoy position={[-0.45, 0.0, 0.1]} />

      <EffectComposer disableNormalPass>
        <Bloom mipmapBlur intensity={1.1} luminanceThreshold={0.15} luminanceSmoothing={0.2} radius={0.85} />
        <Vignette eskil={false} offset={0.2} darkness={0.8} />
      </EffectComposer>

      <OrbitControls enablePan={false} enableDamping dampingFactor={0.08} minPolarAngle={0.8} maxPolarAngle={1.3} minDistance={3} maxDistance={7} />
    </Suspense>
  );
}
