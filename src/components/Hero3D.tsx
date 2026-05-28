import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
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
      <meshPhysicalMaterial
        color="#3b82f6"
        emissive="#1e40af"
        emissiveIntensity={0.3}
        reflectivity={1}
        metalness={0.7}
        roughness={0.1}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </mesh>
  )
}

function WaveCircle() {
  const torusRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (torusRef.current) {
      torusRef.current.rotation.z = time * 0.5
    }
  })

  return (
    <mesh ref={torusRef} position={[0, 0, -0.5]}>
      <torusKnotGeometry args={[1.5, 0.05, 48, 8, 2, 3]} />
      <meshBasicMaterial color="#fbbf24" transparent opacity={0.4} side={THREE.DoubleSide} />
    </mesh>
  )
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#60a5fa" />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#fbbf24" />
        <InteractiveIcosahedron />
        <WaveCircle />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  )
}