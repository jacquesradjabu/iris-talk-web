import Link from "next/link";
import { FaInbox, FaSearch, FaUserFriends } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";

export default function Footer() {
   return (
      <footer className="md:hidden p-3 border-t border-gray-200 bottom-0 sticky bg-white">
         <nav className="flex justify-between items-center">
            <Link href={'/'} className="hover:underline h-14 hover:bg-blue-500 w-14 flex items-center justify-center mb-3 rounded-lg">
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
      </footer>
   );
}