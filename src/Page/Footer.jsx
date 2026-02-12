import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <section className='w-full bg-slate-950 py-12'>
      <main className='container grid grid-cols-1 md:grid-cols-4 gap-7'>
        <div className='flex items-start gap-3 flex-col'>
          <h3 className='font size-title text-red-700'>Educate</h3>
          <p className='font size-desc neutral'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, totam nisi. Fuga sed ex voluptatum optio rerum voluptatibus hic at, laborum magnam accusamus.</p>
        </div>

        <div className='flex items-center gap-3 flex-col capitalize'>
          <h3 className='font size-title text-red-700'>
            Links
          </h3>
          <div className='flex justify-between flex-col items-center gap-3 size-text'>
            <Link to={'/'} className='font  white capitalize hover:scale-110 duration-300 font-bold'>home</Link>
            <Link to={'/about'} className='font  white  capitalize hover:scale-110 duration-300 font-bold'>about</Link>
            <Link to={'/course'} className='font white  capitalize hover:scale-110 duration-300 font-bold'>course</Link>
            <Link to={'/page'} className='font  white  capitalize hover:scale-110 duration-300 font-bold'>page</Link>
            <Link to={'/blog'} className='font  white  capitalize hover:scale-110 duration-300 font-bold'>blog</Link>
            <Link to={'/contact'} className='font white  capitalize hover:scale-110 duration-300 font-bold'>contact</Link>
          </div>
        </div>

        <div className='flex items-center gap-3 flex-col capitalize'>
          <h3 className='font size-title text-red-700'>Work</h3>
          <div className='flex justify-between flex-col items-center gap-3 size-text'>
            <Link className='font  white capitalize hover:scale-110 duration-300 font-bold'>fontend</Link>
            <Link className='font  white  capitalize hover:scale-110 duration-300 font-bold'>Backend</Link>
            <Link className='font white  capitalize hover:scale-110 duration-300 font-bold'>web design</Link>
            <Link className='font  white  capitalize hover:scale-110 duration-300 font-bold'>full stack</Link>
            <Link className='font  white  capitalize hover:scale-110 duration-300 font-bold'>pyton web</Link>
            <Link className='font white  capitalize hover:scale-110 duration-300 font-bold'>java web</Link>
          </div>
        </div>

        <div className='flex items-center gap-3 flex-col capitalize'>
          <h3 className='font size-title text-red-700'>Stay Update</h3>
          <p className='font size-desc neutral'>subscribe to our newsletter for the latest updates</p>
          <div className='flex w-[330px] justify-center items-center relative rounded-md gap-3'>
            <input type="text" name="" id="" placeholder='Enter your email'className='w-[330px] border border-gray-300 py-2 rounded-md px-3 py-2'/>
            <button className='bg-red-700 text-white px-4 py-2.5 hover:bg-red-800 duration-300 border-gray-300 absolute right-0 rounded'>Subscribe</button>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Footer