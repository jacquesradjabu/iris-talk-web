import Link from "next/link";
import { FaArrowLeft } from 'react-icons/fa';

export default function Navbar({ path }: { path: string; }) {
    return (
        <nav className="p-4 border-b border-gray-200">
            <Link href={`${path}`} className="text-lg font-bold">
                <FaArrowLeft
                    color="#333"
                    className="hover:fill-[#8098F9] transition-colors"
                    size={24}
                />
            </Link>
        </nav>
    );
};