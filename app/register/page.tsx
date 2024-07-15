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
import Link from 'next/link';
import Input from '@/components/shared/Input';
import Button from '@/components/Button';
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
      <div className="flex items-center justify-center min-h-screen mx-auto">
         <form
            onSubmit={handleSubmit(onSubmit)}
            className='p-6  w-full max-w-sm md:border md:border-gray-200 md:shadow-md md:rounded-md'>
            <h1 className="my-4 text-xl font-bold text-center text-slate-800">Create your account</h1>
            <div className='mb-4'>
               <Input
                  type="name"
                  placeholder="Name"
                  name="name" register={register}
                  message="Name is required"
               />
            </div>
            <div className='mb-4'>
               <Input
                  type="email"
                  placeholder="Email"
                  name="email" register={register}
                  message="Email is required"
               />
            </div>
            <div className="mb-4">
               <Input
                  type="password"
                  placeholder="Password"
                  name="email" register={register}
                  message="Password is required"
               />
            </div>
            <div className="mb-4">
               <Input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  register={register}
                  message="Password does not match"
               />
            </div>
            <Button
               title="REGISTER"
               className="w-full mb-4 bg-[#8098F9] text-gray-100"
            />

            <div className="text-center text-sm">
               <span className="text-[#71717A]">You have account?</span> <Link href="/" className="text-[#8098F9] font-medium hover:underline">Login now</Link>
            </div>
         </form>
      </div>
   );
}