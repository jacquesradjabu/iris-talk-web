/**
 * @license
 * Copyright 2024 Birusha Ndegeya, sofia and Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use client';
import { useContext, useState } from "react";
import images from "@/constants/images";
import Image from "next/image";
// import {
//   collection,
//   query,
//   where,
//   getDocs,
//   setDoc,
//   doc,
//   updateDoc,
//   serverTimestamp,
//   getDoc,
// } from "firebase/firestore";
// import { db } from "../firebase";
// import { AuthContext } from "../context/AuthContext";
import { data } from "@/data/message";
import Link from "next/link";
import UserCard from "./UserCard";
export default function Search() {
   const [username, setUsername] = useState("");
   const [user, setUser] = useState(null);
   const [err, setErr] = useState(false);

   //   const { currentUser } = useContext(AuthContext);

   //   const handleSearch = async () => {
   //     const q = query(
   //       collection(db, "users"),
   //       where("displayName", "==", username)
   //     );

   //     try {
   //       const querySnapshot = await getDocs(q);
   //       querySnapshot.forEach((doc) => {
   //         setUser(doc.data());
   //       });
   //     } catch (err) {
   //       setErr(true);
   //     }
   //   };

   //   const handleKey = (e) => {
   //     e.code === "Enter" && handleSearch();
   //   };

   //   const handleSelect = async () => {
   //check whether the group(chats in firestore) exists, if not create
   //  const combinedId =
   //    currentUser.uid > user.uid
   //      ? currentUser.uid + user.uid
   //      : user.uid + currentUser.uid;
   //  try {
   //    const res = await getDoc(doc(db, "chats", combinedId));

   //    if (!res.exists()) {
   //create a chat in chats collection
   //   await setDoc(doc(db, "chats", combinedId), { messages: [] });

   //create user chats
   //         await updateDoc(doc(db, "userChats", currentUser.uid), {
   //           [combinedId + ".userInfo"]: {
   //             uid: user.uid,
   //             displayName: user.displayName,
   //             photoURL: user.photoURL,
   //           },
   //           [combinedId + ".date"]: serverTimestamp(),
   //         });

   //         await updateDoc(doc(db, "userChats", user.uid), {
   //           [combinedId + ".userInfo"]: {
   //             uid: currentUser.uid,
   //             displayName: currentUser.displayName,
   //             photoURL: currentUser.photoURL,
   //           },
   //           [combinedId + ".date"]: serverTimestamp(),
   //         });
   //       }
   //     } catch (err) {}

   //     setUser(null);
   //     setUsername("")
   //   };
   return (
      <div className="border-b border-gray-200">
         <div className="p-3 border-b border-gray-200">
            <input
               type="text"
               placeholder="Find a user"
               //  onKeyDown={handleKey}
               className="bg-transparent border-none text-slate-800 outline-none placeholder:text-l"
               onChange={(e) => setUsername(e.target.value)}
               value={username}
            />
         </div>
         {
            data.map((item, indexedDB) => (
               <Link key={indexedDB} href={'/home'}>
                  <UserCard name={item.name} description={item.description} />
               </Link>
            ))
         }
         {err && <span className="text-black">User not found!</span>}
         {user && (
            <div className="p-3 flex items-center gap-3 text-white cursor-pointer hover:bg-[#2f2d52]" onClick={() => console.log('User chat btn')}>
               <Image src={images.user1} alt="avatar" className="w-16 h-16 rounded-full object-cover" />
               <div className="userChatInfo">
                  <span className="text-[18px] font-bold">{'Birusha'}</span>
               </div>
            </div>
         )}
      </div>
   );
};