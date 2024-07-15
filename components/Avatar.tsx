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
import Image from "next/image"

export default function Avatar({
    avatarURL,
    name,
    classes
}: {
    avatarURL?: string | any;
    name?: string | any;
    classes?: string;
}) {
    return (
        <div className={`w-24 h-24 rounded-full bg-[#8098F9] text-gray-50 overflow-hidden ${classes}`}>
            {avatarURL ? (
                <Image src={avatarURL} alt="Avatar" layout="fill" className={`w-24 h-24 ${classes}`} />
            ) : (
                <span className="text-3xl font-semibold flex items-center justify-center w-full h-full">
                    {name.charAt(0)}
                </span>
            )}
        </div>
    );
}