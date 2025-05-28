import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className='bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-center p-20'>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-3xl pb-6">
              Book <span className="text-blue-600">Flights & Parcel</span>
            </p>
            <div className="flex gap-6 pb-5">
              {/* Section for icons */}
              <FaInstagram className='text-2xl cursor-pointer hover:text-pink-900'/>
              <FaWhatsapp className='text-2xl cursor-pointer hover:text-green-600'/>
              <FaLinkedin className='text-2xl cursor-pointer hover:text-blue-900'/>
              <FaTiktok className='text-2xl cursor-pointer hover:text-red-900'/>
            </div>
          </ul>
        </div>

        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Services</p>
            <li className="text-grgay-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">Flights Tickets</li>
            <li className="text-grgay-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">Parcel Tickets</li>
            <li className="text-grgay-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">Passport Card</li>
            <li className="text-grgay-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">Visa Card</li>
            <li className="text-grgay-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">Medical Form</li>
          </ul>
        </div>

        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Location</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">Off Bagamoyo Rd, Plot 325/43</li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">Mwenge Mkono wa Bwana House, 3rd Floor</li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">P. O. Box 14082, Dar es Salaam</li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">info@aplus.co.tz</li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">+255 714 235 011</li>
          </ul>
        </div>

        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Quick Links</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer"><a href="">About Us</a></li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer"><a href="">Terms & Condition</a></li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer"><a href="">Privacy Policy</a></li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer"><a href="">Help</a></li>
          </ul>
        </div>
      </div>
      
      {/* Creators */}
      <div className="flex flex-col md: justify-center items-center text-center p-5 bg-gray-100 h-1">
        <h1 className="text-gray-800 font-semibold">
          © 2025 All rights Reserved | Created by {""}
          <span className="hover:text-blue-600 font-semibold cursor-point">
            JOMAFA
          </span>{""}
        </h1>
      </div> 

    </footer>
  ) 
}

export default Footer







/**<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
          className="relative block fill-black "></path>
        </svg> */