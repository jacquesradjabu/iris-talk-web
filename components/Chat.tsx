"use client";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import Button from './Button';
interface Message {
   author: string;
   content: string;
   timestamp: string;
}

export default function Chat() {
   const [messages, setMessages] = useState<Message[]>([]);
   const { handleSubmit, register, reset } = useForm();
   const onSubmit = (data: any) => {
      if (data.message.trim() === '') return;
      const newMessage: Message = {
         author: 'Birusha',
         content: data.message,
         timestamp: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, newMessage]);
      alert(data.message);
      reset();
   }
   return (
      <div className="p-4 flex flex-col h-full">
         <div className="flex-1 overflow-y-auto">
            {messages.map((msg, index) => (
               <div key={index} className="my-2 p-2 bg-gray-200 rounded shadow-sm">
                  <div className="text-sm text-gray-600">{msg.author}</div>
                  <div>{msg.content}</div>
                  <div className="text-xs text-gray-500">{msg.timestamp}</div>
               </div>
            ))}
         </div>
         <form
            className="flex bg-red-500 fixed w-full h-10 mx-auto my-5 bottom-0"
            onSubmit={handleSubmit(onSubmit)}>
            <input
               type="text"
               {...register('message', { required: true })}
               className="flex-1 p-2 border rounded outline-none"
               placeholder="Type a message..."
            />
            <button
               type='submit'
               className="ml-2 p-2 bg-blue-500 text-white rounded"
            >
               Send
            </button>
         </form>
      </div>
   );
};