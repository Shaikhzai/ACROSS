// components/StickySection.js
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

import styles from './style2.module.css';
import style from './style1.module.scss'
import Background from '../../../public/images/intro_assets/introImg.jpg';
import Arrow from '../../../public/images/arrow.svg'

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

      <div>
        <section className={`${styles.sticky} ${styles.stickyTop}`}>
          <h1 className={styles.title}><span className='text-[3vw] uppercase text-black' >Events and Tourism</span></h1>
        </section>
      
        <div class={style.wrap}>
          <div>At <span className="text-gray-500">ACROSS</span>, we design events and journeys that leave a lasting impression. Our team handles every detail, ensuring your event or trip is seamless and memorable. Whether it's a corporate event or a personalized tour, we bring your vision to life.</div>
          <img src="https://images.unsplash.com/photo-1682686581220-689c34afb6ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
        </div>

        <div class={style.wrap1}>
          <div>Our tourism services offer unique, curated travel experiences. We go beyond typical itineraries, crafting trips that immerse you in culture, history, and adventure. Trust ACROSS to create travel experiences that are tailored to your desires.</div>
          <img src="https://images.unsplash.com/photo-1682686581220-689c34afb6ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
        </div>

        <div class={style.wrap}>
          <div>Innovation and excellence are at the core of our services. We stay ahead of trends to offer fresh, engaging experiences. From event planning to travel, ACROSS is committed to making every moment extraordinary.</div>
          <img src="https://images.unsplash.com/photo-1682686581220-689c34afb6ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
        </div>

      </div>

      {/* real estate Content */}

        <div>
        <section className={`${styles.sticky} ${styles.stickyTop}`}>
          <h1 className={styles.title}><span className='text-[3vw] uppercase text-black' >Real Estate</span></h1>
        </section>
        <div class={style.wrap}>
          <div><span className="text-gray-500">ACROSS</span> connects you with prime real estate opportunities. Our portfolio includes luxury homes and commercial spaces tailored to your needs. We guide you through every step, ensuring a smooth and successful transaction.</div>
          <img src="https://images.unsplash.com/photo-1682686581220-689c34afb6ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
        </div>

        <div class={style.wrap1}>
          <div>We offer more than just property listings; we provide personalized service and expert advice. Our team understands your unique requirements and works to find the perfect property that aligns with your goals.</div>
          <img src="https://images.unsplash.com/photo-1682686581220-689c34afb6ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
        </div>

        <div class={style.wrap}>
          <div>Building lasting relationships is our priority. We strive to create a seamless real estate experience, delivering value and satisfaction at every turn. Trust ACROSS to be your partner in real estate.</div>
          <img src="https://images.unsplash.com/photo-1682686581220-689c34afb6ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
        </div>
      </div>

      {/* Transportation Content */}

        <div>
        <section className={`${styles.sticky} ${styles.stickyTop}`}>
          <h1 className={styles.title}><span className='text-[3vw] uppercase text-black' >Transportation</span></h1>
        </section>
        <div class={style.wrap}>
          <div><span className="text-gray-500">ACROSS</span> provides reliable transportation solutions tailored to your needs. Our fleet of modern vehicles ensures safe and comfortable journeys, whether for personal travel or logistics.</div>
          <img src="https://images.unsplash.com/photo-1682686581220-689c34afb6ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
        </div>

        <div class={style.wrap1}>
          <div>Our services prioritize efficiency and punctuality. We manage everything from simple transfers to complex logistics, making sure your transportation needs are met with professionalism and care.</div>
          <img src="https://images.unsplash.com/photo-1682686581220-689c34afb6ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
        </div>

        <div class={style.wrap}>
          <div>We focus on delivering a top-notch transportation experience. With trained professionals and a commitment to sustainability, ACROSS ensures every journey is smooth, secure, and stress-free.</div>
          <img src="https://images.unsplash.com/photo-1682686581220-689c34afb6ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
        </div>
      </div>

{/*       Foodstuff trading Content

        <div>
        <section className={`${styles.sticky} ${styles.stickyTop}`}>
          <h1 className={styles.title}><span className='text-[3vw] uppercase text-black' >Foodstuff Trading</span></h1>
        </section>
        <div class={style.wrap}>
          <div><span className="text-gray-500">ACROSS</span> delivers high-quality food products sourced from trusted suppliers. Our commitment to quality ensures that you receive fresh, premium goods every time. We handle everything from sourcing to delivery, making the process easy for you.</div>
          <img src="https://images.unsplash.com/photo-1682686581220-689c34afb6ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
        </div>

        <div class={style.wrap1}>
          <div>Our trading services are efficient and reliable, designed to meet the diverse needs of our clients. We manage logistics with care, ensuring your orders arrive on time and in perfect condition.</div>
          <img src="https://images.unsplash.com/photo-1682686581220-689c34afb6ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
        </div>

        <div class={style.wrap}>
          <div>Sustainability is key to our operations. We prioritize ethical sourcing and support local producers, offering products that are good for you and the environment. Trust ACROSS for your foodstuff trading needs.</div>
          <img src="https://images.unsplash.com/photo-1682686581220-689c34afb6ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
        </div>

      </div>

      E-Commerce Content

        <div>
        <section className={`${styles.sticky} ${styles.stickyTop}`}>
          <h1 className={styles.title}><span className='text-[3vw] uppercase text-black' >E-Commerce</span></h1>
        </section>
        <div class={style.wrap}>
          <div><span className="text-gray-500">ACROSS</span> offers a seamless online shopping experience with a wide range of products. Our platform is designed for ease of use, providing everything from everyday essentials to luxury items in just a few clicks.</div>
          <img src="https://images.unsplash.com/photo-1682686581220-689c34afb6ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
        </div>

        <div class={style.wrap1}>
          <div>Customer satisfaction is at the heart of our e-commerce services. We offer secure payments, fast shipping, and excellent customer support to ensure your shopping experience is smooth and enjoyable.</div>
          <img src="https://images.unsplash.com/photo-1682686581220-689c34afb6ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
        </div>

        <div class={style.wrap}>
          <div>We’re committed to innovation, continuously enhancing our platform to offer you the best. From personalized recommendations to exclusive deals, ACROSS makes online shopping convenient and rewarding.</div>
          <img src="https://images.unsplash.com/photo-1682686581220-689c34afb6ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
        </div>

      </div>
 */}    
      </div>
  );
};

export default StickySection;
