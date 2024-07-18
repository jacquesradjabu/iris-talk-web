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


export default class apiUser {


   // static async list(signal): Promise<void> {

   //    try {
   //       const resp = await axios.get('/api/users/', {

   //       });

   //       let response = await fetch('/api/users/', {
   //          method: 'GET',
   //          signal: signal,
   //       })
   //       return await response.json()
   //    } catch (err) {
   //       console.log(err)
   //    }
   // }

   static async create(): Promise<void> {
      console.log('creating...');
   }

   static async read(): Promise<void> {
      console.log('reading...');
   }

   static async update(): Promise<void> {
      console.log('updating...');
   }

   static async remove(): Promise<void> {
      console.log('removing...');
   }

}