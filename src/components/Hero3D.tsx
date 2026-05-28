import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'

function InteractiveSphere() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const { mouse } = useThree()
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.1 + mouse.y * 0.3
      meshRef.current.rotation.y = time * 0.15 + mouse.x * 0.3
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, mouse.x * 0.2, 0.1)
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, mouse.y * 0.1, 0.1)
      meshRef.current.scale.setScalar(hovered ? 2.1 : 2)
    }
  })

  return (
    <mesh ref={meshRef} scale={2} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhysicalMaterial
        color="#d4af37"
        emissive="#facc15"
        emissiveIntensity={0.2}
        metalness={0.9}
        roughness={0.1}
        clearcoat={1}
        clearcoatRoughness={0.05}
        reflectivity={1}
      />
    </mesh>
  )
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#fbbf24" />
        <directionalLight position={[-5, -5, -5]} intensity={0.4} color="#60a5fa" />
        <Environment preset="night" background={false} />
        <InteractiveSphere />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  )
}