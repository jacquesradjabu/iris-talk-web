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

const LINK_URL = 'http://localhost:8000/';
// fetch all users available in the database

export async function list(signal?: AbortSignal) {
   try {
      const response = await axios.get('http://localhost:8000/api/users/', {
         signal: signal,
         headers: {
            'Accept': 'application/json',
         },
      });
      const result = await response.data;
      return await result.data.users;
   } catch (err: any) {
      return err.message;
   }
}

// create a user

export async function create(data: IUserRegister) {
   try {
      let response = await axios.post('http://localhost:8000/api/users/', data, {
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
         }
      });
      return response.data;
   } catch (err: any) {
      return err.message;
   }
}

// signin

export async function signin(user: IUserLogin) {
   try {
      let response = await axios.post('http://localhost:8000/auth/signin/', user, {
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",

         },
      });
      return response.data;
   } catch (err: any) {
      // If Axios response contains an error, it will be under 'response.data'
      return err.response ? err.response.data : err.message;
   }
}

// export async function signin(user: string) {
//    try {
//       let response = await fetch('/auth/signin/', {
//          method: 'POST',
//          headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//          },
//          credentials: 'include',
//          body: JSON.stringify(user)
//       })
//       return await response.json()
//    } catch (err) {
//       console.log(err)
//    }


//    export async function read(): Promise<void> {
//       console.log('reading...');
//    }

//    export async function update(): Promise<void> {
//       console.log('updating...');
//    }

//    export async function remove(): Promise<void> {
//       console.log('removing...');
//    }