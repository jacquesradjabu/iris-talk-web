"use client";
import { useState, useContext, useEffect } from "react";
import Button from "@/components/Button";
import Alert from "@/components/Alert";
import UpdateProfile from "@/components/UpdateProfile";
import { FaJournalWhills, FaCalendarTimes, FaCalendarWeek } from 'react-icons/fa';
import Avatar from "@/components/Avatar";
import { AuthContext } from "@/contexts/authContext";
import axios from "axios";

export default function ProfilePage() {
   const { userName, userDescription, userAvatarURL, userEmail, created, userId } = useContext(AuthContext);
   const [loading, setLoading] = useState(true);
   const [userProfile, setUserProfile] = useState<any>([]);
   const [isVisible, setIsVisible] = useState(false);
   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
   const showVisibility = () => {
      setIsVisible(!isVisible);
   }
   const showVisibilityUpdateProfile = () => {
      setIsEditModalOpen(!isEditModalOpen);
   }

   useEffect(() => {
      const controller = new AbortController();
      const fetchData = async () => {
         try {
            const currentUserData = await axios.get(`http://localhost:8000/api/users/${localStorage.getItem('currentUserId') || userId}`, {
               headers: {
                  'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
               }
            });
            const result = await currentUserData;
            setUserProfile(result.data);
            setLoading(!loading);
         } catch (err) {
            console.log('Failed to fetch users');
            setLoading(!loading);
         }
      }
      fetchData()
   }, []);

   return (
      <div className="flex-1 p-32 items-center justify-center">

         {/* <!-- Card start --> */}
         <div className="max-w-sm mx-auto rounded-lg overflow-hidden bg-gray-50 border border-gray-300 shadow-lg flex items-center justify-center">
            <div className="px-4 pb-6">
               <div className="text-center my-4">
                  <div className="flex items-center justify-center">
                     <Avatar
                        className="w-32 h-32"
                     />
                  </div>
                  {loading ? (
                     <div className="animate-pulse flex flex-col items-center">
                        <div className="w-32 h-4 bg-gray-300 rounded mt-2"></div>
                        <div className="w-48 h-4 bg-gray-300 rounded mt-2"></div>
                        <div className="w-48 h-4 bg-gray-300 rounded mt-2"></div>
                        <div className="w-24 h-4 bg-gray-300 rounded mt-2"></div>
                     </div>
                  ) : (
                     <div className="py-2">
                        <h3 className="font-bold text-2xl text-gray-800 mb-1">{userName ? userName : userProfile.userName}</h3>
                        <div className="text-gray-700 items-center flex flex-col">
                           <p className="text-slate-500 text-sm">{userEmail ? userEmail : userProfile.userEmail}</p>
                           <div className="text-slate-500 text-sm flex gap-3 items-center py-2">
                           <FaCalendarWeek size={18} />
                           <p>Joined {created ? created : userProfile.created}</p>
                           </div>
                        
                           <p>
                              {userDescription ? userDescription : userProfile.userDescription ? userProfile.userDescription : "I am a mysterious who has yet to fill out my bio"}
                           </p>
                        </div>
                     </div>
                  )}
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
            description="Are you sure to delete your account? all of your data will be lost"
         />

         {/* update profile */}

         <UpdateProfile cancel={showVisibilityUpdateProfile} save={showVisibilityUpdateProfile} visibility={isEditModalOpen} />
      </div>
   );
}