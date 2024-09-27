import React from 'react'
import { motion } from 'framer-motion'
function Landing() {

    return (
        <div className='relative text-white w-full h-[150vh] sm:h-[250vh] '>
            <div data-scroll-section className='picture w-full h-full overflow-hidden'>
                <img

                data-scroll
                data-scroll-speed="-1"
                 src={"https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"} alt="" className='w-full h-full object-cover' />
            </div>
            <div className=' absolute top-0'>
                <div className='  h-full text max-w-screen-2xl mx-auto  px-5 sm:px-10'>
                    <div className='para mt-72 sm:mt-[30rem]'>
                        <p className='text-md masker  sm:text-3xl overflow-hidden'>
                            <motion.span 
                                initial={{ y: 100, opacity: 0 }} 
                                animate={{ y: 0, opacity: 1 }} 
                                transition={{ duration: 1, delay: 0.2 }} 
                                className='inline-block'
                            >
                                Global digital design studio partnering with
                            </motion.span>
                        </p>
                        <p className='text-md masker  sm:text-3xl overflow-hidden'>
                            <motion.span 
                                initial={{ y: 100, opacity: 0 }} 
                                animate={{ y: 0, opacity: 1 }} 
                                transition={{ duration: 1, delay: 0.4 }} 
                                className='inline-block'
                            >
                                brands and businesses that create exceptional
                            </motion.span>
                        </p>
                        <p className='text-md masker  sm:text-3xl overflow-hidden'>
                            <motion.span 
                                initial={{ y: 100, opacity: 0 }} 
                                animate={{ y: 0, opacity: 1 }} 
                                transition={{ duration: 1, delay: 0.6 }} 
                                className='inline-block'
                            >
                                 experiences where people live, work, and unwind.
                            </motion.span>
                        </p>
                        <p className='text-md masker  sm:text-3xl overflow-hidden'>
                            <motion.span 
                                initial={{ y: 100, opacity: 0 }} 
                                animate={{ y: 0, opacity: 1 }} 
                                transition={{ duration: 1, delay: 0.8 }} 
                                className='inline-block'
                            >
                                 live, work, and unwind.
                            </motion.span>
                        </p>
                    </div>
                    <div className='headings mt-5 sm:mt-10 '>
                        <motion.h1 
                            initial={{ y: 100, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }} 
                            transition={{ duration: 1, delay: 0.2 }} 
                            className='text-white font-lighter text-6xl tracking-tighter sm:text-[19rem] leading-none'
                        >
                            Digital
                        </motion.h1>
                        <motion.h1 
                            initial={{ y: 100, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }} 
                            transition={{ duration: 1, delay: 0.4 }} 
                            className='text-white font-lighter text-6xl tracking-tighter sm:text-[19rem] leading-none'
                        >
                            Design
                        </motion.h1>
                        <motion.h1 
                            initial={{ y: 100, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }} 
                            transition={{ duration: 1, delay: 0.6 }} 
                            className='text-white font-lighter text-6xl tracking-tighter sm:text-[19rem] leading-none'
                        >
                            Experience
                        </motion.h1>
                       
                    </div>
                    <motion.div 
                        className='para2 mt-10 sm:mt-20 sm:w-1/3'
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.2 }}
                    >
                        <motion.p 
                            className='sm:text-xl'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.4 }}
                        >
                            We help experience-driven companies thrive by making their audience feel the refined intricacies of their brand and product in the digital space. Unforgettable journeys start with a click.
                        </motion.p>
                        <motion.a 
                            className='border-b-[1.3px] border-zinc-100 pb-1 inline-block mt-10 sm:border-1 sm:text-xl' 
                            href="#"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1.6 }}
                        >
                            The Studio.
                        </motion.a>
                    </motion.div>
                </div>
            </div>

        </div>
    )
}

export default Landing