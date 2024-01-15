import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
      className={`
      ${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5
      `}
      >
        <div 
        className='flex flex-col justify-center items-center mt-5'
        >
          <div className='w-5 h-5 rounded-full bg-[#9113ff]'/>
          <div className='w-1  h-40 sm:h-80 violet-gradient'/>
        </div>

        <div>
          <h1
          className={`
          ${styles.heroHeadText}
          text-white
          `}
          >
            Hi, I'am &nbsp;
            <span className='text-[#915eff]'> 
              Sankar
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Web developer integrating AI/ML <br className='hidden sm:block'/>for innovative and impactful solutions.
          </p>
        </div>
      </div>

        <ComputersCanvas/>


    </section>
  )
}

export default Hero