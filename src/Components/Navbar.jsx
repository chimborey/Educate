import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCloseFullscreen } from "react-icons/md";
import { SignInButton, SignUpButton, SignedIn, UserButton, SignedOut } from '@clerk/clerk-react';
const Navbar = () => {
      const [isOpenNav, setIsOpenNav] = useState(false)
      return (
            <section className='w-full top-0 left-0 z-50 bg-white border shadow-md fixed cursor-pointer'>
                  <nav className='flex items-center justify-between gap-12 h-14 container'>
                        {/* logo */}
                        <Link to={'/'} className='flex items-center' data-aos='zoom-in' data-aos-duration='1200'>
                              <img src={Logo} alt="" className='md:w-[15%] md:h-[15%] sm:w-[25%] sm:h-[25%] rounded-full' />
                              <h3 className='black font size-title capitalize font-bold'>educate</h3>
                        </Link>

                        {/* menu */}
                        <div className='py-14 hidden md:block -translate-x-20'>
                              <div className='flex justify-between items-center gap-7 size-text' data-aos='zoom-in' data-aos-duration='1200'>
                                    <Link to={'/'} className='font black capitalize hover:scale-110 duration-300 font-bold'>home</Link>
                                    <Link to={'/about'} className='font black capitalize hover:scale-110 duration-300 font-bold'>about</Link>
                                    <Link to={'/course'} className='font black capitalize hover:scale-110 duration-300 font-bold'>course</Link>
                                    <Link to={'/page'} className='font black capitalize hover:scale-110 duration-300 font-bold'>page</Link>
                                    <Link to={'/blog'} className='font black capitalize hover:scale-110 duration-300 font-bold'>blog</Link>
                                    <Link to={'/contact'} className='font black capitalize hover:scale-110 duration-300 font-bold'>contact</Link>
                              </div>
                        </div>

                        {/* btn */}
                        <div className='flex items-center gap-4' data-aos='zoom-in' data-aos-duration='1200'>
                              <button>
                                    {/* Show the sign-in and sign-up buttons when the user is signed out */}
                                    <SignedOut>
                                          <SignUpButton className='btn font font-bold' />
                                    </SignedOut>
                                    {/* Show the user button when the user is signed in */}
                                    <SignedIn>
                                          <UserButton />
                                    </SignedIn>
                              </button>

                              <button className='py-4 sm:block md:hidden'>
                                    {
                                          isOpenNav ?
                                          <MdCloseFullscreen onClick={()=> setIsOpenNav(!isOpenNav)} className='w-10 h-10 font font-bold size-title black'/>
                                          :
                                          <GiHamburgerMenu  onClick={()=> setIsOpenNav(!isOpenNav)} className='w-10 h-10 font font-bold size-title black'/>
                                    }
                              </button>
                        </div>
                  </nav>

                  {/* menu mobile */}
                  <div className={`${isOpenNav ? 'block' : 'hidden'} flex justify-center items-center py-12`} onClick={()=> setIsOpenNav(!isOpenNav)}>
                              <div className='flex justify-between flex-col items-center gap-12 size-text'>
                                    <Link to={'/'} className='font black capitalize hover:scale-110 duration-300 font-bold'>home</Link>
                                    <Link to={'/about'} className='font black capitalize hover:scale-110 duration-300 font-bold'>about</Link>
                                    <Link to={'/course'} className='font black capitalize hover:scale-110 duration-300 font-bold'>course</Link>
                                    <Link to={'/page'} className='font black capitalize hover:scale-110 duration-300 font-bold'>page</Link>
                                    <Link to={'/blog'} className='font black capitalize hover:scale-110 duration-300 font-bold'>blog</Link>
                                    <Link to={'/contact'} className='font black capitalize hover:scale-110 duration-300 font-bold'>contact</Link>
                              </div>
                        </div>
            </section>
      )
}

export default Navbar