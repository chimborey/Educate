import React from 'react'
import Img01 from '../assets/img01.png'
import Img02 from '../assets/img02.png'
import Img03 from '../assets/img03.png'
import Img04 from '../assets/img04.png'
import Img05 from '../assets/img05.png'
const Exp01 = () => {
  return (
    <section className='w-full  h-[600px] mt-4' data-aos='fade-right' data-aos-duration='1200'>
      <div className='md:w-[460px] w-full  h-[600px] relative md:translate-x-28 sm:translate-x-24'>
            <div className='bg-green-400 rounded-full border-none w-64 h-64'></div>
            <img src={Img01} alt="" className='absolute -translate-y-64 md:-translate-x-10 sm:-translate-x-7  h-[569px] w-[760px]'/>
            

            <div className='absolute top-2 left-0 -translate-x-20'>
                  <img src={Img02} alt="" className='w-10 h-10 rounded-full  img03'/>
            </div>
            <div className='absolute top-4 md:translate-x-72 sm:translate-x-72 sm:translate-y-12'>
                  <img src={Img03} alt="" className='w-10 h-10 rounded-full img03'/>
            </div>

            <div className='absolute bottom-2 -left-12 -translate-y-44'>
                  <img src={Img04} alt="" className='w-10 h-10 rounded-full img03'/>
            </div>

            <div className='absolute -bottom-12 md:translate-x-72 md:-translate-y-44 sm:-translate-y-48 sm:translate-x-72'>
                  <img src={Img05}alt="" className='w-10 h-10 rounded-full img03'/>
            </div>
      </div>
    </section>
  )
}

export default Exp01