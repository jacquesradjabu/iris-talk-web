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
      return result;
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

// read a specific user by id
export async function read(
   userId: string,
   currentUserToken?: string | null,
   signal?: AbortSignal
) {
   try {
      const response = await axios.get(`http://localhost:8000/api/users/${userId}`, {
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzMmI0OTk1Yi0yN2ZlLTQwNDItODc5YS1lOTNkYjk1NDRlMDIiLCJpYXQiOjE3MjE3MjMzNzZ9.Zn-UvmfVzawKjEZ4ZIMZUwzXLwD9lPBsaJA2N5FJDkA'}`
         },
         signal: signal
      });
      return response.data;
   } catch (err) {
      console.log(err);
   }
};

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

/*
template

rentuser/', {
      //    headers: {
      //       'Authorization': `Bearer ${result?.data?.accessToken}`
      //    }

         // const currentUser = await axios.get('http://localhost:8000/api/getcurrentuser/', {
      //    headers: {
      //       'Authorization': `Bearer ${result?.data?.accessToken}`
      //    }
      // });
*/