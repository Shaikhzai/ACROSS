'use client'
import React from 'react'
import { useEffect } from 'react'
import Lenis from 'lenis'

import Footer from '@/components/Footer/Footer1'
import ContactCont from './ContactCont'

const page = () => {

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
      <ContactCont />
      {/* <Footer/> */}
    </main>
  );
}

export default page