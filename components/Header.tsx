"use client";
import Menu from "./Menu";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

export default function Header() {
   return (
      <header className="bg-white p-3 shadow-sm border-b border-gray-200 text-slate-800 sticky top-0">
         <div className="container flex items-center justify-between">
            <Logo />
            <nav className="hidden md:flex gap-6">
               <Link href={'/home'} className="">
                  <p className="hover:text-blue-400 transition-colors">Messages</p>
               </Link>
               <Link href={'/home/contacts'} className="">
                  <p className="hover:text-blue-400 transition-colors">Contacts</p>
               </Link>
               <Link href={'/home/search'} className="">
                  <p className="hover:text-blue-400 transition-colors">Search</p>
               </Link>
               <Link href={'/home/profile'} className="">
                  <p className="hover:text-blue-400 transition-colors">Profile</p>
               </Link>
            </nav>
            <Menu />
            <Button
               title="LOGOUT"
               classes="hidden bg-[#8098F9] text-gray-100 font-normal md:block"
            />
         </div>
      </header >
   );
}