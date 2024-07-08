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
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
   email: string;
   password: string;
};

export default function Login() {
   const { register, handleSubmit, formState: { errors } } = useForm<Inputs | any>();

   const onSubmit: SubmitHandler<Inputs | any> = async data => {
      try {
         const response = await axios.post('/api/login', data);
         console.log(response.data);
         // handle successful login (e.g., store tokens, redirect)
      } catch (error) {
         console.error('Login failed:', error);
         // handle login failure
      }
   };
   return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
         <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white rounded shadow-md w-full max-w-sm">
            <h2 className="mb-4 text-2xl font-bold text-center">Login</h2>

            <div className="mb-4">
               <label htmlFor="email" className="block mb-1 text-sm font-semibold">Email</label>
               <input
                  id="email"
                  type="email"
                  {...register('email', { required: 'Email is required' })}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
               />
               {errors.email && <span className="text-sm text-red-500">{errors?.email?.message}</span>}
            </div>

            <div className="mb-4">
               <label htmlFor="password" className="block mb-1 text-sm font-semibold">Password</label>
               <input
                  id="password"
                  type="password"
                  {...register('password', { required: 'Password is required' })}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
               />
               {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
            </div>

            <button type="submit" className="w-full px-3 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
               Login
            </button>
         </form>
      </div>
   );
}