import React from 'react'
import { GiSandSnake } from "react-icons/gi";
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { FaBookAtlas } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import P1 from '../assets/p1.jpg'
import P2 from '../assets/p2.jpg'
import P3 from '../assets/p3.jpg'
import P4 from '../assets/p4.webp'
import P5 from '../assets/p5.jpg'
import P6 from '../assets/p6.jpg'
const Popular = () => {
  return (
    <section className='w-full py-14 overflow-hidden'>
      <main className='flex items-center flex-col container overflow-hidden'>
        {/* Popular01 */}
        <div className='flex flex-col items-center gap-2' data-aos='zoom-in' data-aos-duration='1200'>
          <p className='text-gray-300 font size-desc capitalize'>explore featured course</p>
          <h3 className='font size-title black font-bold uppercase'>popular course</h3>
          <GiSandSnake className='w-10 h-10 green' />
        </div>

        {/* Popular02 */}
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-7 sm:gap-12 overflow-hidden mt-7'>
          <div className='md:w-[310px] relative overflow-hidden bg-blue-200 hover:scale-110 duration-300 ease-linear cursor-pointer' data-aos='fade-right' data-aos-duration='1200'>
            <img src={P1} alt="" className='md:w-[310px] md:h-[180px] hover:scale-110 duration-300 ease-linear' />

            <div className='absolute text-center md:translate-y-32 md:top-2 ml-3 sm:-translate-y-9'>
              <span className='w-4 h-4 rounded-full bg-blue-400 text-white px-6 py-1'>free</span>
            </div>


            <div className='flxe items-center flex-col space-y-2 px-6 mt-6 mb-12'>
              <h5 className='font size-text blue capitalize bg-blue-300 px-4 rounded-full text-center'>affiliate marketing</h5>
              <h3 className='font black capitalize text-2xl font-bold '>nutrition: build your perfect diet & meal plan</h3>

              <div className='flex items-center gap-2'>
                <div className='flex items-center'>
                  <IoStar className='w-7 h-7 text-yellow-300' />
                  <IoStar className='w-7 h-7 text-yellow-300' />
                  <IoStar className='w-7 h-7 text-yellow-300' />
                  <IoStar className='w-7 h-7 text-yellow-300' />
                  <IoStarOutline className='w-7 h-7 text-yellow-300' />
                </div>

                <div>
                  <p className='text-gray-400 font size-desc capitalize'>(4.50/2 rating)</p>
                </div>
              </div>

              <div className='flex items-center gap-3 mb-5'>
                <img src={P2} alt="" className='w-16 h-16 rounded-full' />
                <div className='flex flex-col items-center gap-2'>
                  <h4 className='font-bold font size-text capitalize'>admin</h4>
                  <p className='size-desc font text-gray-400'>instructor</p>
                </div>
              </div>
              <div className='w-full mr-auto'>
                <div className='md:w-[320px] -translate-x-4 sm:w-[420px] bg-gray-200 border-2 flex justify-center items-center text-center mr-auto'></div>
              </div>
              <div>
                <div className='flex items-center justify-between mt-4'>
                  <div className='flex items-center gap-2'>
                    <FaBookAtlas className='w-7 h-7' />
                    <p className='font size-text text-gray-400'>6 leasson</p>
                  </div>

                  <div className='font capitalize flex items-center gap-2'>
                    <FaUser className='w-7 h-7 black' />
                    <p className='size-text text-gray-400'>1 student</p>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className='md:w-[310px] relative overflow-hidden bg-blue-200 hover:scale-110 duration-300 ease-linear cursor-pointer' data-aos='zoom-in' data-aos-duration='1200'>
            <img src={P3} alt="" className='md:w-[310px] mdh-[180px] hover:scale-110 duration-300 ease-linear' />

            <div className='absolute text-center md:translate-y-32 md:top-2 ml-3 sm:-translate-y-9'>
              <span className='w-4 h-4 rounded-full bg-orange-400 text-white px-6 py-1'>free</span>
            </div>


            <div className='flxe items-center flex-col space-y-2 px-6 mt-6 mb-12'>
              <h5 className='font size-text capitalize bg-orange-200 text-center text-orange-400 px-4 rounded-full'>teacher</h5>
              <h3 className='font black capitalize text-2xl font-bold '>nutrition: build your perfect diet & meal plan</h3>

              <div className='flex items-center gap-2'>
                <div className='flex items-center'>
                  <IoStar className='w-7 h-7 text-yellow-300' />
                  <IoStar className='w-7 h-7 text-yellow-300' />
                  <IoStar className='w-7 h-7 text-yellow-300' />
                  <IoStar className='w-7 h-7 text-yellow-300' />
                  <IoStarOutline className='w-7 h-7 text-yellow-300' />
                </div>

                <div>
                  <p className='text-gray-400 font size-desc capitalize'>(4.50/2 rating)</p>
                </div>
              </div>

              <div className='flex items-center gap-3 mb-5'>
                <img src={P4} alt="" className='w-16 h-16 rounded-full' />
                <div className='flex flex-col items-center gap-2'>
                  <h4 className='font-bold font size-text capitalize'>admin</h4>
                  <p className='size-desc font text-gray-400'>instructor</p>
                </div>
              </div>
              <div className='w-full mr-auto'>
                <div className='md:w-[320px] -translate-x-4 sm:w-[420px] bg-gray-200 border-2 flex justify-center items-center text-center mr-auto'></div>
              </div>
              <div>
                <div className='flex items-center justify-between mt-4'>
                  <div className='flex items-center gap-2'>
                    <FaBookAtlas className='w-7 h-7' />
                    <p className='font size-text text-gray-400'>6 leasson</p>
                  </div>

                  <div className='font capitalize flex items-center gap-2'>
                    <FaUser className='w-7 h-7 black' />
                    <p className='size-text text-gray-400'>1 student</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className='md:w-[310px] overflow-hidden relative bg-blue-200 hover:scale-110 duration-300 ease-linear cursor-pointer' data-aos='fade-left' data-aos-duration='1200'>
            <img src={P5} alt="" className='md:w-[310px] mdh-[180px] hover:scale-110 duration-300 ease-linear' />


            <div className='absolute text-center md:translate-y-32 md:top-2 sm:-translate-y-9 ml-3'>
              <span className='w-4 h-4 rounded-full bg-green-400 text-white px-6 py-1'>free</span>
            </div>


            <div className='flxe items-center flex-col space-y-2 px-6 mt-6 mb-12'>
              <h5 className='font size-text capitalize bg-green-200 text-center text-green-500 px-4 rounded-full'>data science</h5>
              <h3 className='font black capitalize text-2xl font-bold '>nutrition: build your perfect diet & meal plan</h3>

              <div className='flex items-center gap-2'>
                <div className='flex items-center'>
                  <IoStar className='w-7 h-7 text-yellow-300' />
                  <IoStar className='w-7 h-7 text-yellow-300' />
                  <IoStar className='w-7 h-7 text-yellow-300' />
                  <IoStar className='w-7 h-7 text-yellow-300' />
                  <IoStarOutline className='w-7 h-7 text-yellow-300' />
                </div>

                <div>
                  <p className='text-gray-400 font size-desc capitalize'>(4.50/2 rating)</p>
                </div>
              </div>

              <div className='flex items-center gap-3 mb-5'>
                <img src={P6} alt="" className='w-16 h-16 rounded-full' />
                <div className='flex flex-col items-center gap-2'>
                  <h4 className='font-bold font size-text capitalize'>admin</h4>
                  <p className='size-desc font text-gray-400'>instructor</p>
                </div>
              </div>
              <div className='w-full mr-auto'>
                <div className='md:w-[320px] -translate-x-4 sm:w-[420px] bg-gray-200 border-2 flex justify-center items-center text-center mr-auto'></div>
              </div>
              <div>
                <div className='flex items-center justify-between mt-4'>
                  <div className='flex items-center gap-2'>
                    <FaBookAtlas className='w-7 h-7' />
                    <p className='font size-text text-gray-400'>6 leasson</p>
                  </div>

                  <div className='font capitalize flex items-center gap-2'>
                    <FaUser className='w-7 h-7 black' />
                    <p className='size-text text-gray-400'>1 student</p>
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

export default Popular