import Message from "@/components/Message";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import Chat from "@/components/Chat";


export default function Home() {

   return (
      <div className="h-screen overflow-scroll container relative">
         <Chat />
         <Navbar />
         <SearchBar />
         
         <div className="flex p-3 flex-col gap-4">

         <Message />
         <Message />
         <Message />
         <Message />
         <Message />
         <Message />
         <Message />
         <Message />
         <Message />
         <Message />
         <Message />
         <Message />
         <Message />
         <Message />
         <Message />
         <Message />
         <Message />
         <Message />
         <Message />
         <Message />
         </div>
         <button></button>
      </div>
   );
}
