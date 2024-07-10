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
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
const url = 'http://localhost:8000/register';
type Inputs = {
   email: string;
   password: string;
   name: string;
}
export default function Register() {
   const [message, setMessage] = useState('');
   const [error, setError] = useState('');
   const { register, handleSubmit } = useForm<Inputs>();
   const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
      try {
         // Replace 'your-backend-url' with your actual backend URL
         const response = await axios.post(url, data);
         const result = response;
         console.log(result);
         // window.location.href = '/';
         // Handle success (e.g., redirect, show success message)
      } catch (error) {
         console.error('Registration failed!', error);
         // Handle error (e.g., show error message)
      }
   };
   return (
      <div className="p-4">
         <h1 className="text-2xl font-bold mb-4">Register Screen</h1>
         <form onSubmit={handleSubmit(onSubmit)}>
            <input
               {...register('name', { required: true })}
               type="text"
               placeholder="Name"
               className="border border-gray-300 p-2 mb-4 w-full"
            />
            <input
               {...register('email', { required: true })}
               type="email"
               placeholder="Email"
               className="border border-gray-300 p-2 mb-4 w-full"
            />
            <input
               {...register('password', { required: true })}
               type="password"
               placeholder="Password"
               className="border border-gray-300 p-2 mb-4 w-full"
            />
            <button
               type="submit"
               className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
               Register
            </button>
         </form>
      </div>
   );
}