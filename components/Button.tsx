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
type ButtonProps = {
    title: string;
    classes?: string;
    handleClick?: () => void | any;
}
export default function Button({ title, classes, handleClick }: ButtonProps) {
    return (
        <button
            onClick={handleClick}
            className={`hover:opacity-85 flex items-center h-10 pl-6 justify-center pr-6 rounded-md ${classes}`}>
            <p className='text-medium'>{title}</p>
        </button>
    );
}