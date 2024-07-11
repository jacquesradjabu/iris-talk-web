import Link from "next/link";

export default function Navbar({ path }: { path: string; }) {
    return (
        <nav className="p-4 border-b border-gray-200">
            <Link href={`${path}`} className="text-lg font-bold">
                Go Back
            </Link>
        </nav>
    );
};