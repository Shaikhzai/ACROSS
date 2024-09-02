// components/StickySection.js
import styles from './style2.module.css';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

import Background from '../../../public/images/intro_assets/introImg.jpg';

const StickySection = () => {

  const container = useRef();
  const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div>
      {/* Events Content */}
        <div
        ref={container} 
        className='relative flex items-center justify-center h-screen overflow-hidden bg-black'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
        <div className='relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between'>
            <p className='text-[5vw] uppercase mix-blend-difference'>Events</p>
            <p className='w-[50vw] text-[2vw] self-end uppercase mix-blend-difference'>Welcome to ACROSS, With a diverse portfolio of services, we are dedicated to connecting people and opportunities across the globe. At ACROSS, we are committed to delivering exceptional service, driving innovation, and fostering long-lasting relationships. Join us on a journey that knows no boundaries.</p>
        </div>
        <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
            <motion.div style={{y}} className='relative w-full h-full'>
            <Image src={Background} fill alt="image" style={{objectFit: "cover"}}/>
            </motion.div>
        </div>
        </div>
      <div>
        <section className={`${styles.sticky} ${styles.stickyTop}`}>
          <h1 className={styles.title}>This sticky is position top</h1>
        </section>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <section className={`${styles.sticky} ${styles.stickyBottom}`}>
          <h1 className={styles.title}>This sticky is position bottom</h1>
        </section>
      </div>

      {/* Tourism Content */}
      <div
        ref={container} 
        className='relative flex items-center justify-center h-screen overflow-hidden bg-black'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
        <div className='relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between'>
            <p className='text-[5vw] uppercase mix-blend-difference'>TOURISM</p>
            <p className='w-[50vw] text-[2vw] self-end uppercase mix-blend-difference'>Welcome to ACROSS, With a diverse portfolio of services, we are dedicated to connecting people and opportunities across the globe. At ACROSS, we are committed to delivering exceptional service, driving innovation, and fostering long-lasting relationships. Join us on a journey that knows no boundaries.</p>
        </div>
        <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
            <motion.div style={{y}} className='relative w-full h-full'>
            <Image src={Background} fill alt="image" style={{objectFit: "cover"}}/>
            </motion.div>
        </div>
        </div>

        <div>
        <section className={`${styles.sticky} ${styles.stickyTop}`}>
          <h1 className={styles.title}>This sticky is position top</h1>
        </section>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <section className={`${styles.sticky} ${styles.stickyBottom}`}>
          <h1 className={styles.title}>This sticky is position bottom</h1>
        </section>
      </div>

      {/* real estate Content */}
      <div
        ref={container} 
        className='relative flex items-center justify-center h-screen overflow-hidden bg-black'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
        <div className='relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between'>
            <p className='text-[5vw] uppercase mix-blend-difference'>real estate</p>
            <p className='w-[50vw] text-[2vw] self-end uppercase mix-blend-difference'>Welcome to ACROSS, With a diverse portfolio of services, we are dedicated to connecting people and opportunities across the globe. At ACROSS, we are committed to delivering exceptional service, driving innovation, and fostering long-lasting relationships. Join us on a journey that knows no boundaries.</p>
        </div>
        <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
            <motion.div style={{y}} className='relative w-full h-full'>
            <Image src={Background} fill alt="image" style={{objectFit: "cover"}}/>
            </motion.div>
        </div>
        </div>

        <div>
        <section className={`${styles.sticky} ${styles.stickyTop}`}>
          <h1 className={styles.title}>This sticky is position top</h1>
        </section>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <section className={`${styles.sticky} ${styles.stickyBottom}`}>
          <h1 className={styles.title}>This sticky is position bottom</h1>
        </section>
      </div>

      {/* Transportation Content */}
      <div
        ref={container} 
        className='relative flex items-center justify-center h-screen overflow-hidden bg-black'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
        <div className='relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between'>
            <p className='text-[5vw] uppercase mix-blend-difference'>transportation</p>
            <p className='w-[50vw] text-[2vw] self-end uppercase mix-blend-difference'>Welcome to ACROSS, With a diverse portfolio of services, we are dedicated to connecting people and opportunities across the globe. At ACROSS, we are committed to delivering exceptional service, driving innovation, and fostering long-lasting relationships. Join us on a journey that knows no boundaries.</p>
        </div>
        <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
            <motion.div style={{y}} className='relative w-full h-full'>
            <Image src={Background} fill alt="image" style={{objectFit: "cover"}}/>
            </motion.div>
        </div>
        </div>

        <div>
        <section className={`${styles.sticky} ${styles.stickyTop}`}>
          <h1 className={styles.title}>This sticky is position top</h1>
        </section>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <section className={`${styles.sticky} ${styles.stickyBottom}`}>
          <h1 className={styles.title}>This sticky is position bottom</h1>
        </section>
      </div>

{/*       Foodstuff trading Content
      <div
        ref={container} 
        className='relative flex items-center justify-center h-screen overflow-hidden bg-black'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
        <div className='relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between'>
            <p className='text-[5vw] uppercase mix-blend-difference'>foodstuff trading</p>
            <p className='w-[50vw] text-[2vw] self-end uppercase mix-blend-difference'>Welcome to ACROSS, With a diverse portfolio of services, we are dedicated to connecting people and opportunities across the globe. At ACROSS, we are committed to delivering exceptional service, driving innovation, and fostering long-lasting relationships. Join us on a journey that knows no boundaries.</p>
        </div>
        <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
            <motion.div style={{y}} className='relative w-full h-full'>
            <Image src={Background} fill alt="image" style={{objectFit: "cover"}}/>
            </motion.div>
        </div>
        </div>

        <div>
        <section className={`${styles.sticky} ${styles.stickyTop}`}>
          <h1 className={styles.title}>This sticky is position top</h1>
        </section>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <section className={`${styles.sticky} ${styles.stickyBottom}`}>
          <h1 className={styles.title}>This sticky is position bottom</h1>
        </section>
      </div>

      E-Commerce Content
      <div
        ref={container} 
        className='relative flex items-center justify-center h-screen overflow-hidden bg-black'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
        <div className='relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between'>
            <p className='text-[5vw] uppercase mix-blend-difference'>E-Commerce</p>
            <p className='w-[50vw] text-[2vw] self-end uppercase mix-blend-difference'>Welcome to ACROSS, With a diverse portfolio of services, we are dedicated to connecting people and opportunities across the globe. At ACROSS, we are committed to delivering exceptional service, driving innovation, and fostering long-lasting relationships. Join us on a journey that knows no boundaries.</p>
        </div>
        <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
            <motion.div style={{y}} className='relative w-full h-full'>
            <Image src={Background} fill alt="image" style={{objectFit: "cover"}}/>
            </motion.div>
        </div>
        </div>

        <div>
        <section className={`${styles.sticky} ${styles.stickyTop}`}>
          <h1 className={styles.title}>This sticky is position top</h1>
        </section>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <section className={`${styles.sticky} ${styles.stickyBottom}`}>
          <h1 className={styles.title}>This sticky is position bottom</h1>
        </section>
      </div>
 */}    </div>
  );
};

export default StickySection;
