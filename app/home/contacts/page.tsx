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
import ContactCard from "@/components/ContactCard"
import SearchBar from "@/components/SearchBar"
export default function Contacts() {
   return (
      <div className="container p-3">
         <SearchBar />
         <ContactCard name={'Birusha'} avatar="" description="Full stack web developer" />
         <ContactCard name={'Birusha'} avatar="" description="Full stack web developer" />
         <ContactCard name={'Birusha'} avatar="" description="Full stack web developer" />
         <ContactCard name={'Birusha'} avatar="" description="Full stack web developer" />
         <ContactCard name={'Birusha'} avatar="" description="Full stack web developer" />
         <ContactCard name={'Birusha'} avatar="" description="Full stack web developer" />
         <ContactCard name={'Birusha'} avatar="" description="Full stack web developer" />
         <ContactCard name={'Birusha'} avatar="" description="Full stack web developer" />
         <ContactCard name={'Birusha'} avatar="" description="Full stack web developer" />
      </div>
   )
}