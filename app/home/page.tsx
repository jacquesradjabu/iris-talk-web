"use client";
import ChatHeader from "@/components/ChatHeader";
import ChatMessages from "@/components/ChatMessages";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
   userContent: string;
}

export default function Home() {
   const { register, handleSubmit } = useForm<Inputs>();
   const onSubmit: SubmitHandler<Inputs> = (d) => {
      alert(d.userContent);
   }
   return (
      <div className="flex-1">
         {/* <!-- Chat Header --> */}
         <ChatHeader />
         {/* <!-- Chat Messages --> */}
         <ChatMessages />
         {/* <!-- Chat Input --> */}
         {/* w-3/4 default width */}
         <div className="bg-white border-t border-gray-300 p-4 absolute bottom-0 md:w-2/4 lg:w-2/3">
            <form
               onSubmit={handleSubmit(onSubmit)} className="flex items-center"
            >
               <input
                  type="text"
                  placeholder="Type a message..."
                  {...register('userContent', { required: true, })}
                  className="w-full p-2 px-4 rounded-md border border-gray-400 focus:outline-none focus:border-[#8098F9]"
               />
               <button className="bg-[#8098F9] text-gray-50 px-4 py-2 rounded-md ml-2 hover:opacity-75">Send</button>
            </form>
         </div>
      </div>
   );
}