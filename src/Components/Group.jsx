import React from 'react'
import { FaStar } from 'react-icons/fa6';
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import Herologo from '../assets/heroimg.png'
import G1 from '../assets/g1.jpg'
import G2 from '../assets/g2.png'
const Group = () => {
  return (
    <section className='w-full py-14'>
      <main className='container overflow-hidden flex flex-col gap-7'>
        <div className='flex justify-between items-center flex-col mb-7 capitalize'>
          <h3 className='font size-text black font-bold'>page us</h3>
          <p className='font sinze-desc neutral'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sint maiores eum aut.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-7 '>
          {/* group-left */}
          <div data-aos='fade-right' data-aos-duration='1200'>
            <div className='relative cursor-pointer hover:scale-110 duration-300 ease-linear'>
              <img src={G1}alt="" className='md:w-[439px] md:h-[280px] rounded-lg' />

              <div className='white absolute -translate-y-40 translate-x-48'>
                <SiGoogledisplayandvideo360 className='w-16 h-16 rounded-full shadow bg-green-400 px-4 py-4' />
              </div>
            </div>
          </div>


          {/* group-right */}
          <div className='flex justify-between md:w-[570px] sm:w-[520px] bg-green-200 items-center px-2 rounded-lg' data-aos='fade-left' data-aos-duration='1200'>
            <div className='flex justify-between items-center flex-col capitalize mr-auto'>
              <span className='font green size-desc mr-auto'>designning</span>
              <h3 className='font font-bold text-3xl black'>creative graphyic design with adobe suite</h3>
              <div className='flex items-center gap-2 mr-auto'>
                <div className='flex items-center text-yellow-300'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <div>
                  <span className='font text-gray-300 size-desc'>(4.5/3 rating)</span>
                </div>
              </div>

              <div className=' mr-auto'>
                <h5 className='gap-4 font size-texx'>
                  <span className='green'>$35</span> <span className='black'><del>$60</del></span>
                </h5>
              </div>
              <button className='cart capitalize mr-auto mt-6'>enrol now</button>
            </div>

            <div>
              <img src={G2} alt="" className='w-[670px] h-[290px]'/>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Group