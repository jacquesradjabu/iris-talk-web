import { FaArrowLeft } from 'react-icons/fa';


export default function InnerNavigation () {
    const data = new Date();
    return (
        <nav className='container flex gap-14'>
            <FaArrowLeft size={24} />
            <div>
            <p>Full Name</p>
            <p>Joined - {data.getDay()} - {data.getMonth()} - {data.getFullYear()}</p>
            </div>
        </nav>
    )
}