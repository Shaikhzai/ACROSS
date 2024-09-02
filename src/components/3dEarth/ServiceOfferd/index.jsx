
'use client';
import { useState } from 'react';

import styles from './style.module.scss';
import Titles from './ServiceTitle';
import Descriptions from './ServiceDes';
import arrow from '../../../../public/images/arrow.svg'

const data = [
    {
        title: "Events",
        description: "Crafting unforgettable experiences and journeys across the globe.",
        speed: 0.5,
        HREF: "/work"
    },
    {
        title: "Tourism",
        description: "Crafting unforgettable experiences and journeys across the globe.",
        speed: 0.5,
        HREF: "/work"
    },
    {
        title: "Real Estate",
        description: "Connecting you with prime properties for your dream investments.",
        speed: 0.67,
        HREF: "/work"
    },
    {
        title: "Transportation",
        description: "Ensuring safe and efficient transit solutions tailored to your needs.",
        speed: 0.8,
        HREF: "/work"
    },
    /* {
        title: "Foodstuff Trading",
        description: "Delivering quality food products from farm to fork.",
        speed: 0.8,
        HREF: "/work"
    },
    {
        title: "E-Commerce",
        description: "Your go-to online destination for diverse and premium products.",
        speed: 0.8,
        HREF: "/work"
    } */
]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)
    return (
        <div className={styles.container}>
            <Titles data={data} setSelectedProject={setSelectedProject}/>
            <Descriptions data={data} selectedProject={selectedProject}/>
        </div>
    )
}