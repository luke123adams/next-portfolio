"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from 'react-icons/fa'

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center'>
        <div className='flex items-center justify-center sm:mb-0'>
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
            <motion.p className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            >
            <span className="font-bold">Hello, I'm Luke.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> looking{" "}
        for my first developer role. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.   
            </motion.p>
            <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.1,
            }}>
                <Link href="#contact"
                className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:bg-grey-950 focus:scale-110 active:scale-105 transition'>
                    Contact me {" "}
                    <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
                </Link>

                <a className="group bg-white text-black px-7 py-3
                 flex items-center gap-2 rounded-full
                outline-none hover:scale-110 focus:scale-110 
                active:scale-105 transition cursor-pointer border border-black/10"
                href="/CV.pdf" download>
                    Download CV{" "} <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/>
                    </a>

                    <a className="bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full hover:scale-110 focus:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10">
                        <BsLinkedin />
                    </a>

                    <a className="bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full text-[1.35rem] hover:scale-110 focus:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10">
                        <FaGithubSquare />
                    </a>
            </motion.div>
            
            </section>
  )
}
