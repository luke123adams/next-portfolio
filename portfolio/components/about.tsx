"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion"
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  
  const { ref } = useSectionInView('About')

  return (
    <motion.section
    ref={ref} 
    className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175}}
    id="about">
        <SectionHeading>About me</SectionHeading>
        <p className='mb-3'>
        I'm a former civil servant with 5
years experience looking to make a
career change into the tech
industry.
I'm a fast learner who is
fascinated by patterns and I have a
natural curiosity about the
underlying systems that make the
world work. I built my first
computer when I was 18 and have
been tweaking and tinkering with
PCs ever since.        </p>
        <p>
        I began my development journey at
the School of Code after being
chosen from thousands of applicants
based on my soft skills, background
and enthusiasm for the industry.
After completing the full-time
bootcamp in March, I have continued
working on projects using the tech
stack learned on the course as well
as learning new technologies and
languages. The main project I'm
currently working on is a website
with tools to help people run
tabletop games such as Dungeons and
Dragons.
        </p>
    </motion.section>
  )
}
