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
import Button from "./Button";

export default function UserCard({ name, avatar, description }: IContactCardProps) {
    return (
        <div className="flex h-20 hover:bg-gray-200 hover:cursor-pointer p-3 border-b border-gray-200">
            <div className="flex justify-between">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-blue-400 flex items-center justify-center">
                    {avatar ? (
                        <Image src={`${avatar}`} alt="Avatar" className="object-cover" />
                    ) : (
                        <div className="text-gray-50 text-md font-medium">
                            {name?.charAt(0).toUpperCase()}
                        </div>
                    )}
                </div>
                <div>
                    <p className="font-medium text-md text-gray-800">{name}</p>
                    <p className="text-gray-500 text-sm">{description}</p>
                </div>
            </div>
        </div>
    )
}