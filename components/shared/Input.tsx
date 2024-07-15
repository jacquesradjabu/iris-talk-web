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
export default function Input({ type, placeholder, classes, register, name, message }: IInputProps) {
   return (
      <input
         type={`${type}`}
         placeholder={`${placeholder}`}
         className={`bg-[#e9edff] text-[#71717A] rounded-md w-full px-3 py-2 border outline-none ${classes}`}
         {...register(`${name}`, { required: `${message}` })}
      />
   );
}