"use client";
import { useForm } from 'react-hook-form';
import { Dispatch, SetStateAction, useState } from 'react';


interface ModalProps {
   isOpen?: boolean;
   onClose: () => void | null;
}

interface EditProfileModalProps extends ModalProps {
   user: IUser;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({ isOpen, onClose, user }) => {
   const { register, handleSubmit } = useForm();
   const [name, setName] = useState(user.userName);
   const [email, setEmail] = useState(user.userEmail);
   const [description, setDescription] = useState(user.description);
   const [avatarUrl, setAvatarUrl] = useState(user.avatarUrl);

   const onSubmit = (data: any) => {
      alert(data.name);
   }
   const handleSave = () => {
      // Save the updated profile details here
      onClose();
   };

   if (!isOpen) return null;

   return (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center overflow-scroll">
         <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
            {/*  */}
            {/* <form></form> */}
            <div className="mb-4">
               <label className="block text-sm font-medium">Name</label>
               {/* <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 p-2 border rounded w-full" /> */}
               <input
                  type="text"
                  {...register('name')}
                  placeholder='Birusha'
                  className="mt-1 p-2 border rounded w-full outline-none"
               />
            </div>
            <div className="mb-4">
               <label className="block text-sm font-medium">Email</label>
               <input
                  type="email"
                  {...register('email')}
                  placeholder='birushandegeya@gmail.com'
                  className="mt-1 p-2 border rounded w-full outline-none"
               />
            </div>
            <div className="mb-4">
               <label className="block text-sm font-medium">Description</label>
               <textarea
                  {...register('description')}
                  placeholder='Software developer and tech enthusiast.'
                  className="mt-1 p-2 border rounded w-full outline-none"
               />
            </div>
            <div className="mb-4">
               <label className="block text-sm font-medium">Avatar URL</label>
               <input type='url'
                  {...register('avatarURL')}
                  className="mt-1 p-2 border rounded w-full outline-none"
               />
            </div>

            {/*  */}
            <div className="flex justify-end">
               <button onClick={onClose} type='submit' className="px-4 py-2 bg-gray-200 rounded mr-2">Cancel</button>
               <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
            </div>
         </form>
      </div>
   );
};

interface ListModalProps extends ModalProps {
   title: string;
   list: { name: string; description: string }[];
}

export const ListModal: React.FC<ListModalProps> = ({ isOpen, onClose, title, list }) => {
   if (!isOpen) return null;

   return (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
         <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <ul>
               {list.map((item, index) => (
                  <li key={index} className="mb-2">
                     <h3 className="font-semibold">{item.name}</h3>
                     <p className="text-sm text-gray-500">{item.description}</p>
                  </li>
               ))}
            </ul>
            <div className="flex justify-end mt-4">
               <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">Close</button>
            </div>
         </div>
      </div>
   );
};