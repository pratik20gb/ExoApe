import React from 'react'
import { motion } from 'framer-motion'

function Last() {
    return (
        <div className='w-full bg-black text-white py-20' >
            <div className='max-w-screen-2xl mx-auto px-5 sm:px-10 '>
                <div className='flex items-center justify-between'>
                    <div className='flex flex-col '>
                        <div className='text-7xl font-medium overflow-hidden tracking-tighter'>
                            <motion.span className='inline-block origin-left' initial={{ rotate: 90, y: "40%", opacity: 0 }}
                                whileInView={{ rotate: 0, y: "0%", opacity: 1 }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], }}
                                viewport={{ once: true }}>Our</motion.span>
                        </div>
                        <div className='text-7xl font-medium overflow-hidden tracking-tighter'>
                            <motion.span className='inline-block origin-left' initial={{ rotate: 90, y: "40%", opacity: 0 }}
                                whileInView={{ rotate: 0, y: "0%", opacity: 1 }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], }}
                                viewport={{ once: true }}>Story</motion.span>
                        </div>
                    </div>
                    <div><video src="/video/video-6.mp4" autoPlay muted loop playsInline></video></div>
                </div>
                <p className='w-4/5  mt-10'>The story behind Exo Ape is one of exploration, creativity and curiosity.</p>
                <a className='border-b-[1px] border-white pb-1 mt-3 inline-block ' href="#">Our Story</a>
            </div>
        </div>
    )
}

export default Last