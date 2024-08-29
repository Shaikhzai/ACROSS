'use client'
import React from 'react'
import { useEffect } from 'react'
import Lenis from 'lenis'

import Footer from '@/components/Footer/Footer1'
import Carousel from './Slider'

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
      <div className="flex justify-center mt-20"> 
      <Carousel
        images={[
          "/images/work_assets/4.jpeg",
          "/images/work_assets/5.jpeg",
          "/images/work_assets/7.jpeg",
          "/images/work_assets/8.jpeg",
          "/images/work_assets/11.jpeg",
        ]}
        overlayText="OUR SERVICES"
      />
      </div>
      <Footer/>
    </main>
  );
}
