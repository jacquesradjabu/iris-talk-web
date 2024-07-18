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

import Button from "@/components/Button";
import Avatar from "@/components/Avatar";

export default function ProfileId({ params }: {
    params: {
        userId: string;
    }
}) {
    return (
        <div className="flex-1 p-32 items-center justify-center">

            {/* <!-- Card start --> */}
            <div className="max-w-sm mx-auto rounded-lg overflow-hidden bg-gray-50 border border-gray-300 shadow-lg flex items-center justify-center">
                <div className="px-4 pb-6">
                    <div className="text-center my-4">
                        {/* <img className="h-32 w-32 rounded-full mx-auto my-4"
                            src={`https://randomuser.me/api/portraits/women/21.jpg`} alt="" width={128} height={128} /> */}
                        <div className="flex items-center justify-center">
                            <Avatar
                                className="w-32 h-32"
                            />
                        </div>
                        <div className="py-2">
                            <h3 className="font-bold text-2xl text-gray-800 mb-1">Cait Genevieve</h3>
                            <div className="text-gray-700 items-center flex flex-col">
                                <p className="text-slate-500 text-sm">birushandegeya@gmail.com</p>
                                <p>
                                    New York, NY Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <Button
                        className="bg-blue-400 hover:bg-blue-500 w-full focus:ring-blue-300 justify-center items-center"
                        title="SEND MESSAGE"
                    />
                </div>
            </div>
            {/* <!-- Card end --> */}
        </div>
    );
}