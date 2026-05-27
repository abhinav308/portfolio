import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, MeshDistortMaterial } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import { useScroll } from 'framer-motion'
import * as THREE from 'three'

function Experience3DObject() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const progress = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1 + scrollProgress * Math.PI
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15 + scrollProgress * Math.PI * 2
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <mesh ref={meshRef} scale={1.2}>
      <dodecahedronGeometry args={[0.8, 0]} />
      <MeshDistortMaterial
        color="#8b5cf6"
        reflectivity={1}
        metalness={0.5}
        roughness={0.2}
        distort={0.3}
        speed={2}
      />
    </mesh>
  )
}

export default function Experience3D() {
  const targetRef = useRef<HTMLDivElement>(null!)
  
  useScroll({
    target: targetRef,
    offset: ["start center", "end center"]
  })

  return (
    <div ref={targetRef} className="absolute top-1/2 -translate-y-1/2 -right-16 w-48 h-48 opacity-30 pointer-events-none hidden lg:block">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.7} />
        <spotLight
          position={[5, 5, 5]}
          angle={0.3}
          intensity={1}
          color="#8b5cf6"
        />
        <spotLight
          position={[-5, -5, -5]}
          angle={0.3}
          intensity={0.5}
          color="#ec4899"
        />
        <Experience3DObject />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  )
}