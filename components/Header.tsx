"use client";
// import { navigationData } from "@/data/navigationData";
// import { useState } from "react";
// import NavItem from "./NavItem";
import Menu from "./Menu";
import Link from "next/link";
import Logo from "./Logo";
import { AiFillSetting } from 'react-icons/ai';
import { FaInbox, FaSearch, FaUserCircle, FaUserFriends } from 'react-icons/fa';
import { } from 'react-icons/lib';
import MobileHeader from "./MobileHeader";
import Button from "./Button";

export default function Header() {
   return (
      <header className="bg-white p-3 shadow-sm border-b border-gray-200 text-slate-800 sticky top-0">
         <div className="container flex items-center justify-between">
            <Logo />
            <nav className="hidden md:flex gap-6">
               <Link href={'/'} className="">
                  <p className="hover:text-blue-400 transition-colors">Home</p>
               </Link>
               <Link href={'/contacts'} className="">
                  <p className="hover:text-blue-400 transition-colors">Contacts</p>
               </Link>
               <Link href={'/search'} className="">
                  <p className="hover:text-blue-400 transition-colors">Search</p>
               </Link>
               <Link href={'/profile'} className="">
                  <p className="hover:text-blue-400 transition-colors">Profile</p>
               </Link>
            </nav>
            <Menu />
            <Button title="login" classes="hidden md:block" />
         </div>
      </header >
   );
}