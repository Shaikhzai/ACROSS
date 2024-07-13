'use client';
import { useRef, useEffect } from 'react';
import Lenis from 'lenis'
import { useScroll } from 'framer-motion';
import dynamic from 'next/dynamic'; 

import Intro from '@/components/Intro';
import Description from '@/components/Description';
import Section from '@/components/Section';
import Section2 from '@/components/Section2';
import Description1 from '@/components/DescriptionHero/Description1';
import ZoomParallax from '../components/ZoomParallax/index'
import SectionTransition from '../components/SectionTransition/index'
import SmoothScroll from '../components/3dEarth/SmoothScroll'
import ServicesCard from '../components/3dEarth/ServiceOfferd'
import Footer1 from '../components/Footer/Footer1'
import styles from './page.module.scss'

const Earth = dynamic(() => import('@/components/3dEarth/Earth'), {
  ssr: false,
  loading: () => <img src="/images/3dEarth_assets/placeholder.png"></img>
})

export default function Home() {

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
      <Description1/>
      <SectionTransition/>
      <Section2 />
      <SmoothScroll>  
        <div className={styles.earth}>
          <Earth/>
          <ServicesCard/>
        </div>
      </SmoothScroll>
      <Footer1/>
    </main>
  );
}