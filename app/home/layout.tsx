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
import { ReactNode } from "react";
import type { Metadata } from "next";
import ContactList from "@/components/ContactList";
import SidebarHeader from "@/components/SidebarHeader";


type HomeLayoutProps = {
   children: ReactNode;
}

export const metadata: Metadata = {
   title: "home",
   description: "home, page d'acceuil, landing page, sofia, inbox chat social media reseau social home page page d'acceuil",
};


export default function RootLayout({ children }: Readonly<HomeLayoutProps>) {
   return (
      <html lang="en">
         <body>
            <div className="flex h-screen overflow-hidden">
               <div className="w-1/2 lg:w-1/3 bg-white border-r border-gray-300">
                  {/* <!-- Sidebar Header --> */}
                  <SidebarHeader userName="Birusha" avatarURL={''} />
                  {/* <!-- Contact List --> */}
                  <ContactList />
               </div>
               {/* <!-- Main Chat Area --> */}
               {children}
            </div>
         </body>
      </html>
   );
}