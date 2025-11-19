"use client";
import * as THREE from 'three';

export function OilLamp({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      {/* Clay base */}
      <mesh castShadow receiveShadow position={[0, 0.03, 0]}>
        <cylinderGeometry args={[0.1, 0.14, 0.06, 8]} />
        <meshStandardMaterial color={'#8a6a42'} roughness={1} flatShading />
      </mesh>
      {/* Bowl */}
      <mesh castShadow receiveShadow position={[0, 0.07, 0]}>
        <cylinderGeometry args={[0.13, 0.13, 0.06, 8]} />
        <meshStandardMaterial color={'#7a5c3a'} roughness={1} flatShading />
      </mesh>
      {/* Wick base */}
      <mesh castShadow position={[0.0, 0.11, 0.02]}>
        <boxGeometry args={[0.04, 0.02, 0.04]} />
        <meshStandardMaterial color={'#3a2a1a'} roughness={1} flatShading />
      </mesh>
      {/* Flame */}
      <mesh position={[0.0, 0.15, 0.02]}>
        <sphereGeometry args={[0.035, 12, 12]} />
        <meshStandardMaterial color={'#ffd266'} emissive={'#ffcc55'} emissiveIntensity={2.2} toneMapped={false} />
      </mesh>
    </group>
  );
}
