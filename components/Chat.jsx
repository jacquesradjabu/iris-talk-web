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
import images from "@/constants/images";
import Messages from './Messages';
import Image from "next/image";
import Input from "./Input";

export default function Chat() {
   return (
      <div className="h-screen overflow-hidden">
         <div className="h-14 flex items-center justify-between border-b border-gray-200 sticky top-0 bg-white">
            <span>{"Birusha Ndegeya"}</span>
            <div className="flex gap-3">
               <Image src={images.cam} alt="image" />
               <Image src={images.add} alt="image" />
               <Image src={images.more} alt="images" />
            </div>
         </div>
         <Messages />
         <Input />
      </div>
   );
};