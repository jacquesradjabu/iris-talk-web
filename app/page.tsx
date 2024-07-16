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
import Image from "next/image";
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";


type Inputs = {
   userName: string
   userPassword: string
}

export default function Login() {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<Inputs>()
   return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6">
         <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img className="mx-auto h-10 w-auto w-10 h-10" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow" />
            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-slate-800">
               Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm leading-5 text-[#8098F9] max-w">
               Or {" "}
               <Link href="/register"
                  className="font-medium text-[#8098F9] hover:underline focus:outline-none focus:underline transition ease-in-out duration-150">
                  create a new acccount
               </Link>
            </p>
         </div>


         <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
               <form>
                  <Input
                     register={register}
                     label="Email Address"
                     type="email"
                     refLabel="userEmail"
                     placeholder="birushandegeya@gmail.com"
                  />

                  <Input
                     register={register}
                     label="Password"
                     type="password"
                     refLabel="userPassword"
                     placeholder="********************************"
                  />

                  <div className="mt-6 flex items-center justify-between">
                     <div className="flex items-center">
                        <input id="remember_me" name="remember" type="checkbox" value="1" className="form-checkbox h-4 w-4 text-[#8098F9] transition duration-150 ease-in-out" />
                        <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-gray-900">Remember me</label>
                     </div>

                     {/* FORGOT PASSWORD LOGIN -> UPCOMING */}
                     {/* <div className="text-sm leading-5">
                        <a href="#"
                           className="font-medium text-[#8098F9] hover:underline focus:outline-none focus:underline transition ease-in-out duration-150">
                           Forgot your password?
                        </a>
                     </div> */}
                  </div>

                  <div className="mt-6">
                     <span className="block w-full rounded-md shadow-sm">
                        <Button
                           title="SIGN IN"
                           className="bg-[#8098F9] w-full"
                        />
                     </span>
                  </div>
               </form>

            </div>
         </div>
      </div>
   );
}