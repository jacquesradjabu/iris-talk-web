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


import { FaSearch } from 'react-icons/fa';
import UserCard from './UserCard';
import { messageData } from '@/data/messageData';
export default function ContactList() {
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

         {/* all users will be displayed here */}
         {
            messageData.map((item, index) => (
               <UserCard
                  key={index}
                  userDescription={item.messageContent}
               />
            ))
           // if no user found, display a message here
         }
         
      </div>
   )
}