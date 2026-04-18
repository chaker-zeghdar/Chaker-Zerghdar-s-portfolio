import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Model() {
  const meshRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/drone.glb");

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <primitive
      ref={meshRef}
      object={scene}
      scale={1}
      position={[0, 0, 0]}
    />
  );
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={2} />
      <pointLight position={[10, 10, 10]} intensity={3} />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={3} />
      
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Float>
    </>
  );
}

export function Hero3D() {
  return (
    <div className="mt-4 md:mt-10 h-[250px] md:h-[500px] w-full lg:max-w-[600px] pointer-events-none">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
}