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
// import axios, { AxiosResponse } from 'axios';

const LINK_URL = 'http://localhost:8000/';
// fetch all users available in the database

export async function list(signal?: any) {
   try {
      let response = await fetch('http://localhost:8000/api/users/', {
         method: 'GET',
         // signal: signal,
         // origins: 'https://localhost:8000/api/users',
      });
      const result = await response.json();
      return await result.users;
   } catch (err) {
      console.log(err)
   }
}

export async function create(data: IUserRegister) {
   try {
      let response = await fetch('http://localhost:8000/api/users/', {
         method: 'POST',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
      })
      return await response.json();
   } catch (err: any) {
      return err.message;
   }
}

export async function signin(user: IUserLogin) {
   try {
      let response = await fetch('http://localhost:8000/auth/signin/', {
         method: 'POST',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"
         },
         credentials: 'include',
         body: JSON.stringify(user)
      })
      return await response.json()
   } catch (err: any) {
      return err.message;
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