import Logo from "./Logo";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

export default function MobileHeader() {
   return (
      <header className="md:hidden flex p-3 items-center justify-between sticky top-0 bg-white border-b border-gray-200">
         <Logo />
         <Link href={'/profile'} className="hover:underline h-14 hover:bg-blue-500 w-14 flex items-center justify-center mb-3 rounded-lg">
            <div className="h-8 w-14 flex items-center justify-center rounded-xl">
               <FaUserCircle
                  size={24}
                  className='hover:fill-white'
               />
            </div>
         </Link>
      </header>
   )
}