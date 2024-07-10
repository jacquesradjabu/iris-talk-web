import Button from "@/components/Button"
import ChatBox from "@/components/ChatBox"
import ContactCard from "@/components/ContactCard"
import InnerNavigation from "@/components/InnerNavigation"
import images from "@/constants/images"
import Image from "next/image"

export default function Profile() {
   return (
      <div>
         <InnerNavigation />
         <ChatBox />
         <div className="bg-red-500 container flex flex-col items-center p-3 ">
            <div className="flex justify-between items-center gap-3">
               <Image src={images.user1} alt="user image" className="h-20 w-20 rounded-full" />
               <Button title="Edit" />
               <Button title="Delete" />
               <Button title="Follow" />
            </div>
            <h1>Profile Screen</h1>
            <p>description</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, modi laudantium, laborum quasi et vel provident perspiciatis placeat quis deserunt libero neque eum? Excepturi doloribus similique est iusto ipsam iure.</p>
         </div>
         <nav className="flex justify-between">
            <h1>Followers</h1>
            <h2>Following</h2>
         </nav>
         <div>
            <ContactCard name={'Birusha'} description="Typescript developer" />
            <ContactCard name="Tutka" description="Backend developer" />
            <ContactCard name="Ezmuk" description="Frontend developer" />
            <ContactCard name="William" description="Project developer" />
         </div>
      </div>
   )
}