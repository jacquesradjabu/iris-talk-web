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
import { useContext, useEffect, useRef } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { ChatContext } from "../context/ChatContext";
import Image from "next/image";
import images from "@/constants/images";
const Message = ({ message }: { message: string }) => {
  // const { currentUser } = useContext(AuthContext);
  // const { data } = useContext(ChatContext);

  // const ref = useRef();

  // useEffect(() => {
  //   ref.current?.scrollIntoView({ behavior: "smooth" });
  // }, [message]);

  return (
    <div
      // ref={ref}
      // className={`message ${message.senderId === currentUser.uid && "owner"}`}
      className={`flex gap-5 mb-5`}
    >
      <div className="messageInfo">
        {/* <Image
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        /> */}
        <Image
          className="w-10 h-10 rounded-full object-cover"
          src={images.user1}
          alt="avatar photo url"
        />
        <span>just now</span>
      </div>
      <div className='max-w-[80%] flex flex-col gap-3'>
        <p className="py-3 px-5 rounded-sm">{"Hello world"}</p>
        {/* {message.img && <img src={message.img} alt="" />} */}
      </div>
    </div>
  );
};

export default Message;
