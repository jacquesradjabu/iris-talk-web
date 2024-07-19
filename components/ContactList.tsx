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
import { useState, useEffect } from 'react';
import { list } from '@/utils/userAPI';

export default async function ContactList() {
   const [users, setUsers] = useState<any[]>([]);
   const [error, setError] = useState<string | null>(null);
   fetch('http://localhost:8000/api/users/').then(resp => resp.json()).then(data => console.log(data));
   // useEffect(() => {
   //    const controller = new AbortController();
   //    const fetchData = async () => {
   //       try {
   //          const userList = await list(controller.signal);
   //          setUsers(userList);
   //       } catch (err) {
   //          setError('Failed to fetch users');
   //       }
   //    });

   // fetchData();


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

         <h1>Hello world</h1>

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