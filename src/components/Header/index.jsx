'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Link } from 'next/link';
import { AnimatePresence } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NavStairsAni from './Nav/Stairs';
import NavMenu from './Nav/Menu'
import gsap from 'gsap';

import styles from './style.module.scss';

export default function index() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);

    useEffect( () => {
      if(isActive) setIsActive(false)
    }, [pathname])

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => {gsap.to(button.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
                onEnterBack: () => {gsap.to(button.current, {scale: 0, duration: 0.25, ease: "power1.out"})}
            }
        })
    }, [])

    return (
        <>
        <div ref={header} className={styles.header}>
            <div className={styles.logo}>
                <p className={styles.copyright}>©</p>
                <div className={styles.name}>
                    <p className={styles.codeBy}>ACROSS</p>
                    <p className={styles.dennis}>LOGO</p>
                    <p className={styles.snellenberg}>HERE</p>
                </div>
            </div>
            <div className={styles.nav}>
                <div className={styles.el}>
                    <a href='/work'>Work</a>
                    <div className={styles.indicator}></div>
                </div>
                <div className={styles.el}>
                    <a href='/about'>About</a>
                    <div className={styles.indicator}></div>
                </div>
                <div className={styles.el}>
                    <a href='/contact'>Contact</a>
                    <div className={styles.indicator}></div>
                </div>
            </div>
        </div>
        <div ref={button} className={styles.headerButtonContainer}>
            <div onClick={() => {setIsActive(!isActive)}} className={`${styles.button}`}>
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
            </div>
        </div>
        <AnimatePresence mode="wait">
            {isActive && <>
                <NavStairsAni />
                <NavMenu/>
            </> 
            }
        </AnimatePresence>
        </>
    )
}