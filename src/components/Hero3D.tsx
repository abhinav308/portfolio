import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, MeshDistortMaterial } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function InteractiveIcosahedron() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const { mouse } = useThree()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.05 + mouse.y * 0.5
      meshRef.current.rotation.y = time * 0.07 + mouse.x * 0.5
      meshRef.current.position.x = mouse.x * 0.5
      meshRef.current.position.y = mouse.y * 0.3
    }
  })

  return (
    <mesh ref={meshRef} scale={2}>
      <icosahedronGeometry args={[1, 0]} />
      <MeshDistortMaterial
        color="#3b82f6"
        emissive="#1e40af"
        emissiveIntensity={0.3}
        reflectivity={1}
        metalness={0.7}
        roughness={0.1}
        distort={0.4}
        speed={2}
      />
    </mesh>
  )
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#3b82f6" />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#60a5fa" />
        <InteractiveIcosahedron />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  )
}