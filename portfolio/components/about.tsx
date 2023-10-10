"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.section 
    className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175}}>
        <SectionHeading>About me</SectionHeading>
        <p className='mb-3'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae rhoncus lorem. Vivamus accumsan cursus faucibus. Cras eleifend semper justo vel molestie. Pellentesque felis odio, dapibus sed pharetra in, pulvinar nec felis. Pellentesque ut pretium nisi. Fusce vestibulum nunc in eros vulputate, at luctus nisi rhoncus. In tincidunt purus aliquam nisl rhoncus, sed vestibulum libero venenatis. Cras eu mauris ligula.
        </p>
        <p>
        Fusce et aliquam ligula. Quisque aliquet viverra dapibus. Duis mi urna, tempus sed mauris eu, laoreet lobortis mauris. Integer id mi urna. Proin a ligula viverra, rutrum ligula vel, eleifend justo. Fusce elementum dolor at est tristique luctus. Etiam dignissim lobortis eros, sit amet semper leo lacinia vel. Nam ac nisl vel elit auctor sodales. Fusce augue risus, sodales vitae cursus id, varius at mauris. Mauris vel libero lobortis, porttitor metus quis, pulvinar ligula. Nam eu ante ac orci pellentesque venenatis vel id nisi. Nulla dictum risus mauris, in volutpat erat gravida eu. Praesent id dolor ullamcorper, tempus purus nec, commodo velit. Sed vel nisl ex. Nunc mattis nibh ex, sed sodales mi porttitor at. Donec iaculis sit amet lectus non accumsan.
        </p>
    </motion.section>
  )
}
