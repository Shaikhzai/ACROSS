'use client';
import Image from "next/image";
import Pic1 from '../../../public/images/SectionParallax_assets/6.jpg'
import Pic2 from '../../../public/images/SectionParallax_assets/2.jpg'
import styles from './style.module.css'

import { useScroll, useTransform, motion } from "framer-motion";
import { useLayoutEffect, useEffect, useRef } from "react";
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const phrases = ["Los Flamencos National Reserve", "is a nature reserve located", "in the commune of San Pedro de Atacama", "The reserve covers a total area", "of 740 square kilometres (290 sq mi)"]

export default function Transition() {

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  }) 

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main ref={container} className="relative h-[200vh]">
      <Section1 scrollYProgress={scrollYProgress}/>
      <Section2 scrollYProgress={scrollYProgress}/>
    </main>
  );
}

const Section1 = ({scrollYProgress}) => {

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])
  return (
    <motion.div style={{scale, rotate}} className="sticky top-0 h-screen bg-[#000000] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]">
      <div className={styles.projects}>
            <div className={styles.projectDescription}>
                <div className={styles.imageContainer}>
                    <Image 
                        src={Pic2}
                        fill={true}
                        alt="project image"
                        priority={true}
                    />
                </div>
                <div className={styles.column}>
                    <p>From grand events to intimate gatherings, and from luxurious vacations to off-the-beaten-path explorations, <span className="text-gray-500">ACROSS</span> is committed to delivering exceptional service. Our hospitality is reflected in our warm, professional approach and our unwavering dedication to exceeding our clients' expectations, making every moment with us truly special.</p>
                </div>
                <div className={styles.column}>
                    <p>Some, like the southern viscacha, vicuña and Darwins rhea, are classified as endangered species. Others, such as Andean goose, horned coot, Andean gull, puna tinamou and the three flamingo species inhabiting in Chile (Andean flamingo, Chilean flamingo, and Jamess flamingo) are considered vulnerable.</p>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

const Section2 = ({scrollYProgress}) => {

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])

  return (
    <motion.div style={{scale, rotate}} className="relative h-screen">
      <Image 
        src={Pic1}
        alt="img"
        placeholder="blur"
        fill
      />
    </motion.div>
  )
}

function AnimatedText({children}) {
  const text = useRef(null);

  useLayoutEffect( () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(text.current, {
          scrollTrigger: {
              trigger: text.current,
              scrub: true,
              start: "0px bottom",
              end: "bottom+=400px bottom",
          },
          opacity: 0,
          left: "-200px",
          ease: "power3.Out"
      })
  }, [])
  
  return <p /* ref={text} */>{children}</p>
}