"use client";

function Book({ color = '#c43d3d', position = [0, 0, 0], size = [0.36, 0.05, 0.26] }) {
  return (
    <group position={position}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={size} />
        <meshStandardMaterial color={color} roughness={1} flatShading />
      </mesh>
      <mesh position={[0, size[1] / 2 + 0.001, 0]}>
        <boxGeometry args={[size[0] * 0.92, 0.004, size[2] * 0.96]} />
        <meshStandardMaterial color={'#efe6ca'} roughness={1} flatShading />
      </mesh>
    </group>
  );
}

export function Books({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <Book color="#b84b40" position={[0.0, 0.0, -0.18]} size={[0.36, 0.05, 0.22]} />
      <Book color="#4068b8" position={[0.12, 0.05, 0.05]} size={[0.30, 0.04, 0.2]} />
      <Book color="#3c8a56" position={[-0.18, 0.09, 0.12]} size={[0.26, 0.04, 0.18]} />
    </group>
  );
}
