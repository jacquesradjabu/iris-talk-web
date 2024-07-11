import ContactCard from "@/components/UserCard";
import SearchBar from "@/components/SearchBar";
import { data } from "@/data/message";
import Link from "next/link";

export default function Search() {
   return (
      <div className="container p-2">
         <SearchBar />
         {
            data.map((item, index) => (
               <Link key={index} href={`/home/profile/${item.name}`}>
                  <ContactCard name={item.name} description={item.description} />
               </Link>
            ))
         }

         <ContactCard name={'Julien'} description="I love design" />
         <ContactCard name={'tutka'} description="I love python" />
         <ContactCard name={'Firmin'} description="I love django" />
         <ContactCard name={'Emmanuel'} description="I can hack NASA" />
         <ContactCard name={'Birusha'} description="Backend developer" />
         <ContactCard name={"Jed Connect"} description="I can connect the world" />
         <ContactCard name={'landbit'} description="I can use 64bit" />
         <ContactCard name={'Abel'} description="I love open source project" />
      </div>
   );
}