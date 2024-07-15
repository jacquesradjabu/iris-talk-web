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
import { FaArrowLeft } from 'react-icons/fa';

export default function Navbar({ path }: { path: string; }) {
   return (
      <nav className="p-4 border-b border-gray-200">
         <Link href={`${path}`} className="text-lg font-bold">
            <FaArrowLeft
               color="#333"
               className="hover:fill-[#8098F9] transition-colors"
               size={24}
            />
         </Link>
         {/* <button onClick={()=>signOut(auth)}>logout</button> */}
         {/* <Button title="Logout" className="p-0 hover:text-[#8098F9] transition-colors" handleClick={goToLogin} /> */}
      </nav>
   );
}