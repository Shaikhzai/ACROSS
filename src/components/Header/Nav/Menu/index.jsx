import { motion } from 'framer-motion';
import { opacity, slideLeft, mountAnim } from '../../anime';
import styles from './style.module.scss';
import Link from './link';
import { useState } from 'react';

const menu = [
  {
    title: "Projects",
    description: "To See Everything",
    images: ['1.jpg', '2.jpg']
  },
  {
    title: "Agence",
    description: "To Learn Everything",
    images: ['5.jpg', '4.jpg']
  },
  {
    title: "Contact",
    description: "To Send a FAX",
    images: ['6.jpg', '7.jpg']
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
              return <Link data={el} index={index} key={index}/>
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