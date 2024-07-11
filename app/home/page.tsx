import Message from "@/components/Message";
import SearchBar from "@/components/SearchBar";
import { data } from "@/data/message";
import Link from "next/link";


export default function Home() {

   return (
      <div className="h-screen overflow-scroll container relative">
         <SearchBar />
         <div className="flex p-3 flex-col gap-4">
            {
               data.map((item, i) => (
                  <Link key={i} href={`/home/${item.name}`}>
                  <Message  name={item.name} message={item.messages.reverse()[0]} avatarURL={item.avatar} />
                  </Link>
               ))
            }
            {/* <Message /> */}
         </div>
      </div>
   );
}
