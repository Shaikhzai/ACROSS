'use client'
import React from 'react'
import { useEffect } from 'react'
import Lenis from 'lenis'

import Footer from '@/components/Footer/Footer1'

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
      <Footer/>
    </main>
  );
}