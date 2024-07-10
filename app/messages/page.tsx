import Message from "@/components/Message";
import NewMessage from "@/components/NewMessage";
import SearchBar from "@/components/SearchBar";



export default function Home() {

   return (
      <div className="h-screen overflow-scroll container relative">
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
