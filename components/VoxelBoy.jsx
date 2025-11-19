"use client";
import * as THREE from 'three';

function Voxel({ size = [1, 1, 1], color = '#ffffff', position = [0, 0, 0] }) {
  return (
    <mesh castShadow receiveShadow position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} roughness={1} metalness={0} flatShading />
    </mesh>
  );
}

export function VoxelBoy({ position = [0, 0, 0] }) {
  const skin = '#d1a374';
  const hair = '#3a2a1a';
  const shirt = '#2d3a7a';
  const pants = '#23304e';
  const shoe = '#222222';

  return (
    <group position={position}>
      {/* Chair */}
      <Voxel size={[0.4, 0.05, 0.4]} color={'#4a3823'} position={[0.0, 0.25, 0.1]} />
      <Voxel size={[0.05, 0.45, 0.05]} color={'#4a3823'} position={[0.15, 0.0, 0.25]} />
      <Voxel size={[0.05, 0.45, 0.05]} color={'#4a3823'} position={[-0.15, 0.0, -0.05]} />

      {/* Legs */}
      <Voxel size={[0.22, 0.28, 0.22]} color={pants} position={[-0.08, 0.35, 0.05]} />
      <Voxel size={[0.22, 0.28, 0.22]} color={pants} position={[0.08, 0.35, 0.05]} />
      <Voxel size={[0.26, 0.12, 0.26]} color={shoe} position={[-0.08, 0.15, 0.08]} />
      <Voxel size={[0.26, 0.12, 0.26]} color={shoe} position={[0.08, 0.15, 0.08]} />

      {/* Torso */}
      <Voxel size={[0.5, 0.4, 0.3]} color={shirt} position={[0, 0.65, 0]} />

      {/* Arms leaning on desk */}
      <Voxel size={[0.14, 0.14, 0.32]} color={skin} position={[-0.25, 0.65, 0.16]} />
      <Voxel size={[0.14, 0.14, 0.32]} color={skin} position={[0.25, 0.65, 0.16]} />

      {/* Head */}
      <Voxel size={[0.36, 0.36, 0.36]} color={skin} position={[0, 0.98, 0]} />
      {/* Hair cap */}
      <Voxel size={[0.38, 0.14, 0.38]} color={hair} position={[0, 1.12, 0]} />

      {/* Book open under lamp (extra focus) */}
      <Voxel size={[0.5, 0.04, 0.35]} color={'#e8dfc3'} position={[0.2, 0.82, 0.0]} />
      <Voxel size={[0.02, 0.04, 0.35]} color={'#b08c54'} position={[-0.03, 0.82, 0.0]} />
    </group>
  );
}
