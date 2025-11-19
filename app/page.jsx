"use client";
import { Canvas } from '@react-three/fiber';
import { Scene } from '../components/Scene.jsx';

export default function Page() {
  return (
    <main style={{ width: '100vw', height: '100vh' }}>
      <Canvas
        gl={{ antialias: false, alpha: false }}
        dpr={[1, 1]}
        camera={{ position: [4, 3, 6], fov: 50 }}
        style={{ imageRendering: 'pixelated', background: '#0b0a08' }}
      >
        <Scene />
      </Canvas>
      <div style={{ position: 'fixed', bottom: 12, left: 12, opacity: 0.8, fontFamily: 'ui-sans-serif, system-ui' }}>
        3D pixel study ? dim golden glow
      </div>
    </main>
  );
}
