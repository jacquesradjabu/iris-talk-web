import Avatar from './Avatar';
import Image from 'next/image';
import images from '@/constants/images';

export default function Message({
   name,
   avatar,
   message
}: {
   name: string;
   avatar?: string | any;
   message: string;
}) {
   return (
      <div className="flex items-center justify-between h-20 hover:bg-gray-200 hover:cursor-pointer p-3 rounded-md">
         <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-blue-400 flex items-center justify-center">
               {avatar ? (
                  <Image src={avatar} alt="Avatar" className="object-cover" />
               ) : (
                  <div className="text-gray-50 text-lg font-bold">
                     {name?.charAt(0).toUpperCase()}
                  </div>
               )}
            </div>
            <div>
               <p className="font-medium text-md text-gray-800">{name}</p>
               <p className="text-gray-500 text-sm">{message}</p>
            </div>
         </div>
         <p className="font-medium text-md text-gray-500">12m</p>
      </div>
   );
}