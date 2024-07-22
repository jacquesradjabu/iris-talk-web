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
import { FaSearch } from 'react-icons/fa';
import UserCard from './UserCard';
import { users } from '@/data/fake';
import { useEffect, useState } from 'react';
import { list } from '@/utils/userAPI';
import Link from 'next/link';
export default async function ContactList() {
   let global: any = [];
   const [error, setError] = useState<string | null>(null);
   // useEffect(() => {
   //    const controller = new AbortController();
   //    const fetchData = async () => {
   //       try {
   //          const userList = await list(controller.signal);
   //          const result = await userList;
   //          console.log(result);
   //          for (let i = 0; i < result.length; i++) {
   //             console.log(result[i]);
   //          }
   //          global = userList;
   //          console.log(userList);
   //          // setUsers(userList);
   //       } catch (err) {
   //          setError('Failed to fetch users');
   //       }
   //    }
   //    fetchData()
   // }, []);
   // console.log('je suis', global);
   return (
      <div className="overflow-y-auto h-screen p-3 mb-9 pb-20">

         <div className="w-full flex p-2 mb-3 rounded-md px-4 bg-blue-400 text-[#f5f5f5]">
            <input
               type="search"
               placeholder="search a friend"
               className='flex-1 bg-transparent outline-none placeholder:text-[#f5f5f5]'
            />
            <button>
               <FaSearch size={18} color='#f5f5f5' />
            </button>
         </div>
         {
            users.length == 0 && (
               <h1>No user registered yet</h1>
            )
         }
         {
            users.map((user: any, index: number) => (
               <Link
                  key={index}
                  href={`/home/${user.userId}`}>
                  <UserCard
                     userName={user.userName}
                     userEmail={user.userEmail}
                  />

               </Link>
            ))
         }
      </div>
   )
};

/*
         {
            data.length == 0 && (
               <h1></h1>
            )
         }
         {
            data.map((user: any, index: number) => (
               <UserCard
                  key={index}
                  userName={user.userName}
                  userEmail={user.userEmail}
               />
            ))
         }

*/