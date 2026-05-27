import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

function generateRandomPositions(count: number): Float32Array {
  const arr = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    arr[i * 3] = (Math.random() - 0.5) * 20
    arr[i * 3 + 1] = (Math.random() - 0.5) * 20
    arr[i * 3 + 2] = (Math.random() - 0.5) * 20
  }
  return arr
}

function RotatingDodecahedron() {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.rotation.x = time * 0.1
    meshRef.current.rotation.y = time * 0.15
    meshRef.current.position.y = Math.sin(time * 0.5) * 0.2
  })

  return (
    <mesh ref={meshRef} scale={1.5}>
      <dodecahedronGeometry args={[1, 0]} />
      <MeshDistortMaterial
        color="#8b5cf6"
        reflectivity={1}
        metalness={0.5}
        roughness={0.2}
        distort={0.3}
        speed={1.5}
      />
    </mesh>
  )
}

function ParticleBackground() {
  const pointsRef = useRef<THREE.Points>(null!)
  const positions = useMemo(() => generateRandomPositions(2000), [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.01
    }
  })

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        size={0.03}
        color="#ffffff"
        sizeAttenuation={true}
        transparent
        opacity={0.4}
      />
    </Points>
  )
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          color="#8b5cf6"
          castShadow
        />
        <spotLight
          position={[-10, -10, -10]}
          angle={0.15}
          penumbra={1}
          intensity={0.5}
          color="#ec4899"
        />
        <RotatingDodecahedron />
        <ParticleBackground />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  )
}