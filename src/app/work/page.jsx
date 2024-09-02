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
    <img src="https://images.unsplash.com/photo-1682686581220-689c34afb6ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
  </div>
</section>
      <Content/>
{/* <section className={style.black}>
  <header className={style.header}></header>
  <div className={style.wrap}>
    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita debitis quia quae error porro <a href="#" className={style.a} data-text="reprehenderit!">reprehenderit!</a> Alias nostrum esse officia nesciunt accusantium earum vitae in excepturi saepe magni, distinctio dignissimos recusandae.</div>
    <img src="https://images.unsplash.com/photo-1690286727405-ecdf6ab04bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60" />
  </div>
</section>
<section className={style.white}>
  <header></header>
  <div className={style.wrap}>
    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita debitis quia quae error porro <a href="#" data-text="reprehenderit!">reprehenderit!</a> Alias nostrum esse officia nesciunt accusantium earum vitae in excepturi saepe magni, distinctio dignissimos recusandae.</div>
    <img src="https://images.unsplash.com/photo-1690151711465-2bfe4e69f241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60" />
  </div>
</section>
<section class="black">
  <header></header>
  <div class="wrap">
    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita debitis quia quae error porro <a href="#" data-text="reprehenderit!">reprehenderit!</a> Alias nostrum esse officia nesciunt accusantium earum vitae in excepturi saepe magni, distinctio dignissimos recusandae.</div>
    <img src="https://plus.unsplash.com/premium_photo-1690297971162-5fe7ddf2c48d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60" />
  </div>
</section>
<section class="white">
  <header></header>
  <div class="wrap">
    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita debitis quia quae error porro <a href="#" data-text="reprehenderit!">reprehenderit!</a> Alias nostrum esse officia nesciunt accusantium earum vitae in excepturi saepe magni, distinctio dignissimos recusandae.</div>
  </div>
</section>
<section class="black">
  <header></header>
  <div class="wrap">
    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita debitis quia quae error porro <a href="#" data-text="reprehenderit!">reprehenderit!</a> Alias nostrum esse officia nesciunt accusantium earum vitae in excepturi saepe magni, distinctio dignissimos recusandae.</div>
  </div>
</section>
<section class="white">
  <header></header>
  <div class="wrap">
    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita debitis quia quae error porro <a href="#" data-text="reprehenderit!">reprehenderit!</a> Alias nostrum esse officia nesciunt accusantium earum vitae in excepturi saepe magni, distinctio dignissimos recusandae.</div>
  </div>
</section>
<section class="black">
  <header></header>
  <div class="wrap">
    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita debitis quia quae error porro <a href="#" data-text="reprehenderit!">reprehenderit!</a> Alias nostrum esse officia nesciunt accusantium earum vitae in excepturi saepe magni, distinctio dignissimos recusandae.</div>
  </div>
</section>
 */}
      <HorizonParralax/>
      <Footer/>
    </main>
  );
}
