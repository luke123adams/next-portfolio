"use client"

import { projectsData } from "@/lib/data"
import Image from "next/image"
import { useRef } from "react"
import { useScroll, motion, useTransform } from 'framer-motion'



type ProjectProps = (typeof projectsData)[number]

export default function Project ({
    title,
    description,
    tags,
    imageUrl
}: ProjectProps) {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])


    
    return (
    <motion.div className='group mb-3 sm:mb-8 even:pl-8
    last:mb-0'
    
     style= {{
        scale: scaleProgress,
        opacity: opacityProgress,
     }}>
        <section
     className='rounded-lg group bg-gray-100
    max-w-[42rem] border-black/5 overflow-hidden
    sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition'>
        <div className='py-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]'>
        <h3 className="text-2xl font-semibold">{title}</h3>
    <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
    <ul className='flex flex-wrap mt-auto gap-2'>
        {tags.map((tag, i) => (
            <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full' key={i}>{tag}</li>
        ))}
    </ul>
        </div>
    
    <Image 
    src={imageUrl} 
    alt={title} 
    quality={95} 
    className='absolute top-8 -right-40 
    w-[28.25rem] rounded-t-lg shadow-2xl
    group-even:right-[initial]
    transition
    group-even:-left-40
    group-hover:-translate-x-3 
    group-hover:translate-y-3 
    group-hover:-rotate-2
    group-hover:scale-105
    group-even:group-hover:-translate-x-3 
    group-even:group-hover:translate-y-3 
    group-even:group-hover:rotate-2 ' />
    </section>
    </motion.div>
    
)}