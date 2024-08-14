import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from "next/image";

import Logo from '../../../../public/images/acrossLogo2.png'

export default function Footer() {
    const container = useRef();
    const paths = useRef([]);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end end']
    })

    useEffect( () => {
        scrollYProgress.on("change", e => {
            paths.current.forEach( (path, i) => {
                path.setAttribute("startOffset", -40 + (i * 40) + (e * 40) + "%");
            })
        })
    }, [])

    return (
        <div ref={container}>
            <svg className="w-full mt-0 mb-40" viewBox="0 0 250 90">
                <path fill="none" id="curve" d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"/>
                <text className="text-[6px] uppercase" style={{fill: "#b7ab98"}}>
                    {
                        [...Array(3)].map((_, i) => {
                            return <textPath key={i} ref={ref => paths.current[i] = ref} startOffset={i * 40 + "%"} href="#curve"> The ACROSS Group At Your Service -</textPath>
                        })
                    }
                </text>
            </svg>
            <Content scrollProgress={scrollYProgress}/>
        </div>
    )
}

const Content = ({scrollProgress}) => {
    const y = useTransform(scrollProgress, [0, 1], [-700, 0])
    return (
        <div className="h-[700px] bg-[#2d2c2c] overflow-hidden">
            <motion.div style={{y}} className="h-full bg-[#2d2c2c] flex justify-between py-8 px-12 w-full flex-col">
            <Section1 />
            <Section2 />
            </motion.div>
        </div>
    )
}

const Section1 = () => {
    return (
        <div className="mt-11">
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex justify-between items-end'>
            {/* <h1 className='text-[8vw] leading-[0.8] mt-10 mr-0'>The </h1> */}
            <span className="h-full w-full">
                <Image src={Logo} className="w-auto h-auto object-contain"/>
            </span>
           {/*  <h1 className='text-[8vw] leading-[0.8] mt-10 ml-0'> GROUP</h1> */}
            {/* <p>©Copyright</p> */}
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-20'>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-[#ffffff80]'>About</h3>
                <a href="/">Home</a>
                <a href="/work" target="_blank">Services</a>
                <a href="/about" target="_blank">Our Mission</a>
                <a href="/contact" target="_blank">Contact Us</a>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-[#ffffff80]'>Connect</h3>
                <a href="" target="_blank">Meta</a>
                <a href="" target="_blank">Instagram</a>
                <a href="" target="_blank">Twitter</a>
                <a href="" target="_blank">LinkedIn</a>
            </div>
        </div>
    )
}