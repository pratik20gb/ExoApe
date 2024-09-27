import React from 'react'
import { motion } from 'framer-motion';
function Spread() {
    return (
        <div className='w-full bg-white py-20'>
            <div className='max-w-screen-2xl mx-auto px-5 sm:px-10 '>
                <div className='svg flex items-center gap-2 justify-center'>
                    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon w-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
                    <h1>In the media</h1>
                </div>
                <div className='texts mt-10  text-center'>
                    <h1 className=' capitalize  overflow-hidden text-6xl tracking-tighter sm:text-9xl'>
                    <motion.span 
                     initial={{ rotate: 90 ,y: "40%",opacity: 0 }}
                     whileInView={{ rotate: 0, y: "0%" , opacity: 1 }}
                     transition={{ duration: 0.8, ease: [0.22 , 1,0.36,1], }}
                     viewport={{ once: true }}
                     className='inline-block origin-left'>Spread</motion.span>
                    </h1>
                    <h1 className=' capitalize  overflow-hidden text-6xl tracking-tighter sm:text-9xl'>
                    <motion.span 
                     initial={{ rotate: 90 ,y: "40%",opacity: 0 }}
                     whileInView={{ rotate: 0, y: "0%" , opacity: 1 }}
                     transition={{ duration: 0.8, ease: [0.22 , 1,0.36,1], }}
                     viewport={{ once: true }}
                     className='inline-block origin-left'>the news</motion.span>
                    </h1>
                    <p className='w-2/3 sm:mt-10 text-md overflow-hidden leading-2  mx-auto mt-5 sm:w-1/3 sm:text-xl'>
                    Find out more about our work on these leading design and technology platforms.
                    </p>
                    <a className='border-b-[1px] border-zinc-900 pb-1 mt-3 inline-block ' href="#">Browse all news</a>
                </div>
            </div>
        </div>
    )
}

export default Spread