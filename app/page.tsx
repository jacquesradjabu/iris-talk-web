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
import Image from "next/image";
export default function Login() {
   return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6">
         <div className="sm:mx-auto sm:w-full sm:max-w-md">
            {/* <Image className="mx-auto h-10 w-auto w-10 h-10" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow" /> */}
            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
               Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm leading-5 text-blue-500 max-w">
               Or
               <a href="#"
                  className="font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                  create a new acccount
               </a>
            </p>
         </div>


         <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
               <form>
                  <div>
                     <label htmlFor="email" className="block text-sm font-medium leading-5  text-gray-700">Email address</label>
                     <div className="mt-1 relative rounded-md shadow-sm">
                        <input id="email" name="email" placeholder="user@example.com" type="email" required={true} value="" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                        <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                           <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd"
                                 d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                 clip-rule="evenodd"></path>
                           </svg>
                        </div>
                     </div>
                  </div>

                  <div className="mt-6">
                     <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">Password</label>
                     <div className="mt-1 rounded-md shadow-sm">
                        <input id="password" name="password" type="password" required={true} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                     </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                     <div className="flex items-center">
                        <input id="remember_me" name="remember" type="checkbox" value="1" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                        <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-gray-900">Remember me</label>
                     </div>

                     <div className="text-sm leading-5">
                        <a href="#"
                           className="font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                           Forgot your password?
                        </a>
                     </div>
                  </div>

                  <div className="mt-6">
                     <span className="block w-full rounded-md shadow-sm">
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                           Sign in
                        </button>
                     </span>
                  </div>
               </form>

            </div>
         </div>
      </div>
   );
}