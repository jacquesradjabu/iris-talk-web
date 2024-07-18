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

import { useContext } from "react";
import { AuthContext } from "@/contexts/authContext";
import Image from "next/image";
import Link from "next/link";

export default function ChatHeader({ avatarURL = "", userName = 'Alice' }: { avatarURL?: string, userName?: string }) {
   const { userEmail } = useContext(AuthContext);
   // alert(userEmail);
   return (
      <header className="bg-white p-4 text-gray-700 flex justify-between border-b border-gray-200 w-full">
         <h1 className="text-2xl font-semibold">Alice</h1>
         <Link href={`/home/profile/${userName}`}>
            <div className={`w-10 h-10 rounded-full bg-[#8098F9] text-gray-50 overflow-hidden hover:cursor-pointer`}>
               {avatarURL ? (
                  <Image src={avatarURL} alt="Avatar" layout="fill" className={`w-10 h-10`} />
               ) : (
                  <span className="text-2xl font-semibold flex items-center justify-center w-full h-full">
                     {userName.charAt(0)}
                  </span>
               )}
            </div>
         </Link>
      </header>
   );
}