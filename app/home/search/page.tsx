/*
MIT License

Copyright (c) 2024 Birusha Ndegeya and Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import ContactCard from "@/components/ContactCard";
import SearchBar from "@/components/SearchBar";


export default function Search(){
   return (
      <div className="container p-2">
         <h1>Search</h1>
         <SearchBar />
         <ContactCard name={'William'} description="I love coding" />
         <ContactCard name={'Julien'} description="I love design" />
         <ContactCard name={'tutka'} description="I love python" />
         <ContactCard name={'Firmin'} description="I love django" />
         <ContactCard name={'Emmanuel'} description="I can hack NASA" />
         <ContactCard name={'Birusha'} description="Backend developer" />
         <ContactCard name={"Jed Connect"} description="I can connect the world"  />
         <ContactCard name={'landbit'} description="I can use 64bit" />
         <ContactCard name={'Abel'} description="I love open source project" />
      </div>
   );
}