import { useState } from 'react';
import {
    AiOutlineMenu,
    AiOutlineClose
} from 'react-icons/ai';

export default function Menu() {
    const [showMenu, setShowMenu] = useState(true);
    const handleClick = () => {
        setShowMenu(!showMenu);
    }
    return (
        <div onClick={handleClick} className='md:hidden'>
            {
                showMenu ? (
                    <AiOutlineMenu className='transition-all' />
                ) : (
                    <AiOutlineClose />
                )
            }
        </div>
    );
}