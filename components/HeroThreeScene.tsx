'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshTransmissionMaterial, OrbitControls, TorusKnot } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

function PremiumObject() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.0035;
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, state.pointer.y * 0.28, 0.05);
    meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, state.pointer.x * 0.2, 0.05);
  });

  return (
    <Float speed={1.1} rotationIntensity={0.2} floatIntensity={0.6}>
      {/* Torus knot offers smooth fluid-like curvature with low-poly overhead for better FPS */}
      <TorusKnot ref={meshRef} args={[1.2, 0.36, 240, 36]} castShadow receiveShadow>
        {/* Transmission material creates a subtle glass-matte hybrid surface */}
        <MeshTransmissionMaterial
          thickness={0.45}
          roughness={0.25}
          transmission={0.78}
          ior={1.2}
          chromaticAberration={0.02}
          backside
          samples={8}
          resolution={512}
          color="#fff8ef"
        />
      </TorusKnot>
    </Float>
  );
}

export default function HeroThreeScene() {
  return (
    <div className="h-[380px] w-full md:h-[500px]">
      <Canvas shadows camera={{ position: [0, 0, 4.8], fov: 42 }} dpr={[1, 1.8]}>
        <Suspense fallback={null}>
          <color attach="background" args={['#ffffff']} />
          <ambientLight intensity={0.45} />
          <directionalLight position={[3, 5, 4]} intensity={1.15} color="#ffb07c" castShadow />
          <directionalLight position={[-4, 1, 2]} intensity={0.5} color="#ffffff" />
          <spotLight position={[0, -4, -2]} intensity={0.25} color="#ff8c42" />
          <PremiumObject />

          {/* Soft shadow plane to ground the object */}
          <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, -1.8, 0]}>
            <planeGeometry args={[8, 8]} />
            <shadowMaterial opacity={0.12} />
          </mesh>

          {/* HDR-like environment preset for premium specular reflections */}
          <Environment preset="studio" />

          {/* Subtle bloom gives high-end glow without overpowering the white layout */}
          <EffectComposer>
            <Bloom intensity={0.2} luminanceThreshold={0.72} luminanceSmoothing={0.9} mipmapBlur />
          </EffectComposer>

          <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}
