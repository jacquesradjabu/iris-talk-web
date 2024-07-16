"use client";
import { useState } from "react";
import Button from "@/components/Button";

export default function ProfileId(
   { params }: {
      params: {
         profileId: string;
      }
   }) {
   const [isVisible, setIsVisible] = useState(false);
   const showVisibility = () => {

   }
   return (
      <div className="flex-1 p-32 items-center justify-center">

         {/* <!-- Card start --> */}
         <div className="max-w-sm mx-auto rounded-lg overflow-hidden bg-gray-50 border border-gray-300 shadow-lg flex items-center justify-center">
            <div className="px-4 pb-6">
               <div className="text-center my-4">
                  <img className="h-32 w-32 rounded-full mx-auto my-4"
                     src={`https://randomuser.me/api/portraits/women/21.jpg`} alt="" width={128} height={128} />
                  <div className="py-2">
                     <h3 className="font-bold text-2xl text-gray-800 mb-1">Cait Genevieve</h3>
                     <div className="inline-flex text-gray-700 items-center">
                        New York, NY Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     </div>
                  </div>
               </div>
               <div className="flex p-1 gap-4 justify-center items-center">
                  <Button
                     className="bg-blue-400 hover:bg-blue-500"
                     title="EDIT"
                  />
                  <Button
                     title="DELETE"
                     className="bg-red-400 hover:bg-red-500"
                     handleClick={showVisibility}
                  />
               </div>
            </div>
         </div>
         {/* <!-- Card end --> */}



         {/* pop up delete */}

         <div id="popup-modal" className="overflow-y-auto overflow-x-hidden hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-md max-h-full">
               <div className="relative bg-gray-50 border border-gray-300 rounded-lg shadow hidden">
                  <button type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                     <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                     </svg>
                     <span className="sr-only">Close modal</span>
                  </button>
                  <div className="p-4 md:p-5 text-center">
                     <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                     </svg>
                     <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                     <button data-modal-hide="popup-modal" type="button" className="text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                        Yes, I'm sure
                     </button>
                     <button data-modal-hide="popup-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No, cancel</button>
                  </div>
               </div>
            </div>
         </div>

      </div>
   );
}