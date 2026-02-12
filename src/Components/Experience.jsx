import React from 'react'
import Exp01 from './Exp01'
import Exp02 from './Exp02'
import { FaStar } from 'react-icons/fa6'
import { LuPhoneCall } from "react-icons/lu";

const Experience = () => {
  return (
    <section className='w-full overflow-hidden py-12 mx-auto'>
      <main className='grid grid-cols-1 md:grid-cols-2 gap-7 md:h-[700px] container relative'>
        <Exp01 />
        <Exp02 />
        <div className='sm:hidden md:block w-full bg-green-400 h-[130px] md:bottom-0 absolute px-2 rounded-lg' data-aos='zoom-in' data-aos-duration='1200'>
          <div className='flex justify-between items-center'>
            <h3 className='font text-2xl white capitalize font-bold'>learn anythine, abnywhere <br /> start your free trial!!</h3>

            <div>
              <div className='flex items-center gap-2'>
                <LuPhoneCall className='w-14 h-14 rounded-full px-2 py-2 text-white  bg-slate-300'/>
                <div className='flex items-center flex-col mt-4'>
                  <span className='font size-desc white capitalize'>cal anythime</span>
                <p className='font size-desc white capitalize'>+123 6374 823</p>
                </div>
              </div>
            </div>

            <div className='w-[260px] bg-white px-3 py-1 mt-5 mr-7 rounded-lg'>
              <div className='flex items-center mt-3 gap-2'>
                <FaStar className='w-6 h-6 green' />

                <div>
                  <h3 className='font size-text black capitalize mt-2'>trustpilot</h3>
                </div>
              </div>
              <div className='mt-3'>
                <h5 className='black font size-desc capitalize'>trustpilot <span className='green'>450+</span> <span>4.9 rating</span></h5>
              </div>
            </div>


          </div>
        </div>
      </main>
    </section>
  )
}

export default Experience