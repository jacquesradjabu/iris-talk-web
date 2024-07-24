"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import ChatHeader from "@/components/ChatHeader";
import { useForm, SubmitHandler } from "react-hook-form";
import UserMessage from "@/components/UserMessage";
import { messageData } from "@/data/messageData";
import { sendMessage, getTalk } from "@/utils/messageAPI";

type Inputs = {
   messageContent: string;
}

export default function MessageByUser({ params }: {
   params: {
      messageId: string;
   }
}) {
   const [senderName, setSenderName] = useState('');
   const [messageList, setMessageList] = useState<any>([]);
   const { register, handleSubmit, reset } = useForm<Inputs>();
   // load the sender Name from the server
   useEffect(() => {
      const loadSenderUser = async () => {
         try {
            const currentUserData = await axios.get(`http://localhost:8000/api/users/${params.messageId}`, {
               headers: {
                  'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
               }
            });
            const result = await currentUserData;
            setSenderName(await result.data.userName);
         } catch (err) {
            console.log('Failed to fetch users');
         }
      }
      loadSenderUser()
   }, []);

   // load the all the discussion messages

   useEffect(() => {
      console.log('laoding all messages else say hello to sender');
   }, []);

   const onSubmit: SubmitHandler<Inputs> = async (d) => {
      try {
         alert(d.messageContent);
         reset();
      } catch (e) {
         console.warn(e);
      }
   }

   return (
      <div className="flex-1">
         {/* <!-- Chat Header --> */}
         <ChatHeader
            userName={senderName}
            userId={params.messageId}
         />
         {/* <!-- Chat Messages --> */}


         {/* <ChatMessages /> */}
         <div className="h-screen overflow-y-auto p-4 pb-36">
            {
               messageData.map((item: any, index: any) => (
                  <UserMessage key={index} messageContent={item.messageContent} time={item.time} state={item.state} />
               ))
            }
         </div>

         {/* <!-- Chat Input --> */}
         {/* w-3/4 default width */}
         <div className="bg-white border-t border-gray-300 p-4 absolute bottom-0 md:w-2/4 lg:w-2/3">
            <form
               onSubmit={handleSubmit(onSubmit)} className="flex items-center"
            >
               <input
                  type="text"
                  placeholder="Type a message..."
                  {...register('messageContent', { required: true, })}
                  className="w-full p-2 px-4 rounded-md border border-gray-400 focus:outline-none focus:border-[#8098F9]"
               />
               <button className="bg-blue-500 hover:bg-blue-600 text-gray-50 px-4 py-2 rounded-md ml-2">Send</button>
            </form>
         </div>
      </div>
   );
}