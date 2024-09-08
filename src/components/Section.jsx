import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

import Background from '../../public/images/intro_assets/introImg2.jpg';

export default function Section() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div
        ref={container} 
        className='relative flex items-center justify-center h-screen overflow-hidden'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
        <div className='relative z-10 p-10 md:p-20 text-white w-full h-full flex flex-col justify-between'>
            <p className='text-[10vw] md:text-[5vw] uppercase mix-blend-difference'>ABOUT US</p>
            <p className='w-full md:w-[50vw] text-[4vw] md:text-[2vw] self-end uppercase mix-blend-difference'>Welcome to ACROSS, With a diverse portfolio of services, we are dedicated to connecting people and opportunities across the globe. At ACROSS, we are committed to delivering exceptional service, driving innovation, and fostering long-lasting relationships. Join us on a journey that knows no boundaries.</p>
        </div>
        <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
            <motion.div style={{y}} className='relative w-full h-full'>
                                <Image
                        src={Background}
                        alt="Background Image"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        priority
                    />
            </motion.div>
        </div>
        </div>
    )
}