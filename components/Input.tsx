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
"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "./Button";
// import Img from "../img/img.png";
// import Attach from "../img/attach.png";
// import { AuthContext } from "../context/AuthContext";
// import { ChatContext } from "../context/ChatContext";
// import {
//   arrayUnion,
//   doc,
//   serverTimestamp,
//   Timestamp,
//   updateDoc,
// } from "firebase/firestore";
// import { db, storage } from "../firebase";
// import { v4 as uuid } from "uuid";
// import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
type InputProps = {
   text: string;
}

export default function Input() {
   const { register, handleSubmit } = useForm<InputProps>();
   const [text, setText] = useState("");
   const [img, setImg] = useState(null);

   //   const { currentUser } = useContext(AuthContext);
   //   const { data } = useContext(ChatContext);

   //   const handleSend = async () => {
   //     if (img) {
   //       const storageRef = ref(storage, uuid());

   //       const uploadTask = uploadBytesResumable(storageRef, img);

   //       uploadTask.on(
   //         (error) => {
   //           //TODO:Handle Error
   //         },
   //         () => {
   //           getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
   //             await updateDoc(doc(db, "chats", data.chatId), {
   //               messages: arrayUnion({
   //                 id: uuid(),
   //                 text,
   //                 senderId: currentUser.uid,
   //                 date: Timestamp.now(),
   //                 img: downloadURL,
   //               }),
   //             });
   //           });
   //         }
   //       );
   //     } else {
   //       await updateDoc(doc(db, "chats", data.chatId), {
   //         messages: arrayUnion({
   //           id: uuid(),
   //           text,
   //           senderId: currentUser.uid,
   //           date: Timestamp.now(),
   //         }),
   //       });
   //     }

   //     await updateDoc(doc(db, "userChats", currentUser.uid), {
   //       [data.chatId + ".lastMessage"]: {
   //         text,
   //       },
   //       [data.chatId + ".date"]: serverTimestamp(),
   //     });

   //     await updateDoc(doc(db, "userChats", data.user.uid), {
   //       [data.chatId + ".lastMessage"]: {
   //         text,
   //       },
   //       [data.chatId + ".date"]: serverTimestamp(),
   //     });

   //     setText("");
   //     setImg(null);
   //   };

   const onSubmit: SubmitHandler<InputProps> = (data) => {
      console.log(data);
   }
   return (
      <form
         onSubmit={handleSubmit(onSubmit)}
         className="h-16 p-3 flex gap-1 items-center justify-between border border-gray-200 mx-3 rounded-md">
         <input
            type="text"
            placeholder="Type something..."
            className="w-full border-none h-10 rounded-md px-3 outline-none text-[#2f2d52] text-[18px]"
            {...register('text', { required: true })}
         />
         <Button
            title="SEND"
            type="submit"
            className="bg-[#8098F9] text-gray-50"
         />
      </form >
   );
};