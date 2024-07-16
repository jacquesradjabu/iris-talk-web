import { FaSearch } from 'react-icons/fa';
import UserCard from './UserCard';
import { messageData } from '@/data/messageData';
export default function ContactList() {
   return (
      <div className="overflow-y-auto h-screen p-3 mb-9 pb-20">

         <div className="w-full flex p-2 mb-3 rounded-md px-4 bg-[#8098F9] text-[#f5f5f5]">
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