import { INavItemProps } from '@/types/global';
import { AiFillSetting } from 'react-icons/ai';
import { FaInbox, FaSearch, FaUserCircle, FaUserFriends } from 'react-icons/fa';


export const navigationData: INavItemProps[] = [
   {
      icon: FaInbox,
      url: '/',
      name: 'home',
   },
   {
      icon: AiFillSetting,
      url: '/settings',
      name: 'settings',
   },
   {
      icon: FaSearch,
      url: '/search',
      name: 'search',
   },
   {
      icon: FaUserCircle,
      url: '/profile',
      name: 'profile',
   },
   {
      icon: FaUserFriends,
      url: '/contacts',
      name: 'contacts',
   }
];