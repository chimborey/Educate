import React from 'react'
import { GiSandSnake } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import L1 from '../assets/l1.jpg'
import L2 from '../assets/l2.webp'
import L3 from '../assets/l3.webp'
const Latest = () => {
      return (
            <section className='w-full py-12 overflow-hidden'>
                  <main className='container flex  items-center flex-col'>
                        {/* latest-left */}
                        <div className='flex items-center flex-col gap-3' data-aos='zoom-in' data-aos-duration='1200'>
                              <p className='font size-desc neutral capitalize'>read the latest insights</p>
                              <h3 className='font uppercase text-5xl block font-bold'>latest blog</h3>
                              <GiSandSnake className='w-10 h-10 green' />
                        </div>



                        {/* latest-right */}
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 overflow-hidden mt-7 cursor-pointer'>
                              <div className='md:w-[300px] overflow-hidden' data-aos='fade-right' data-aos-duration='1200'>
                                    <div className='md:w-[300px] overflow-hidden relative rounded-lg hover:scale-110 duration-300 ease-linear bg-slate-600'>
                                          <img src={L1} alt="" className='md:w-[300px] md:h-[180px] rounded-lg hover:scale-110 duration-300 ease-linear' />


                                          <div>
                                                <p className='w-[160px] bg-green-400 text-center capitalize white font-bold size-text rounded-lg absolute md:top-5 sm:top-6 left-4'>university</p>
                                          </div>
                                          <div>
                                                <p className='font font-bold white size-text uppercase bg-green-400 w-[130px] text-center rounded-lg absolute sm:top-52 md:top-36 left-4'>12.feb.2026</p>
                                          </div>
                                          <div className='mt-7 px-6'>
                                                <div className='flex items-center gap-2'>
                                                      <FaUser className='w-7 h-7 rounded-full px-2 py-2 bg-gray-400 text-black' />
                                                      <span className='font size-desc text-gray-400 capitalize mt-2'>by <span className='black'>educate</span></span>
                                                </div>

                                                <div>
                                                      <p className='font text-black size-text mt-4 capitalize'>Learning is the key soft skills abd professional</p>
                                                </div>

                                                <div className='flex flex-col items-center'>
                                                      <p className='font text-gray-300 size-desc mt-4 capitalize'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quaerat tenetur iusto quod?</p>
                                                      <div className='w-full relative'>
                                                            <button className='continue'>continue reading</button>
                                                            <MdOutlineArrowForwardIos className='w-7 h-7 rounded-full absolute -translate-y-16 right-4 bg-green-400 white px-1 py-1' />
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>


                              <div className='md:w-[300px] overflow-hidden' data-aos='zoom-in' data-aos-duration='1200'>
                                    <div className='md:w-[300px] overflow-hidden relative rounded-lg hover:scale-110 duration-300 ease-linear bg-slate-600'>
                                          <img src={L2} alt="" className='md:w-[300px] md:h-[180px] rounded-lg hover:scale-110 duration-300 ease-linear' />


                                          <div>
                                                <p className='w-[160px] bg-green-400 text-center capitalize white font-bold size-text rounded-lg absolute md:top-5 sm:top-6 left-4'>university</p>
                                          </div>
                                          <div>
                                                <p className='font font-bold white size-text uppercase bg-green-400 w-[130px] text-center rounded-lg absolute sm:top-52 md:top-36 left-4'>12.feb.2026</p>
                                          </div>


                                          <div className='mt-7 px-6'>
                                                <div className='flex items-center gap-2'>
                                                      <FaUser className='w-7 h-7 rounded-full px-2 py-2 bg-gray-400 text-black' />
                                                      <span className='font size-desc text-gray-400 capitalize mt-2'>by <span className='black'>educate</span></span>
                                                </div>

                                                <div>
                                                      <p className='font text-black size-text mt-4 capitalize'>Learning is the key soft skills abd professional</p>
                                                </div>

                                                <div className='flex flex-col items-center'>
                                                      <p className='font text-gray-300 size-desc mt-4 capitalize'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quaerat tenetur iusto quod?</p>
                                                      <div className='w-full relative'>
                                                            <button className='continue'>continue reading</button>
                                                            <MdOutlineArrowForwardIos className='w-7 h-7 rounded-full absolute -translate-y-16 right-4 bg-green-400 white px-1 py-1' />
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>


                              <div className='md:w-[300px] overflow-hidden' data-aos='fade-left' data-aos-duration='1200'>
                                    <div className='md:w-[300px] overflow-hidden relative rounded-lg hover:scale-110 duration-300 ease-linear bg-slate-600'>
                                          <img src={L3} alt="" className='md:w-[300px] md:h-[180px] rounded-lg hover:scale-110 duration-300 ease-linear' />


                                          <div>
                                                <p className='w-[160px] bg-green-400 text-center capitalize white font-bold size-text rounded-lg absolute md:top-5 sm:top-6 left-4'>university</p>
                                          </div>
                                          <div>
                                                <p className='font font-bold white size-text uppercase bg-green-400 w-[130px] text-center rounded-lg absolute sm:top-52 md:top-36 left-4'>12.feb.2026</p>
                                          </div>
                                          <div className='mt-7 px-6'>
                                                <div className='flex items-center gap-2'>
                                                      <FaUser className='w-7 h-7 rounded-full px-2 py-2 bg-gray-400 text-black' />
                                                      <span className='font size-desc text-gray-400 capitalize mt-2'>by <span className='black'>educate</span></span>
                                                </div>

                                                <div>
                                                      <p className='font text-black size-text mt-4 capitalize'>Learning is the key soft skills abd professional</p>
                                                </div>

                                                <div className='flex flex-col items-center'>
                                                      <p className='font text-gray-300 size-desc mt-4 capitalize'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quaerat tenetur iusto quod?</p>
                                                      <div className='w-full relative'>
                                                            <button className='continue'>continue reading</button>
                                                            <MdOutlineArrowForwardIos className='w-7 h-7 rounded-full absolute -translate-y-16 right-4 bg-green-400 white px-1 py-1' />
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </main>
            </section>
      )
}

export default Latest