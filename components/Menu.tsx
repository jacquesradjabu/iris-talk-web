import { useState } from 'react';
import {
    AiOutlineMenu,
    AiOutlineClose
} from 'react-icons/ai';

export default function Menu({ handleClick, showMenu }: { handleClick: () => void | any; showMenu: boolean }) {
    return (
        <div onClick={handleClick} className='md:hidden cursor-pointer'>
            {
                showMenu ? (
                    <AiOutlineClose size={40} color='#333' className='hover:fill-blue-400 transition-colors' />
                ) : (
                    <AiOutlineMenu size={40} color='#333' className='hover:fill-blue-400 transition-colors' />
                )
            }
        </div>
    );
}