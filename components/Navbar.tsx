/**
 * @license
 * Copyright 2024 Birusha Ndegeya, sofia and Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// import React, { useContext } from 'react'
// import {signOut} from "firebase/auth"
// import { auth } from '../firebase';
'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "./Button";
// import { AuthContext } from '../context/AuthContext'
import images from "@/constants/images"
import Link from "next/link";
const Navbar = () => {
   const router = useRouter();
   const goToLogin = () => {
      router.push('/');
   };
   //   const {currentUser} = useContext(AuthContext)

   return (
      <div className='flex items-center bg-white h-14 p-3 justify-between text-slate-800 border-b border-gray-200 sticky top-0'>
         <Link href={'/home'}><span className="font-bold text-xl text-blue-400">Inbox</span></Link>
         <div className="flex gap-3 items-center">
            <Link href={'/home/profile'} className="flex gap-3 items-center">
               <Image
                  src={images.user1}
                  alt="avatar"
                  className="bg-[#ddddf7] h-6 w-6 rounded-full object-cover"
               />
               <span className="hover:text-blue-400 transition-colors">{'Birusha'}</span>
            </Link>
            {/* <button onClick={()=>signOut(auth)}>logout</button> */}
            <Button title="Logout" className="p-0 hover:text-[#8098F9] transition-colors" handleClick={goToLogin} />
         </div>
      </div>
   )
}

export default Navbar