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
import Link from "next/link";
export default function Logo() {
   return (
      <Link href={'/home'}>
         <div className="h-10 bg-blue-400 rounded-md w-10 text-gray-50 flex items-center justify-center hover:bg-blue-500">
            <p className="font-medium text-[20px]">InB</p>
         </div>
      </Link>
   );
}