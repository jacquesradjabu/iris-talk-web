export default function ChatMessages() {
   return (
      <div className="h-screen overflow-y-auto p-4 pb-36">
         {/* <!-- Incoming Message --> */}
         <div className="flex mb-4 cursor-pointer">
            <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2 bg-red-500">
               {/* <Image src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" className="w-8 h-8 rounded-full"> */}
            </div>
            <div className="flex max-w-96 rounded-lg p-3 gap-3 bg-green-300">
               <p className="text-gray-700">Hey Bob, how's it going?</p>
            </div>
         </div>

         {/* <!-- Outgoing Message --> */}
         <div className="flex justify-end mb-4 cursor-pointer">
            <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
               <p>Hi Alice! I'm good, just finished a great book. How about you?</p>
            </div>
            <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2 bg-black">
               {/* <Image src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="My Avatar" className="w-8 h-8 rounded-full"> */}
            </div>
         </div>

         {/* <!-- Incoming Message --> */}
         <div className="flex mb-4 cursor-pointer">
            <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
               {/* <Image src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" className="w-8 h-8 rounded-full"> */}
            </div>
            <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
               <p className="text-gray-700">That book sounds interesting! What's it about?</p>
            </div>
         </div>

         {/* <!-- Outgoing Message --> */}
         <div className="flex justify-end mb-4 cursor-pointer">
            <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
               <p>It's about an astronaut stranded on Mars, trying to survive. Gripping stuff!</p>
            </div>
            <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
               {/* <Image src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="My Avatar" className="w-8 h-8 rounded-full"> */}
            </div>
         </div>

         {/* <!-- Incoming Message --> */}
         <div className="flex mb-4 cursor-pointer">
            <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
               {/* <Image src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" className="w-8 h-8 rounded-full"> */}
            </div>
            <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
               <p className="text-gray-700">I'm intrigued! Maybe I'll borrow it from you when you're done?</p>
            </div>
         </div>

         {/* <!-- Outgoing Message --> */}
         <div className="flex justify-end mb-4 cursor-pointer">
            <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
               <p>Of course! I'll drop it off at your place tomorrow.</p>
            </div>
            <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
               {/* <Image src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="My Avatar" className="w-8 h-8 rounded-full"> */}
            </div>
         </div>

         {/* <!-- Incoming Message --> */}
         <div className="flex mb-4 cursor-pointer">
            <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
               {/* <Image src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" className="w-8 h-8 rounded-full"> */}
            </div>
            <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
               <p className="text-gray-700">Thanks, you're the best!</p>
            </div>
         </div>

         {/* <!-- Outgoing Message --> */}
         <div className="flex justify-end mb-4 cursor-pointer">
            <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
               <p>Anytime! Let me know how you like it. 😊</p>
            </div>
            <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
               {/* <Image src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="My Avatar" className="w-8 h-8 rounded-full"> */}
            </div>
         </div>

         {/* <!-- Incoming Message --> */}
         <div className="flex mb-4 cursor-pointer">
            <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
               {/* <Image src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" className="w-8 h-8 rounded-full"> */}
            </div>
            <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
               <p className="text-gray-700">So, pizza next week, right?</p>
            </div>
         </div>

         {/* <!-- Outgoing Message --> */}
         <div className="flex justify-end mb-4 cursor-pointer">
            <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
               <p>Absolutely! Can't wait for our pizza date. 🍕</p>
            </div>
            <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
               {/* <Image src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="My Avatar" className="w-8 h-8 rounded-full"> */}
            </div>
         </div>
         {/* <!-- Incoming Message --> */}
         <div className="flex mb-4 cursor-pointer">
            <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2 bg-black">
               {/* <Image src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" className="w-8 h-8 rounded-full"> */}
            </div>
            <div className="flex max-w-96 bg-gray-200 rounded-lg p-3 gap-3">
               <p className="text-gray-700">Hoorayy!!</p>
            </div>
         </div>
      </div>
   );
}