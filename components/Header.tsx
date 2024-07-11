"use client";
import Menu from "./Menu";
import Logo from "./Logo";
import { ToastsContainer, ToastsStore } from "react-toasts";
import { useState } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import Navigation from "./Navigation";

export default function Header() {
   const router = useRouter();
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const showMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   }
   const handleLogout = () => {
      // localStorage.removeItem('users');

      ToastsStore.warning('Logged out');
      setTimeout(() => {
         router.push('/');
      }, 3000);
   }
   return (
      <header className="bg-white p-3 shadow-sm border-b border-gray-200 text-slate-800 sticky top-0">
         <div className="container flex items-center justify-between">
            <Logo />
            <Navigation classes="hidden md:flex" />
            <Menu handleClick={showMenu} showMenu={isMenuOpen} />
            <Button
               title="LOGOUT"
               classes="hidden bg-[#8098F9] text-gray-100 font-normal md:block"
               handleClick={handleLogout}
            />
         </div>
         {isMenuOpen && <Navigation handleLogout={handleLogout} classes="flex-col md:hidden py-4 justify-center items-center" />}
         <ToastsContainer store={ToastsStore} lightBackground />
      </header >
   );
}