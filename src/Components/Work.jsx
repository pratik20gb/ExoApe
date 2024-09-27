import React, { useState } from 'react'
import { motion } from 'framer-motion'
function Work() {

  const [elems, setElems] =  useState([
        
        {heading:"100 Years Columbia Pictures ",subheading:"Celebrating a Century of Cinema",img:"https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)",video:"https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"},
        {heading:"Cambium",subheading:"Pioneering Sustainable Solutions ",img:"https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)",video:"https://player.vimeo.com/progressive_redirect/playback/1001982172/rendition/720p/file.mp4?loc=external&log_user=0&signature=b92eb1ab8119f2ffaaa03f075ef271714f5ee63065ee8d29f4e188ce30202de0"},
        {heading:"Pixelflakes",subheading:"Architectural Marketing Agency",img:"https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)",video:"https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076"},
        {heading:"Studio D",subheading:"Urban And Landscape Design ",img:"https://a.storyblok.com/f/133769/2400x2990/8f08135741/studio-d-hero.jpg/m/1100x1370/filters:quality(90)",video:"https://player.vimeo.com/progressive_redirect/playback/914798702/rendition/720p/file.mp4?loc=external&log_user=0&signature=b76cb0994de6beca7f6ba29e7eb52db1750d34600352dab2566c6ca16fcd817f"},
    ])
    return (
        <div className='w-full relative'>
            <div className='max-w-screen-2xl py-20 mx-auto px-5 sm:px-10'>
                <div className='featured flex items-center gap-3'>
                    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon w-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
                    <h3 className='capitalize '>featured Projects</h3>

                </div>
                <h1 className='text-6xl sm:text-[13rem] sm:leading-none sm:tracking-tight overflow-hidden  my-5'>
                    <motion.span 
                     initial={{ rotate: 90 ,y: "40%",opacity: 0 }}
                     whileInView={{ rotate: 0, y: "0%" , opacity: 1 }}
                     transition={{ duration: 0.8, ease: [0.22 , 1,0.36,1], }}
                     viewport={{ once: true }}
                     className='inline-block origin-left'>Work</motion.span>
                    </h1>
                <p className='text-md leading-2 '>
                    <motion.span 
                        className='inline-block origin-left'
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                    >
                        Highlights of cases that we passionately built with forward-thinking clients and friends over the years.
                    </motion.span>
                </p>
                <div className='elems  mt-10 sm:flex sm:gap-5 sm:flex-wrap'>
                    {elems.map((item,index)=>{
                          return   <div className='elem sm:w-[48%] w-full mt-10   ' key={index}>
                             <div className='video data-scroll-section relative overflow-hidden w-full sm:h-[50vw] h-[104vw] '>
                                 <motion.img
                                 initial={{opacity:1}}
                                 whileHover={{opacity:0}}
                                 data-scroll
                                 data-scroll-speed="-.3"
                                 className='absolute top-0 z-[3] left-0 w-full h-full object-cover' src={item.img} alt="" />
                                 <video autoPlay muted loop className='block z-[1] w-full h-full absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-[1.3]' src={item.video}></video>
                             </div>
                             <div className='mt-4'>
                                 <h3 className='font-semibold -'>{item.heading}</h3>
                                 <p className='capitalize opacity-40'>{item.subheading}</p>
                             </div>
                         </div>
                    })}

                   
                </div>

            </div>
        </div>
    )
}

export default Work