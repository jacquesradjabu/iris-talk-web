import Link from "next/link"
import {
   AiFillContacts,
   AiFillSetting,
   AiOutlineInbox,
   AiOutlineUsergroupAdd
} from 'react-icons/ai';
import { FaInbox, FaSearch, FaUser, FaUserCircle, FaUserFriends } from 'react-icons/fa';
import { } from 'react-icons/lib';
import { INavItemProps } from "@/@types/global";


export default function NavItem({ url, icon }: INavItemProps): JSX.Element {
   return (
      <Link href={url} className="hover:underline h-14 hover:bg-blue-500 w-14 flex items-center justify-center mb-3 rounded-lg">
         <span className="h-8 w-14 flex items-center justify-center rounded-xl">
           {/* {icon} */}
         </span>
      </Link>
   )
}