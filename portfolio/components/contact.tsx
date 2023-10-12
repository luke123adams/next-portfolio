"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import { useActiveSectionContext } from '@/contexts/active-section-context'
import { sendEmail } from '@/actions/sendEmail'

export default function Contact() {
    
    const { ref } = useSectionInView('Contact')

  return (
  <motion.section 
  ref={ref}
  id='contact' 
  className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
  initial={{
    opacity: 0,
  }}
  whileInView={{
    opacity: 1,
  }}
  transition={{
    duration: 1
  }}
  viewport={{
    once: true,
  }}>

    <SectionHeading>Contact Me</SectionHeading>
    <p className='text-gray-700 -mt-3'>Please contact me directly at <a className="underline" href="mailto:lxa207@gmail.com">lxa207@gmail.com</a>{" "}or through this form</p>
    <form className="mt-10 flex flex-col"
    action={sendEmail}
    >
        <input name="senderEmail" className="px-4 h-14 rounded-lg border-black/10" type="email" required maxLength={500} placeholder='Your email' />
        <textarea name="senderMessage" className='h-52 my-3 rounded-lg border-black/10 p-4' required maxLength={5000} placeholder='Your message'/>
        <button 
        className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 
                hover:scale-110 active:scale-105 cursor-pointer border border-black/10" type="submit">Submit 
        <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"/></button>
    </form>
  </motion.section>
    
  )
}
