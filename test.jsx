import { useGSAP } from '@gsap/react'
import React from 'react'
import { words } from './src/constants'

const test = () => {
    useGSAP("hero-text h1",
        {y:50,opacity:0},
        {y:0,opacity:1,stagger:0.2,ease:'power2.inOut'}
    )
  return (
    <section id='hero' className='relative overflow-hidden'>
        <div className='absloute top-0 left-0 z-10'>
            <img src="/images/bg.png" alt="" />
        </div>
        <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
            <div className='flex flex-col gap-7'>
                <div className='hero-text'>
                    <h1>
                       <span className='slide'></span>
                       <span className='wrapper'></span>
                       {words.map((index,word)=>(
                        <span key={index} className='flex items-center md:gap-3 gap-1 pb-2'>
                            <img src="word.imgPath" alt="" className='xl:size-12 md:size-10 size-7 md:p-1 p-2 rounded-full bg-white-50'  />
                            <span>{word.text}</span>
                        </span>
                       ))} 
                    </h1>
                    <h1>into Real projects</h1>
                    <h1>that deliver results</h1>
                </div>
            </div>
        </header>
    </section>
  )
}

export default test
