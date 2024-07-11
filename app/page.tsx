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
import { useState } from "react";
import Link from "next/link";
import { ToastsContainer, ToastsStore } from 'react-toasts';
import axios from 'axios';
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router/navigation";
import Input from "@/components/Input";
import Button from "@/components/Button";
const url = 'http://localhost:8000/login';
type Inputs = {
   name: string
   password: string
}
export default function Login() {
   const router = useRouter();
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
               ToastsStore.info('Failed to login');
            }
            ToastsStore.success(data.message);
            // window.location.href = '/';
            // router.push('/home');
            console.log(data.token);
            reset();
         })
         .catch((err) => ToastsStore.error(err.message));
   }
   return (
      <div className="flex items-center justify-center min-h-screen mx-auto">
         <ToastsContainer store={ToastsStore} lightBackground/>
         <form onSubmit={handleSubmit(onSubmit)} className="p-6  w-full max-w-sm md:border md:border-gray-100">
            <h1 className="my-4 text-xl font-bold text-center text-slate-800">Login into your account</h1>
            <div className="mb-4">
               <Input
                  type="name"
                  placeholder="Email"
                  name="email" register={register}
                  message="Email is required"
               />
               {/* Display error message for email validation */}
               {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
            </div>

            <div className="mb-4">
               <Input
                  type="password"
                  placeholder="Password"
                  name="password" register={register}
                  message="Password is required"
               />
               {/* Display error message for password validation */}
               {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
            </div>

            <Button
               title="LOG IN"
               classes="w-full mb-4 bg-[#8098F9] text-gray-100"
            />

            <div className="text-center text-sm">
               <span className="text-[#71717A]">Don't have an account?</span> <Link href="/register" className="text-[#8098F9] hover:underline font-bold">Create an account</Link>
            </div>
         </form>
      </div>
   );
}
