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

"use client";
import Image from "next/image";
import Avatar from "./Avatar";
import Button from "./Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Alert from "./Alert";
import { useState } from "react";

export default function SidebarHeader({
   avatarURL,
   userName = 'Birusha'
}: {
   avatarURL: string,
   userName: string
}) {
   const router = useRouter();
   const [isVisible, setIsVisible] = useState(false);
   const useSignout = () => {
      setIsVisible(!isVisible);
      // router.push('/');
   }
   return (
      <header className="p-4 border-b border-gray-300 flex justify-between items-center">
         <Link href={'/home'}>
            <h1 className="text-2xl font-semibold text-blue-400 hover:text-blue-500">Inbox</h1>
         </Link>
         <div className="flex items-center gap-3">
            <Link href={'/home/profile'} className="flex items-center gap-3">
               <div className={`w-10 h-10 rounded-full text-gray-50 overflow-hidden hover:cursor-pointer`}>
                  {avatarURL ? (
                     <Image src={avatarURL} alt="Avatar" layout="fill" className={`w-10 h-10`} />
                  ) : (
                     <Avatar />
                  )}
               </div>
            </Link>
            <Button
               title="Signout"
               className="bg-red-400 hover:bg-red-500"
               handleClick={useSignout}
            />
         </div>

         <Alert 
            showVisibility={useSignout}
            isVisible={isVisible}
         />
      </header>
   );
}