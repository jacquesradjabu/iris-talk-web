"use client";
import { users, IFakeData } from "@/data/fake";
import { useContext } from "react";
import ChatHeader from "@/components/ChatHeader";
import ChatMessages from "@/components/ChatMessages";
import { useForm, SubmitHandler } from "react-hook-form";
// import AuthProvider from "@/providers/AuthProvider";
// import { AuthContext } from "@/contexts/authContext";
type Inputs = {
   userContent: string;
}

export default function MessageByUser({ params }: {
   params: {
      messageId: string;
   }
}) {
   const { register, handleSubmit } = useForm<Inputs>();
   const onSubmit: SubmitHandler<Inputs> = (d) => {
      // alert(d.userContent);
   }
   const userData: IFakeData | any = users.find(u => u.userId === params.messageId);
   const {  userName, userId } = userData;
   // alert(userName);
   // const { userName } = messageUserId
   // console.log(params.messageId);
   // console.log(messageUserId);
   return (
      <div className="flex-1">
         {/* <!-- Chat Header --> */}
         <ChatHeader
            userName={userName}
            userId={userId}
         />
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
               <button className="bg-blue-400 hover:bg-blue-500 text-gray-50 px-4 py-2 rounded-md ml-2">Send</button>
            </form>
         </div>
      </div>
   );
}