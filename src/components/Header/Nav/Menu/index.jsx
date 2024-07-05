import { motion } from 'framer-motion';
import { opacity, slideLeft, mountAnim } from '../../anime';
import styles from './style.module.scss';
import Link from './Link';
import { useState } from 'react';

const menu = [
  {
    title: "Services",
    description: "To Know What We Do",
    images: ['1.jpg', '2.jpg'],
    HREF: "/work"
  },
  {
    title: "About",
    description: "To Learn Everything About Us",
    images: ['5.jpg', '4.jpg'],
    HREF: "/about"
  },
  {
    title: "Contact",
    description: "To Send a FAX",
    images: ['6.jpg', '7.jpg'],
    HREF: "/contact"
  }
]

export default function index({closeMenu}) {

  return (
    <motion.div className={styles.menu} variants={opacity} initial="initial" animate="enter" exit="exit">

        <div className={styles.header}>
        </div>

        <div className={styles.body}>
          {
            menu.map( (el, index) => {
              return <>
              <Link data={el} index={index} key={index}/>
              </>
            })
          }
        </div>

        <motion.div 
          variants={opacity} 
          {...mountAnim} 
          custom={0.5} 
          className={styles.footer}>
          <a>FB</a>
          <a>IG</a>
          <a>IN</a>
          <a>BE</a>
        </motion.div>

    </motion.div>
  )
}