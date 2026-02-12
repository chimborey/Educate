import React from 'react'
import { FaBook } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa6";
import { RiUserVoiceFill } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";
const States = () => {
  return (
    <div className='w-full py-14 mt-12 bg-green'>
      <main className='container grid grid-cols-2 md:grid-cols-4 gap-7'>
            {/* state01 */}
            <div className='flex items-center gap-3'>
                  <div className='py-2 px-2 rounded-full state'>
                        <FaBook className='w-12 h-12 px-3 text-white'/>
                  </div>
                  <div >
                        <span className='font size-text white'>3020</span>
                        <p className='font size-desc white'>Lorem, ipsum dolor.</p>
                  </div>
            </div>

            {/* state02 */}
            <div className='flex items-center gap-3'>
                  <div className='py-2 px-2 rounded-full state'>
                        <RiUserVoiceFill className='w-12 h-12 px-3 text-white'/>
                  </div>
                  <div >
                        <span className='font size-text white'>Top</span>
                        <p className='font size-desc white'>Lorem, ipsum dolor.</p>
                  </div>
            </div>

            {/* state03 */}
            <div className='flex items-center gap-3'>
                  <div className='py-2 px-2 rounded-full state'>
                        <FaRegCircle className='w-12 h-12 px-3 text-white'/>
                  </div>
                  <div >
                        <span className='font size-text white'>Online</span>
                        <p className='font size-desc white'>Lorem, ipsum dolor.</p>
                  </div>
            </div>

            {/* state04 */}
            <div className='flex items-center gap-3'>
                  <div className='py-2 px-2 rounded-full state'>
                        <FaUserGroup className='w-12 h-12 px-3 text-white'/>
                  </div>
                  <div >
                        <span className='font size-text white'>6,000</span>
                        <p className='font size-desc white'>Lorem, ipsum dolor.</p>
                  </div>
            </div>
      </main>
    </div>
  )
}

export default States