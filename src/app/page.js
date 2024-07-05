'use client';
import { useRef, useEffect } from 'react';
import Lenis from 'lenis'
import { useScroll } from 'framer-motion';
import dynamic from 'next/dynamic'; 

import Intro from '@/components/Intro';
import Description from '@/components/Description';
import Section from '@/components/Section';
import Description1 from '@/components/DescriptionHero/Description1';
import Description2 from '@/components/DescriptionHero/Description2';
import ZoomParallax from '../components/ZoomParallax/index'
import CardParallax from '../components/CardParallax/index'
import SectionTransition from '../components/SectionTransition/index'
import SmoothScroll from '../components/3dEarth/SmoothScroll'
import ServicesCard from '../components/3dEarth/ServiceOfferd'
import { projects } from '../data'; 
import styles from './page.module.scss'

const Earth = dynamic(() => import('@/components/3dEarth/Earth'), {
  ssr: false,
  loading: () => <img src="/images/3dEarth_assets/placeholder.png"></img>
})

export default function Home() {

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
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
    <main >
      <Intro />
      <Description />
      <Section />
      <ZoomParallax />
      <SectionTransition/>
      <Description1/>
      <SectionTransition/>
      <Section />
      <SmoothScroll>  
        <div className={styles.earth}>
          <Earth/>
          <ServicesCard/>
        </div>
      </SmoothScroll>
      {/* {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return <CardParallax className={styles.main} key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      } */}
      <div className='h-screen'></div>
    </main>
  );
}