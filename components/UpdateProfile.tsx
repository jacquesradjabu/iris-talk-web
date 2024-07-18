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
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "./Button";
import Input from "./Input";

type InputProps = {
   userName: string;
   userEmail: string;
   userAvatar: string;
   userDescription: string;
}


export default function UpdateProfile({
   cancel,
   save,
   visibility
}: {
   cancel: () => void;
   save: () => void;
   visibility: boolean;
}) {
   const { register, handleSubmit } = useForm<InputProps>();
   const onSubmit: SubmitHandler<InputProps> = (data) => {
      console.log(data);
   }
   return (
      <div className={`fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center ${visibility ? '' : "hidden"} `}>
         <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-gray-50 border border-gray-300 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 text-slate-700 text-center">Edit Profile</h2>
            <Input
               type="text"
               register={register}
               refLabel="userName"
               label="Name"
               placeholder="Birusha Ndegeya"
            />
            <Input
               type="email"
               register={register}
               refLabel="userEmail"
               label="Email Address"
               placeholder="birushandegeya@gmail.com"
            />

            <div className="mb-4">
               <label className="block text-sm font-medium">Description</label>
               <textarea placeholder="Software developer and tech enthusiast." {...register('userDescription')} className="mt-1 p-2 border rounded w-full" />
            </div>

            <Input
               type="url"
               register={register}
               refLabel="userAvatar"
               label="URL Avatar"
               className="mb-4"
            />

            <div className="flex justify-end gap-5">
               <Button
                  className="font-medium focus:outline-none border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-600 text-gray-400 border-gray-600 hover:bg-gray-700"
                  title="CANCEL"
                  handleClick={cancel}
               />
               <Button
                  handleClick={save}
                  className="bg-blue-400 hover:bg-blue-500 text-gray-50 font-medium focus:outline-none border focus:z-10 focus:ring-4 focus:ring-gray-100"
                  title="SAVE"
               />
            </div>
         </form>
      </div>
   )
}