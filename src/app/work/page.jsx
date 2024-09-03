'use client'
import React from 'react'
import { useEffect } from 'react'
import Lenis from 'lenis'

import Footer from '@/components/Footer/Footer1'
import Carousel from './Slider'
import HorizonParralax from './HorrizontaParallax'
import Content from './Content'
import style from './style1.module.scss'

export default function Page(){

  useEffect( () => {

    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <div className='h-screen overflow-hidden'> 

      <div className='relative h-full'> 
      <Carousel
        images={[
          "/images/work_assets/5.jpeg",
          "/images/work_assets/7.jpeg",
          "/images/work_assets/8.jpeg",
          "/images/work_assets/11.jpeg",
          "/images/work_assets/4.jpeg",
        ]}
        overlayText="OUR SERVICES"
      />
      </div>
      </div>
      <section className={style.white}>
        <header className={style.header}></header>
        <div class={style.wrap}>
          <div>At <span className="text-gray-500">ACROSS</span>, we are committed to delivering exceptional services across a diverse range of industries. Our expertise and passion drive us to innovate and provide tailored solutions that meet the unique needs of our clients.</div>
       </div>
      </section>
      <Content/>
      <HorizonParralax/>
      <Footer/>
    </main>
  );
}
