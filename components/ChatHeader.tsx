import Image from "next/image";
import Link from "next/link";

export default function ChatHeader({ avatarURL = "", userName = 'Alice' }: { avatarURL?: string, userName?: string }) {
   return (
      <header className="bg-white p-4 text-gray-700 flex justify-between border-b border-gray-200 w-full">
         <h1 className="text-2xl font-semibold">Alice</h1>
         <Link href={`/home/profile/${userName}`}>
            <div className={`w-10 h-10 rounded-full bg-[#8098F9] text-gray-50 overflow-hidden hover:cursor-pointer`}>
               {avatarURL ? (
                  <Image src={avatarURL} alt="Avatar" layout="fill" className={`w-10 h-10`} />
               ) : (
                  <span className="text-2xl font-semibold flex items-center justify-center w-full h-full">
                     {userName.charAt(0)}
                  </span>
               )}
            </div>
         </Link>
      </header>
   );
}