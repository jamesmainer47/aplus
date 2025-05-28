"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { useState } from 'react';




const links = [
  {name: "Home", url:"/"},
  {name: "Services", url:"./Service.tsx"},
  {name: "Destinations", url:"./Destinations.tsx"},
  {name: "About", url:"./About.tsx"},
];

export default function Navbar() {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = ():void => {
    setisClick(!isClick);
  };

  return(
    <nav className='bg-black/95 md:rounded-full md:mt-10 md:p-2 z-50 fixed left-1/2 -translate-x-1/2 top-0 h-25 items-center justify-between backdrop-blur-sm  w-11/12 max-w-7xl'>
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a className='flex  items-center text-3xl bg-gradient-to-r from-yellow-500 to-blue-400 text-transparent bg-clip-text uppercase' href="./Home.tsx" >
                <Image src="/android-chrome-512x512.png" width={100} height={100} alt="" className="mx-2 w-20 h-20 p-1 items-center justify-center rounded-full border-x-blue-400 border-y-yellow-200 border-2"/>
                aplus 
              </a>
              
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <ul className='flex-column block md:flex mt-2'>
                {links.map((el) => (
                  <li key={el.name}>
                    <Link href={el.url} className='text-[20px] text-white md:mx-3 my-2 py-1 relative before:content-[""] before:absolute before:w-0 hover:before:w-full before:h-1 before:bg-blue-600 left-0 before:duration-500 before:bottom-0  hover:bg-transparent rounded-lg'>{el.name}</Link>
                  </li>  
                ))}
              </ul>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button 
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={toggleNavbar}
            >
              {isClick ? (
                <svg className='h-6 w-6'
                xmlns='https://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                >
                  <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ): (
                <svg className='h-6 w-6'
                xmlns='https://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                >
                  <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16m-7 6h7'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <ul className='space-y-3 block md:space-y-0 md:flex md:mt-2'>
                {links.map((el) => (
                  <li key={el.name}>
                    <Link href={el.url} className='text-white md:mx-3 my-3 py-1 relative before:content-[""] before:absolute before:w-0 hover:before:w-full before:h-1 before:bg-blue-600 left-0 before:duration-500 before:bottom-0  hover:bg-transparent rounded-lg'>{el.name}</Link>
                  </li>  
                ))}
              </ul>
          </div>
        </div>
      )}
    </nav>
  );
}






/**
const Navbar = () => {
  return (
    <nav>
      <h2>APLUS</h2>
      <ul></ul>
    </nav>
  )
}

export default Navbar
 */