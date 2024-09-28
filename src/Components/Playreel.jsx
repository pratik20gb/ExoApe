import React, { useRef, useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


function Playreel() {
    const parent = useRef(null);
    const videodiv = useRef(null);
    const play = useRef(null);
    const reel = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: parent.current,
                start: "top top",
                end: "bottom top",
                pin: true,
                scrub: 1,
            },
        })
        tl
            .to(videodiv.current, {
                width: "100%",
                height: "100%",
                duration: 1.5,
                ease: "power2.inOut"
            })
            .to(play.current, {
                x: "-100%",
                opacity: 0,
                duration: 2,
            }, "-=1")
            .to(reel.current, {
                x: "100%",
                opacity: 0,
                duration: 2,
            }, "<")
            .to(videodiv.current, {
                width: "95%",
                height: "95%",
                duration: 2,
            })
        // ... rest of the animation
    })

    return (
        <div ref={parent} className='w-full relative h-screen bg-black overflow-hidden'>
            <div ref={videodiv} className='w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <video autoPlay muted loop src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a" className='w-full h-full object-cover'></video>
            </div>
            <div className='  overlay absolute  flex flex-col justify-between  w-full h-full   text-white py-20'>
                <div className='flex items-center justify-center  gap-3 w-full  '>
                    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon w-4"><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
                    <h3 className='text-sm '>Work in motion</h3>
                </div>
                <h1 className='w-full justify-center items-center flex gap-32 sm:gap-96'>
                    <div ref={play} className=' text-4xl sm:text-8xl font-light'>Play</div>
                    <div ref={reel} className='text-4xl sm:text-8xl font-light'>Reel</div>
                </h1>
                <p className='text-center px-20 text-xs' >Our work is best experienced in motion. Don’t forget to put on your headphones.</p>
            </div>
        </div>
    )
}

export default Playreel