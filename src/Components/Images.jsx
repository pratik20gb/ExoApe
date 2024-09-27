import React from 'react'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Images() {
    const first = useRef(null);
    const second = useRef(null);
    const third = useRef(null);
    const fourth = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const elements = [first, second, third, fourth];
        const directions = ['50%', '-50%', '-50%', '50%'];

        elements.forEach((el, index) => {
            gsap.to(el.current, {
                x: directions[index],
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: el.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                }
            });
        });
    }, []);
    return (
        <div className='w-full h-[70vh] sm:h-[100vh] bg-white flex justify-center items-center overflow-hidden'>
            <div className='w-[40%] sm:w-[30%] md:w-[30%] lg:w-[30%] h-1/2 sm:h-[80%] relative'>
                <div ref={first} className='absolute w-20 sm:w-40 md:w-48 lg:w-56 h-[7rem] sm:h-[15rem] md:h-[18rem] lg:h-[21rem] -right-1/3 top-6'>
                    <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/700x994/filters:quality(90)" alt="" />
                </div>
                <div ref={second} className='absolute w-[8rem] sm:w-[15rem] md:w-[18rem] lg:w-[21rem] aspect-video -left-1/2 top-1/3'>
                    <video autoPlay muted loop src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"></video>
                </div>
                <div ref={third} className='absolute w-[9rem] sm:w-[20rem] md:w-[14rem] lg:w-[16rem] aspect-video -left-[60%] -bottom-10 sm:-bottom-20'>
                    <img src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/700x469/filters:quality(90)" alt="" />
                </div>
                <div ref={fourth} className='absolute w-[8rem] sm:w-[10rem] md:w-[12rem] lg:w-[14rem] aspect-video -right-1/2 -bottom-1/4 sm:-bottom-3'>
                    <video autoPlay muted loop src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"></video>
                </div>
                <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/700x1196/filters:quality(90)" alt="" />
            </div>
        </div>
    )
}

export default Images