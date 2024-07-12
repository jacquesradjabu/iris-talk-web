'use client';
import { useContext } from "react";
import Message from "@/components/Message";
import SearchBar from "@/components/SearchBar";
import { data } from "@/data/message";
import Link from "next/link";


export default function Home() {
   return (

      <div className="">
         <SearchBar />
         <div className="flex p-3 flex-col gap-3 overflow-scroll">
            {
               data.map((item, i) => (
                  <Link key={i} href={`/home/${item.name}`}>
                     <Message name={item.name} message={item.messages.reverse()[0]} avatar={item.avatar} />
                  </Link>
               ))
            }
         </div>
      </div>

   );
}
