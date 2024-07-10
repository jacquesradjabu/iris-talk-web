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
import { ReactNode } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer";


export default function Layout({ children }: { children: ReactNode }) {
   return (
      <div className="flex flex-col md:flex-row h-full w-full">
         <Header />
         <div className="flex flex-grow">
            <main className="flex-grow flex-1">{children}</main>
            <aside className="hidden md:block flex-grow">
               <h1>Hello Aside Part</h1>
            </aside>
         </div>
         <Footer />
      </div>
   );
}