"use client";
import { useState } from 'react';
import Image from 'next/image';
import { EditProfileModal, ListModal } from '@/components/Modals';

export default function Profile() {
   const [isEditModalOpen, setEditModalOpen] = useState(false);
   const [isFollowersModalOpen, setFollowersModalOpen] = useState(false);
   const [isFollowingModalOpen, setFollowingModalOpen] = useState(false);

   const user = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      description: 'Software developer and tech enthusiast.',
      avatarUrl: '', // Add your avatar URL here
      followers: [
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         { name: 'Jane Smith', description: 'Graphic Designer' },
         // Add more followers
      ],
      following: [
         { name: 'Paul Walker', description: 'Product Manager' },
         // Add more following
      ],
   };

   return (
      <div className="max-w-4xl mx-auto p-4">
         <div className="flex flex-col items-center">
            <div className="relative w-24 h-24 rounded-full bg-gray-300 overflow-hidden">
               {user.avatarUrl ? (
                  <Image src={user.avatarUrl} alt="Avatar" layout="fill" />
               ) : (
                  <span className="text-3xl font-semibold flex items-center justify-center w-full h-full">
                     {user.name.charAt(0)}
                  </span>
               )}
            </div>
            <h1 className="text-2xl font-semibold mt-4">{user.name}</h1>
            <p className="text-gray-500">{user.email}</p>
            <p className="text-center mt-2">{user.description}</p>
            <button
               className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
               onClick={() => setEditModalOpen(true)}
            >
               Edit Profile
            </button>
            <div className="flex space-x-4 mt-4">
               <button
                  className="px-4 py-2 bg-gray-200 rounded"
                  onClick={() => setFollowersModalOpen(true)}
               >
                  Followers
               </button>
               <button
                  className="px-4 py-2 bg-gray-200 rounded"
                  onClick={() => setFollowingModalOpen(true)}
               >
                  Following
               </button>
            </div>
         </div>
         <EditProfileModal isOpen={isEditModalOpen} onClose={() => setEditModalOpen(false)} user={user} />
         <ListModal isOpen={isFollowersModalOpen} onClose={() => setFollowersModalOpen(false)} title="Followers" list={user.followers} />
         <ListModal isOpen={isFollowingModalOpen} onClose={() => setFollowingModalOpen(false)} title="Following" list={user.following} />
      </div>
   );
};