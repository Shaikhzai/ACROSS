/* import Image from 'next/image';
import Background from '../../public/images/intro_assets/3.jpg';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

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
        <div className='relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between'>
            <p className='text-[5vw] uppercase mix-blend-difference'>Our Services</p>
            <p className='w-[50vw] text-[2vw] self-end uppercase mix-blend-difference'><span className="text-gray-600">Our Services mean the world to us</span>, We pride ourselves on creating welcoming and comfortable experiences for our clients and partners across all our services. Our commitment to exceptional service ensures that every interaction with <span className="text-gray-600">ACROSS</span> is marked by warmth, professionalism, and a genuine desire to exceed expectations.</p>
        </div>
        <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
            <motion.div style={{y}} className='relative w-full h-full'>
            <Image src={Background} fill alt="image" style={{objectFit: "cover"}}/>
            </motion.div>
        </div>
        </div>
    )
} */

    import Image from 'next/image';
    import Background from '../../public/images/intro_assets/3.jpg';
    import { useScroll, useTransform, motion } from 'framer-motion';
    import { useRef } from 'react';
    
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
                style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
            >
                <div className='relative z-10 p-10 md:p-20 text-white w-full h-full flex flex-col justify-between'>
                    {/* Responsive text size */}
                    <p className='text-[10vw] md:text-[5vw] uppercase mix-blend-difference'>
                        Our Services
                    </p>
                    {/* Responsive width and font size for the paragraph */}
                    <p className='w-full md:w-[50vw] text-[4vw] md:text-[2vw] self-end uppercase mix-blend-difference'>
                        <span className="text-gray-600">Our Services mean the world to us</span>, We pride ourselves on creating welcoming and comfortable experiences for our clients and partners across all our services. Our commitment to exceptional service ensures that every interaction with <span className="text-gray-600">ACROSS</span> is marked by warmth, professionalism, and a genuine desire to exceed expectations.
                    </p>
                </div>
                {/* Responsive container for the background image */}
                <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
                    <motion.div style={{ y }} className='relative w-full h-full'>
                        <Image 
                            src={Background} 
                            fill 
                            alt="image" 
                            style={{ objectFit: "cover" }} 
                        />
                    </motion.div>
                </div>
            </div>
        )
    }
    