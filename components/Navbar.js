/* eslint @next/next/no-img-element: 0 */

import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
//<Link to='/wiki' classNameName='nav-link'>Wiki</Link>
import { FaCodeBranch } from '@react-icons/all-files/fa/FaCodeBranch'
import { FaHome } from '@react-icons/all-files/fa/FaHome'
import { FaBook } from '@react-icons/all-files/fa/FaBook'
import { BsFillInfoCircleFill } from '@react-icons/all-files/bs/BsFillInfoCircleFill'
import { FaClipboardList } from '@react-icons/all-files/fa/FaClipboardList'
import { BsArrowLeftShort } from '@react-icons/all-files/bs/BsArrowLeftShort'
export const Navbar = () => {

   const [open, setOpen] = useState(false);

    return (
      <aside className={`h-screen fixed bg-[#18181B] duration-300 z-30 ${open? "md:w-60 w-20" : "w-20"}`} aria-label="Sidebar">
      <div className="overflow-y-auto h-screen py-4 px-3 rounded">
         <BsArrowLeftShort className={`bg-white text-black text-3xl rounded-full absolute -right-3 duration-150 top-9 border border-black cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
         <Link href="/" className={`flex pl-2.5 pb-2 mb-3 hover:no-underline border-b-2 border-solid border-gray-500`}>
            <img className="mr-3 h-9 rounded-full" alt='logo' src='/images/profile.gif' />
            <span className={`self-center text-lg font-semibold whitespace-nowrap text-white hover:no-underline ${!open && "scale-0"}`}>Pan_Okurka</span>
         </Link>
         <ul className="space-y-2">
            <li>
               <Link href="/" className={`flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-[#27272A] hover:no-underline ${!open && "justify-center"}`}>
                  <FaHome className={`text-3xl duration-75 text-gray-400`}></FaHome>
                  <span className={`ml-10 absolute duration-150 ${!open && "hidden scale-0 duration-75"}`}>Home</span>
               </Link>
            </li>
            <li>
               <Link href="/bio" className={`flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-[#27272A] hover:no-underline ${!open && "justify-center"}`}>
                  <FaBook className="text-3xl transition duration-75 text-gray-400 group-hover:text-white"></FaBook>
                  <span className={`flex-1 ml-10 absolute whitespace-nowrap duration-150 ${!open && "hidden scale-0 duration-75"}`}>Bio</span>
               </Link>
            </li>
            <li>
               <Link href="/info" className={`flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-[#27272A] hover:no-underline ${!open && "justify-center"}`}>
                  <BsFillInfoCircleFill className="text-3xl transition duration-75 text-gray-400 group-hover:text-white"></BsFillInfoCircleFill>
                  <span className={`flex-1 ml-10 absolute whitespace-nowrap duration-150 ${!open && "hidden scale-0 duration-75"}`}>Some Info</span>
               </Link>
            </li>
            <li>
               <Link href="/projects" className={`flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-[#27272A] hover:no-underline ${!open && "justify-center"}`}>
                  <FaClipboardList className="text-3xl transition duration-75 text-gray-400 group-hover:text-white"></FaClipboardList>
                  <span className={`flex-1 ml-10 absolute whitespace-nowrap duration-150 ${!open && "hidden scale-0 duration-75"}`}>Projects</span>
               </Link>
            </li>
        </ul>
         <div className='absolute bottom-0 left-0 text-white p-4' id="Footer">
          <div className={`text-center flex flex-col justify-center items-center duration-150 ${!open && "hidden scale-0 duration-75"}`}>
                    <h3 className='text-lg'>&copy; 2020-{new Date().getFullYear()} Pan_Okurka</h3>
                        <p className='mt-4'> 
                            <span className='mt-5 flex items-center justify-center'><FaCodeBranch/> prod-3.1.0</span>
                        </p>
          </div>
        </div>
      </div>
   </aside>
    )
}