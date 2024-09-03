// components/StickySection.js
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

import styles from './style2.module.css';
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
      {/* Events&Tourism Content */}
{/*         <div
        ref={container} 
        className='relative flex items-center justify-center h-screen overflow-hidden bg-black'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
        <div className='relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between'>
            <p className='text-[5vw] uppercase mix-blend-difference'>Events and Tourism</p>
            <p className='w-[50vw] text-[2vw] self-end uppercase mix-blend-difference'>At ACROSS, we specialize in creating extraordinary experiences that leave lasting impressions. Whether it's a corporate event, a grand celebration, or a tailor-made tour, our expert team is dedicated to delivering seamless planning and execution. With a deep understanding of global destinations and a passion for detail, we ensure every event and journey is crafted to perfection.</p>
        </div>
        <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
            <motion.div style={{y}} className='relative w-full h-full'>
            <Image src={Background} fill alt="image" style={{objectFit: "cover"}}/>
            </motion.div>
        </div>
        </div> */}
      <div>
        <section className={`${styles.sticky} ${styles.stickyTop}`}>
          <h1 className={styles.title}><span className='text-[3vw] uppercase text-black' >Events and Tourism</span></h1>
        </section>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
      </div>

      {/* real estate Content */}
{/*       <div
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
        </div> */}

        <div>
        <section className={`${styles.sticky} ${styles.stickyTop}`}>
          <h1 className={styles.title}><span className='text-[3vw] uppercase text-black' >Real Estate</span></h1>
        </section>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
      </div>

      {/* Transportation Content */}
{/*       <div
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
        </div> */}

        <div>
        <section className={`${styles.sticky} ${styles.stickyTop}`}>
          <h1 className={styles.title}><span className='text-[3vw] uppercase text-black' >Transportation</span></h1>
        </section>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
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
