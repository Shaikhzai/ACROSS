import React from 'react'
import './style.module.css'
import Image from 'next/image'

import Logo from '../../public/images/acrossLogo2.png'

export default function Description() {
    return (
        <div className='flex justify-center my-40 bg-black'>
            <p className='text-[7vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw] uppercase text-center max-w-[50vw] leading-none text-white'>
                <span className="mb-0 mt-0">
                    <Image src={Logo} />
                </span> your premier partner for a world of possibilities.</p>
        </div>
    )
}