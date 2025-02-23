import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import SweetAlert2 from 'react-sweetalert2';

const Hero = () => {
  const [swalProps, setSwalProps] = useState({});

  useEffect(()=>{

    setSwalProps({
      show: true,
      title: 'Attention',
      text: 'Please Note: Certain advanced features may be unavailable on mobile devices. For full functionality, please access this site using a desktop or laptop computer.',
      confirmButtonText: 'Continue',
  })

  },[])

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

      <SweetAlert2 {...swalProps} />
        <div>
          <h1
          className={`
          ${styles.heroHeadText}
          text-white
          `}
          >
            Hi, I'am &nbsp;
            <span className='text-[#915eff]' > 
              Sankar
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Web developer integrating AI/ML <br className='hidden sm:block'/>for innovative and impactful solutions.
          </p>
        </div>
      </div>

        <ComputersCanvas/>

        <div className='absolute xs:bottom-5 bottom-20 w-full flex justify-center items-center z-10'>
            <a href="#about">
              <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                  <motion.div
                  animate={{
                    y:[0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'loop',
                  }}
                  className="w-3 h-3 rounded-full bg-secondary mb-1"
                  />
              </div>
            </a>
        </div>


    </section>
  )
}

export default Hero