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
"use client";
import { ReactNode, useContext } from "react";
import AuthProvider from "@/providers/AuthProvider";
import { AuthContext } from "@/contexts/authContext";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import { ToastsContainer, ToastsStore } from 'react-toasts';
type HomeLayoutProps = {
   children: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }: Readonly<HomeLayoutProps>) {
   const router = useRouter()
   const { isLogged } = useContext(AuthContext);
   if (!isLogged) {
      setTimeout(() => {
         ToastsStore.warning('Please Login or register');
      }, 2000);
      router.push('/');
   }
   return (
      <html lang="en">
         <body className={`${inter.className}`}>
            <ToastsContainer position={undefined} store={ToastsStore} />
            <AuthProvider>
               <Header />
               <main className="flex container">
                  <Footer />
                  <div className="flex-1 overflow-scroll">
                     {children}
                  </div>
               </main>
            </AuthProvider>
         </body>
      </html>
   );
}