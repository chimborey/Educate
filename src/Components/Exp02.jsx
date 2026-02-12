import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import E1 from '../assets/e1.jpg'
const Exp02 = () => {
  return (
    <section className='mb-7'>
      <main className='flex flex-col items-center gap-7 w-full' data-aos='fade-left' data-aos-duration='1200'>
        <h3 className='black font-bold text-3xl capitalize font'>real experiences from our dedicated learners</h3>

        <div className='w-full bg-white h-[280px] rounded-lg flex flex-col items-center justify-start px-4'>
          <div>
            <div className='w-10 h-10 green mt-5'>
              <FaQuoteLeft />
            </div>

            <div>
              <p className='font size-desc neutral'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis alias aliquam tempore voluptate sint dicta voluptas ullam, temporibus corporis nobis. Necessitatibus corrupti assumenda inventore cum praesentium ea!</p>
            </div>

            <div className='flex items-center text-yellow-300 mt-4'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />

            </div>
          </div>

          <div className='mr-auto mt-4 flex items-center gap-2'>
            <img src={E1} alt="" className='w-10 h-10 rounded-full' />

            <div>
              <h3 className='font size-text black font-bold capitalize'>john smith</h3>
              <p className='font size-desc capitalize neutral'>developer</p>
            </div>
          </div>

          <div className='w-10 h-10 green ml-auto absolute bottom-0 right-2'>
            <FaQuoteRight />
          </div>
        </div>
      </main>
    </section>
  )
}

export default Exp02