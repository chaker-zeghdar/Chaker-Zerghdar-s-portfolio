import React from 'react'
import { words } from "../constants";
import Button from '../components/Button';
import HeroExpirience from '../components/HeroModels/HeroExpirience';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power2.inOut" }
    );
  });
  return (
    <>
      <section id='hero' className='relative overflow-hidden'>
          <div className="absolute top-0 left-0 z-10">
              <img src="/images/bg.png" alt="" />
          </div>
          <div className='hero-layout'>
              {/* LEFT : HERO CONTENT */}
              <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                  <div className='flex flex-col gap-7'>
                      <div className='hero-text'>
                          <h1>
                              Shaping
                              <span className="slide">
                              <span className="wrapper">
                                  {words.map((word, index) => (
                                  <span
                                      key={index}
                                      className="flex items-center md:gap-3 gap-1 pb-2"
                                  >
                                      <img
                                      src={word.imgPath}
                                      alt="person"
                                      className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                      />
                                      <span>{word.text}</span>
                                  </span>
                                  ))}
                              </span>
                              </span>
                          </h1>
                          <h1>into Real Projects</h1>
                      </div>
                      <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
                          Hi, I'm Chaker Zeghdar a <span className='text-purple-500 text-2xl font-semibold'>front end</span>  developer <br/> based in Algeria with a pasison for code
                      </p>
                      <Button 
                      className= "font-semibold md:w-80 md:h-16 w-60 h-12"
                      id="button"
                      text="See My Work"
                      />
                  </div>
              </header>
              {/* RIGHT : 3D MODEL */}
              <figure>
                  <div className='hero-3d-layout'>
                      <HeroExpirience/>
                      
                  </div>
              </figure>
          </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section id='about' className='relative overflow-hidden pt-10 pb-20 px-5 md:px-20'>
          <div className='flex flex-col-reverse md:flex-row gap-10 md:gap-16 items-center'>
              {/* LEFT : ABOUT IMAGE */}
              <figure className='w-full md:w-1/2 flex justify-center'>
                  <img 
                      src="/public/images/hero.jpg" 
                      alt="about me" 
                      className='w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-lg floating shadow-purple'
                  />
              </figure>
              {/* RIGHT : ABOUT TEXT */}
              <div className='w-full md:w-1/2 flex flex-col gap-6'>
                  <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>About Me</h2>
                  <p className='text-sm md:text-base lg:text-lg text-white-50 leading-relaxed'>
                      I'm a passionate front-end developer with a focus on creating beautiful, responsive, and user-friendly web experiences. With expertise in modern web technologies, I transform ideas into engaging digital solutions.
                  </p>
                  <p className='text-sm md:text-base lg:text-lg text-white-50 leading-relaxed'>
                    My journey into front-end development started with a love
                    for design and visual details. Over time, that passion grew
                    into a strong interest in how interfaces work behind the scenes.
                    I enjoy learning new technologies, improving my skills,
                    and turning ideas into real, usable products.
                  </p>
                  <Button 
                      className="font-semibold md:w-80 md:h-16 w-60 h-12"
                      id="about-button"
                      text="Learn More"
                  />
              </div>
          </div>
      </section>
    </>
  )
}

export default Hero
