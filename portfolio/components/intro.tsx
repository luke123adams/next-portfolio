"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <section>
        <div className='flex items-center justify-center'>
            <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className='relative'>
                <Image src='/WIN_20181024_16_07_07_Pro.jpg' 
                width='192' 
                height='192' 
                quality="95" 
                alt='profile pic' 
                priority={true}
                className="h-24 w-24 rounded-full border-[0.35rem]
                 border-white object-cover shadow-xl"/>

                 <motion.span className='absolute bottom-0 right-0 text-4xl'
                 initial={{ opacity: 0, scale: 0}}
                 animate={{ opacity: 1, scale: 1}}
                 transition={{
                    type: 'spring',
                    stiffness: 125,
                    delay: 0.1,
                    duration: 0.7
                 }}
                 >👋</motion.span>
            </motion.div>
            </div>
            <p>
            <span className="font-bold">Hello, I'm Ricardo.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> looking{" "}
        for my first developer role. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.   
            </p>
            
            </section>
  )
}
