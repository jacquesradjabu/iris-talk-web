"use client";
import { useState } from "react";
import Button from "@/components/Button";
import Alert from "@/components/Alert";
import UpdateProfile from "@/components/UpdateProfile";
import Avatar from "@/components/Avatar";

export default function ProfileId(
   { params }: {
      params: {
         profileId: string;
      }
   }) {
   const [isVisible, setIsVisible] = useState(false);
   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
   const showVisibility = () => {
      setIsVisible(!isVisible);
   }
   const showVisibilityUpdateProfile = () => {
      setIsEditModalOpen(!isEditModalOpen);
   }
   return (
      <div className="flex-1 p-32 items-center justify-center">

         {/* <!-- Card start --> */}
         <div className="max-w-sm mx-auto rounded-lg overflow-hidden bg-gray-50 border border-gray-300 shadow-lg flex items-center justify-center">
            <div className="px-4 pb-6">
               <div className="text-center my-4">
                  {/* <img className="h-32 w-32 rounded-full mx-auto my-4"
                     src={`https://randomuser.me/api/portraits/women/21.jpg`} alt="" width={128} height={128}
                  /> */}
                  <div className="flex items-center justify-center">
                     <Avatar
                        className="w-32 h-32"
                     />
                  </div>
                  <div className="py-2">
                     <h3 className="font-bold text-2xl text-gray-800 mb-1">Cait Genevieve</h3>
                     <div className="inline-flex text-gray-700 items-center flex-col">
                        <p className="text-slate-500 text-sm">birushandegeya@gmail.com</p>
                        <p>
                           New York, NY Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                     </div>
                  </div>
               </div>
               <div className=" flex p-1 gap-4 justify-center items-center">
                  <Button
                     className="bg-blue-400 hover:bg-blue-500 focus:ring-blue-300"
                     title="UPDATE"
                     handleClick={showVisibilityUpdateProfile}
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

         <Alert
            isVisible={isVisible}
            showVisibility={showVisibility}
         />

         {/* update profile */}

         <UpdateProfile cancel={showVisibilityUpdateProfile} save={showVisibilityUpdateProfile} visibility={isEditModalOpen} />
      </div>
   );
}