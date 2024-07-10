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

// # DATABASE_URL="postgresql://postgres:1234@localhost:5432/hngtask2?schema=public"
"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";
import isValidEmail from "@/utils/isValidEmail";
import axios from 'axios';
const url = 'http://localhost:8000/login';
type Inputs = {
   name: string
   password: string
}

export default function Login() {
   const [message, setMessage] = useState('');
   const [error, setError] = useState('');
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<Inputs>()
   const onSubmit: SubmitHandler<Inputs> = function (d) {
      axios.post(url, d, {
         headers: {
            'Content-Type': 'application/json'
         }
      })
         .then(response => {
            // Handle success
            const data = response.data;
            // If successful, navigate to the dashboard page
            if (!data.status) {
               setError(data.error);
               return;
            }
            setMessage(data.message);
            window.location.href = '/';
            console.log(data.token);
            reset();
         })
         .catch((err) => setError(err.message));
   }
   return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 mx-auto">
         <div>
            <div className={`${message ? 'bg-green-400' : error ? 'bg-red-500' : ''} absolute top-4 py-2 px-2 text-gray-100 text-center font-medium text-sm`}>
               <div>{message}</div>
               <div>{error}</div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white rounded shadow-md w-full max-w-sm">
               <h2 className="mb-4 text-2xl font-bold text-center">Login</h2>
               <div className="mb-4">
                  <label htmlFor="email" className="block mb-1 text-sm font-semibold">Email</label>
                  <input
                     id="email"
                     type="text"
                     {...register('name', { required: 'Email is required' })}
                     className="w-full px-3 py-2 border border-gray-300 rounded"
                  />
                  {/* Display error message for email validation */}
                  {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
               </div>

               <div className="mb-4">
                  <label htmlFor="password" className="block mb-1 text-sm font-semibold">Password</label>
                  <input
                     id="password"
                     type="password"
                     {...register('password', { required: 'Password is required' })}
                     className="w-full px-3 py-2 border border-gray-300 rounded"
                  />
                  {/* Display error message for password validation */}
                  {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
               </div>

               <button type="submit" className="w-full px-3 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                  Login
               </button>

               <div>
                  are new user? <Link href="/register" className="text-blue-500">Register</Link>
               </div>
            </form>

         </div>
      </div>
   );
}
