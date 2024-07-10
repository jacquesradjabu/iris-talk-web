import Link from 'next/link';
import Image from 'next/image';
import images from '@/constants/images';



export default function Message() {
   return (
      <div className="flex items-center justify-between h-20 hover:bg-gray-200 hover:cursor-pointer p-3 rounded-md">
         <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-full overflow-hidden">
               <Image
                  src={images.user1}
                  alt='profile image'
               />
            </div>
            <div>
               <p className="font-medium text-md text-gray-800">Full Name</p>
               <p className="text-gray-500 text-sm">Salut bro iko aye kule?</p>
            </div>
         </div>
         <p className="font-medium text-md text-gray-500">12m</p>
      </div>
   );
}