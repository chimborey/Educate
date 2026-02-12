import React from 'react'
import { GiSandSnake } from "react-icons/gi";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { RiShakeHandsLine } from "react-icons/ri";
import { FaArtstation } from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";
import { MdHealthAndSafety } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { PiCodeSimpleFill } from "react-icons/pi";
import { FaPhotoVideo } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import { FaCheckCircle } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import Img11 from '../assets/1.jpg'
import Img12 from '../assets/2.jpg'
const Cateagory = () => {
      return (
            <section className='w-full py-14 overflow-hidden'>
                  <main className='container overflow-hidden'>
                        {/* category01 */}
                        <main className='flex items-center flex-col gap-7 '>
                              {/* category-left */}
                              <div className='flex flex-col justify-center gap-4 items-center text-center' data-aos='zoom-in' data-aos-duration='1200'>
                                    <h3 className='font black font-bold size-title capitalize'>top category</h3>
                                    <GiSandSnake className='w-7 h-7 green' />
                                    <p className='size-desc font neutral'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                              </div>

                              {/* category-right */}
                              <div className='grid grid-cols-1 md:grid-cols-3 gap-7 cursor-pointer'>
                                    <div className='flex items-center gap-2 md:w-[290px] bg-green-200 py-3 px-2 rounded-lg' data-aos='fade-right' data-aos-duration='1200'>
                                          <MdOutlineBusinessCenter className='w-7 h-7 green' />
                                          <p className='font size-desc block capitalize'>business management</p>
                                    </div>

                                    <div className='flex items-center gap-2 md:w-[290px] bg-pink-200 py-3 px-2 rounded-lg' data-aos='zoom-in' data-aos-duration='1200'>
                                          <FaArtstation className='w-7 h-7 green' />
                                          <p className='font size-desc block capitalize'>arts & design</p>
                                    </div>

                                    <div className='flex items-center gap-2 w-[290px] bg-green-200 py-3 px-2 rounded-lg' data-aos='fade-left' data-aos-duration='1200'>
                                          <PiCodeSimpleFill className='w-7 h-7 green' />
                                          <p className='font size-desc block capitalize'>personal development</p>
                                    </div>

                                    <div className='flex items-center gap-2 w-[290px] bg-yellow-200 py-3 px-2 rounded-lg' data-aos='fade-right' data-aos-duration='1200'>
                                          <MdHealthAndSafety className='w-7 h-7 green' />
                                          <p className='font size-desc block capitalize'>health & fitness</p>
                                    </div>

                                    <div className='flex items-center gap-2 w-[290px] bg-purple-200 py-3 px-2 rounded-lg' data-aos='zoom-in' data-aos-duration='1200'>
                                          <FaReact className='w-7 h-7 green' />
                                          <p className='font size-desc block capitalize'>data science</p>
                                    </div>

                                    <div className='flex items-center gap-2 w-[290px] bg-pink-200 py-3 px-2 rounded-lg' data-aos='fade-left' data-aos-duration='1200'>
                                          <HiSpeakerphone className='w-7 h-7 green' />
                                          <p className='font size-desc block capitalize'>marketing</p>
                                    </div>

                                    <div className='flex items-center gap-2 w-[290px] bg-purple-200 py-3 px-2 rounded-lg' data-aos='fade-right' data-aos-duration='1200'>
                                          <RiShakeHandsLine className='w-7 h-7 green' />
                                          <p className='font size-desc block capitalize'>business & finance</p>
                                    </div>

                                    <div className='flex items-center gap-2 w-[290px] bg-yellow-200 py-3 px-2 rounded-lg' data-aos='zoom-in' data-aos-duration='1200'>
                                          <GrPersonalComputer className='w-7 h-7 green' />
                                          <p className='font size-desc block capitalize'>computer sicence</p>
                                    </div>

                                    <div className='flex items-center gap-2 w-[290px] bg-purple-200 py-3 px-2 rounded-lg' data-aos='fade-left' data-aos-duration='1200'>
                                          <FaPhotoVideo className='w-7 h-7 green' />
                                          <p className='font size-desc block capitalize'>business management</p>
                                    </div>
                              </div>
                        </main>

                        {/* category02 */}
                        <main className='grid grid-cols-1 md:grid-cols-2 gap-12 mt-32'>
                              {/*  */}
                              <div className=''>
                                    <div className='relative' data-aos='fade-right' data-aos-duration='1200'>
                                          <img src={Img12} alt="" className='md:w-[980px] h-[360px] rounded-lg relative cursor-pointer' />
                                    </div>

                                    <div className='absolute md:-translate-y-[260%] md:translate-x-80 sm:translate-x-64 sm:-translate-y-[260%] cursor-pointer'>
                                          <img src={Img11} alt="" className='w-[240px] h-[170px] rounded-lg border-8 border-white' data-aos='zoom-in' data-aos-duration='1200' />

                                          <div className='absolute top-16 mx-auto text-center justify-center items-center flex right-20' data-aos='zoom-in' data-aos-duration='1200'>
                                                <SiGoogledisplayandvideo360 className='green text-center w-16 h-16 rounded-full py-4 px-4 bg-green-100' />
                                          </div>
                                    </div>

                                    <div className='w-[270px] h-[90px]' data-aos='zoom-in' data-aos-duration='1200'>
                                          <div className='w-[270px] h-[90px] bg-white rounded-lg absolute -translate-y-12 translate-x-12 flex justify-center items-center px-4 gap-2'>
                                                <FaAward className='mr-auto ml-7 w-14 cursor-pointer h-14 bg-green-100 green rounded-full px-4 py-4' />

                                                <div>
                                                      <span className='font size-titl2 green'>29 +</span>
                                                      <p className='font size-desc text-gray-400'>Lorem, ipsum dolor.</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>

                              {/*  */}
                              <div data-aos='fade-left' data-aos-duration='1200'>
                                    <div className='flex flex-col items-center ml-auto w-[400px] h-[450px] -translate-y-16'>
                                          <span className='font size-desc black capitalize mr-auto'>about us</span>
                                          <h3 className='text-3xl font black capitalize'>learn & grow your skills from <span className='green'>anywhere</span></h3>
                                          <GiSandSnake className='font w-7 h-7 mt-4 green mr-auto' />
                                          <p className='mt-4 font size-desc neutral text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi numquam deserunt necessitatibus animi ratione ullam, provident vero dolores pariatur ea id eveniet.</p>


                                          <div className='grid grid-cols-2 md:grid-cols-1 gap-7 mr-auto mt-4'>
                                                <div className='flex items-center gap-2'>
                                                      <FaCheckCircle className='w-7 h-7 green' />
                                                      <span className='font  size-text black capitalize'>expert tianers</span>
                                                </div>

                                                <div className='flex items-center gap-2'>
                                                      <FaCheckCircle className='w-7 h-7 green' />
                                                      <span className='font  size-text black capitalize'>online remote learning</span>
                                                </div>

                                                <div className='flex items-center gap-2'>
                                                      <FaCheckCircle className='w-7 h-7 green' />
                                                      <span className='font  size-text black capitalize'>lifetime access</span>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </main>
                  </main>
            </section>
      )
}

export default Cateagory