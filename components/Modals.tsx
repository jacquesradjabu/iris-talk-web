"use client";
import { useState } from 'react';

interface User {
  name: string;
  email: string;
  description: string;
  avatarUrl: string;
  followers: { name: string; description: string }[];
  following: { name: string; description: string }[];
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface EditProfileModalProps extends ModalProps {
  user: User;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({ isOpen, onClose, user }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [description, setDescription] = useState(user.description);
  const [avatarUrl, setAvatarUrl] = useState(user.avatarUrl);

  const handleSave = () => {
    // Save the updated profile details here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium">Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 p-2 border rounded w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 p-2 border rounded w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="mt-1 p-2 border rounded w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Avatar URL</label>
          <input type="text" value={avatarUrl} onChange={(e) => setAvatarUrl(e.target.value)} className="mt-1 p-2 border rounded w-full" />
        </div>
        <div className="flex justify-end">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded mr-2">Cancel</button>
          <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
        </div>
      </div>
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
