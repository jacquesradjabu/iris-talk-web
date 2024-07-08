"use client";
import { navigationData } from "@/data/navigationData";
import { useState } from "react";
import NavItem from "./NavItem";
import Link from "next/link";
import Logo from "./Logo";
import { AiFillSetting } from 'react-icons/ai';
import { FaInbox, FaSearch, FaUserCircle, FaUserFriends } from 'react-icons/fa';
import { } from 'react-icons/lib';
import MobileHeader from "./MobileHeader";

export default function Header() {
   /*
   MIT License

   Copyright (c) 2024 Birusha Ndegeya and Contributors

   Permission is hereby granted, free of charge, to any person obtaining a copy
   of this software and associated documentation files (the "Software"), to deal
   in the Software without restriction, including without limitation the rights
   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   copies of the Software, and to permit persons to whom the Software is
   furnished to do so, subject to the following conditions:

   The above copyright notice and this permission notice shall be included in all
   copies or substantial portions of the Software.

   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   SOFTWARE.
   */
   return (
      <div>
         <MobileHeader />
         <header className="hidden md:flex bg-white flex-col items-center justify-between h-screen px-3 shadow-xl border-r border-gray-200 w-20">
            <Logo />

            <nav className="flex flex-col gap-6">
               <Link href={'/'} className="hover:underline h-14 hover:bg-blue-500 hover:h-8 w-14 flex items-center justify-center mb-3 rounded-lg">
                  <div className="h-8 w-14 flex items-center justify-center rounded-xl">
                     <FaInbox
                        size={24}
                        className='hover:fill-white'
                     />
                  </div>
               </Link>
               <Link href={'/contacts'} className="hover:underline h-14 hover:bg-blue-500 w-14 flex items-center justify-center mb-3 rounded-lg">
                  <div className="h-8 w-14 flex items-center justify-center rounded-xl">
                     <FaUserFriends
                        size={24}
                        className='hover:fill-white'
                     />
                  </div>
               </Link>

               <Link href={'/search'} className="hover:underline h-14 hover:bg-blue-500 w-14 flex items-center justify-center mb-3 rounded-lg">
                  <div className="h-8 w-14 flex items-center justify-center rounded-xl">
                     <FaSearch
                        size={24}
                        className='hover:fill-white'
                     />
                  </div>
               </Link>

               <Link href={'/settings'} className="hover:underline h-14 hover:bg-blue-500 w-14 flex items-center justify-center mb-3 rounded-lg">
                  <div className="h-8 w-14 flex items-center justify-center rounded-xl">
                     <AiFillSetting
                        size={24}
                        className='hover:fill-white'
                     />
                  </div>
               </Link>
            </nav>

            <Link href={'/profile'} className="hover:underline h-14 hover:bg-blue-500 w-14 flex items-center justify-center mb-3 rounded-lg">
               <div className="h-8 w-14 flex items-center justify-center rounded-xl">
                  <FaUserCircle
                     size={24}
                     className='hover:fill-white'
                  />
               </div>
            </Link>
         </header >
      </div>
   );
}