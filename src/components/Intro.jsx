import React from 'react'
import Image from 'next/image';
import BackgroundVid from '../../public/images/intro_assets/introVid.mp4';
import styles from './style.module.css'

import { useScroll, useTransform, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Intro() {

  //sliding text
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;

useEffect( () => {
  gsap.set(secondText.current, {left: secondText.current.getBoundingClientRect().width})
  requestAnimationFrame(animate);
}, [])


const animate = () => {

  if(xPercent > 0){
    xPercent = -100;
  }
  gsap.set(firstText.current, {xPercent: xPercent})
  gsap.set(secondText.current, {xPercent: xPercent})
  requestAnimationFrame(animate);
  xPercent += 0.1;
}

    const container = useRef();
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start']
    })
  
    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])
  
    return (
      <div className='h-screen overflow-hidden'>
        <motion.div style={{y}} className='relative h-full'>
          {/* <Image src={Background} fill alt="image" style={{objectFit: "cover"}}/> */}
          <video autoPlay loop muted className={styles.videoBackground}>
          <source src={BackgroundVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
          <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>More & Tourism Events -</p>
          <p ref={secondText}>More & Tourism Events -</p>
        </div>
        </div>
        </motion.div>
      </div>
    )
}