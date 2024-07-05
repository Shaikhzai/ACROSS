'use client';
import { Canvas, useLoader } from '@react-three/fiber'
import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { motion } from 'framer-motion-3d';
export default function earth() {

    const [color, normal, aoMap] = useLoader(TextureLoader, [
        '/images/3dEarth_assets/color.jpg',
        '/images/3dEarth_assets/occlusion.jpg',
        '/images/3dEarth_assets/normal.png'
    ])

    const scene = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scene,
        offset: ['start end', 'end start']
    })

    return (
        <Canvas ref={scene}>
            <ambientLight intensity={0.1} />
            <directionalLight intensity={3.5} position={[1, 0, -.25]} />
            <motion.mesh scale={2.5} rotation-y={scrollYProgress}>
                <sphereGeometry args={[1, 64, 64]}/>
                <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap}/>
            </motion.mesh>
        </Canvas>
    )
}