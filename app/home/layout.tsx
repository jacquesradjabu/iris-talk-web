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
import Sidebar from "@/components/Sidebar";

type HomeLayoutProps = {
   children: ReactNode;
}

export const metadata: Metadata = {
   title: "home",
   description: "home, page d'acceuil, landing page, sofia, iris-chat social media reseau social home page page d'acceuil",
};


export default function RootLayout({ children }: Readonly<HomeLayoutProps>) {
   return (
      <html lang="en">
         <body>
            <div className="flex h-screen overflow-hidden">
               {/* sidebar -> aside part */}
               <Sidebar />
               {/* <!-- Main Chat Area --> */}
               {children}
            </div>
         </body>
      </html>
   );
}