import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import HeroImg from '../assets/heroimg.png'
import H1 from '../assets/h1.jpg'
import H2 from '../assets/h2.jpg'
import H3 from '../assets/h3.jpg'
const Hero = () => {
      return (
            <section className='w-full py-12 mt-12'>
                  <main className='container overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-7'>
                        {/* hero-left */}
                        <div className='flex flex-col justify-center gap-4 items-center mt-14' data-aos='fade-right' data-aos-duration='1200'>

                              <div className='flex items-center justify-center text-center sm:-translate-x-12 md:-translate-x-16 w-[270px] bg-green py-2 px-3 gap-2 border-gray-400 border-[1px] rounded'>
                                    <FaCheck className='green font size-desc ' />
                                    <p className='green font size-desc'>100% Lorem, ipsum dolor sit.</p>
                              </div>

                              <div className='flex items-start flex-col gap-4'>
                                    <h1 className='font black font-bold size-title capitalize ml-9'>
                                          grownup your learning <br /> skill with educate
                                    </h1>
                                    <p className='font size-desc neutral ml-9'>
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Aspernatur quibusdam sint magni maiores neque facere sit nesciunt.
                                    </p>
                              </div>

                              <div className='flex items-center gap-4 w-full md:translate-x-8 sm:translate-x-8'>
                                    <button className='get1'>get started</button>
                                    <button className='get2'>find couse</button>
                              </div>

                              <div className='flex items-center gap-4 w-full sm:translate-x-8'>
                                    <p className=' rounded-full font size-desc white bg-green-600 p-4 text-center justify-center items-center flex'>1K+</p>
                                    <div className='flex flex-col items-center gap-2'>
                                          <div className='flex mr-auto text-yellow-500 size-title gap-1'>
                                                <IoStar />
                                                <IoStar />
                                                <IoStar />
                                                <IoStar />
                                                <IoStar />
                                                <p className='text-gray-400 font text-sm translate-y-3'>(4.7 ratiing)</p>
                                          </div>

                                          <div className='font size-desc block'>
                                                students learn daily with educate platiform
                                          </div>
                                    </div>
                              </div>
                        </div>

                        {/* hero-right */}
                        <div data-aos='fade-left' data-aos-duration='1200'>
                              <div className='radius bg-green-400 justify-center relative  -z-50 md:w-[430px] md:h-[530px] overflow-hidden md:translate-y-24 sm:translate-x-12'>
                                    <img src={HeroImg} alt="" className='w-[530px] h-[530px] ' />
                                    <div className='bg-white absolute w-[280px] px-4 py-4 sm:bottom-4 left-4 md:bottom-28 rounded-xl'>
                                          <div className='flex gap-2 items-center justify-center'>
                                                <img src={H1} alt="" className='w-[70px] h-[70px] rounded-full' />
                                                <img src={H2} alt="" className='w-[70px] h-[70px] rounded-full' />
                                                <img src={H3} alt="" className='w-[70px] h-[70px] rounded-full' />
                                          </div>
                                          <div className='flex items-center mt-3'>
                                                <p className='font size-desc black font-bold'>130+</p>
                                                <p className='font size-desc black  ml-2'>expert instructor</p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </main>
            </section>
      )
}

export default Hero