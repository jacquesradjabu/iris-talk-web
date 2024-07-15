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
// import { doc, onSnapshot } from "firebase/firestore";
// import React, { useContext, useEffect, useState } from "react";
// import { ChatContext } from "../context/ChatContext";
// import { db } from "../firebase";
import { useState } from "react";
import Message from "./Message";
import { data } from "@/data/message";

export default function Messages() {
   const [messages, setMessages] = useState([]);
   // const { data } = useContext(ChatContext);

   // useEffect(() => {
   //   const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
   //     doc.exists() && setMessages(doc.data().messages);
   //   });

   //   return () => {
   //     unSub();
   //   };
   // }, [data.chatId]);

   // console.log(messages)

   return (
      <div className="p-3 overflow-scroll h-full" style={{ height: 'calc(100% - 160px)' }}>
         {/* {data.map((m) => (
        <Message message={m.description} key={m.id} />
      ))} */}
      </div>
   );
};