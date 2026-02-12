import React from 'react'
import { FaRegWindowMaximize } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaStar } from 'react-icons/fa6';
import { GiFlowerStar } from "react-icons/gi";
import I1 from '../assets/i1.jpg'
import I2 from '../assets/i2.jpg'
import I3 from '../assets/i3.jpg'
const Innovatice = () => {
      return (
            <section className='w-full py-14 bg-green md:h-[570px] overflow-hidden'>
                  <main className='grid grid-cols-1 md:grid-cols-2 container gap-7'>
                        {/* Innovatice-left */}
                        <div className=''>
                              <div className='flex items-center gap-2'  data-aos='fade-right' data-aos-duration='1200'>
                                    <FaRegWindowMaximize className='w-4 h-4 green'/>
                                    <span className='font size-text green'>why choose UST</span>
                              </div>

                              <div className='flex flex-col items-center'>
                                    <div className='flex flex-col items-center w-full' data-aos='fade-right' data-aos-duration='1200'>
                                          <h3 className='text-3xl font black mt-4'>innovative and effective learning approaches</h3>
                                          <p className='font size-desc mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, debitis architecto sit, officia ratione eaque similique reprehenderit sapiente itaque sequi nihil ab, possimus saepe maxime distinctio voluptates.</p>
                                    </div>

                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-7' data-aos='zoom-in' data-aos-duration='1200'>

                                          <div className='flex items-center mt-4 gap-2 w-[260px] bg-purple-200 rounded-md py-1 px-3'>
                                                <FaCheckCircle className='w-7 h-7 rounded-full green' />
                                                <span className='font size-desc black capitalize'>course management</span>
                                          </div>

                                          <div className='flex items-center mt-4 gap-2 w-[260px] ml-4 bg-orange-200 rounded-md py-1 px-3'>
                                                <FaCheckCircle className='w-7 h-7 rounded-full text-orange-400' />
                                                <span className='font size-desc black capitalize'>students progress tracking</span>
                                          </div>

                                          <div className='flex items-center mt-4 gap-2 w-[260px] bg-purple-300 rounded-md py-1 px-3'>
                                                <FaCheckCircle className='w-7 h-7 rounded-full text-purple-600' />
                                                <span className='font size-desc black capitalize'>interactive live clas</span>
                                          </div>

                                          <div className='flex items-center mt-4 gap-2 w-[260px] ml-4 bg-blue-300 rounded-md py-1 px-3'>
                                                <FaCheckCircle className='w-7 h-7 rounded-full text-blue-500' />
                                                <span className='font size-desc black capitalize'>quiz and assignments</span>
                                          </div>
                                    </div>

                                    <div className='flex items-center gap-3 mt-4 w-full' data-aos='fade-up' data-aos-duration='1200'>
                                          <GiFlowerStar className='green w-7 h-7' />
                                          <span className='font size-desc to-black'>24/7 <span>hirs ready to out support team</span></span>
                                    </div>
                                    <button className='cart mt-4 mr-auto' data-aos='fade-up' data-aos-duration='1200'>more about</button>
                                    
                              </div>
                        </div>

                        {/* Innovatice-right */}
                        <div className='ml-12 relative mb-24' data-aos= 'fade-left' data-aos-duration='1200'>
                              <img src={I1} alt="" className='sm:w-56 sm:h-56 md:w-60 rounded-full md:h-60 border-8 border-orange-500'/>
                              <img src={I2} alt="" className=' sm:w-56 rounded-full sm:h-56 md:w-60 md:h-60 border-8 border-green-500 absolute top-1 sm:right-4 md:right-4'/>
                              <img src={I3} alt="" className='md:w-60 md:h-60 sm:w-56 rounded-full sm:h-56 border-8 border-blue-500 absolute md:-translate-y-24 md:translate-x-24 sm:-translate-y-24 sm:translate-x-14'/>
                              <div className='w-[230px] h-[80px] rounded-lg bg-white absolute px-3 translate-y-4 translate-x-16 right-2 flex justify-center items-center'>
                                    <FaStar className='w-14 h-14 text-white mr-auto rounded-full bg-green-300 px-2 py-2'/>
                                    <div>
                                          <span className='font black size-desc'>26 +</span>
                                          <p className='font size-desc text-gray-400'>Lorem, ipsum dolor.</p>
                                    </div>
                              </div>
                        </div>
                  </main>
            </section>
      )
}

export default Innovatice