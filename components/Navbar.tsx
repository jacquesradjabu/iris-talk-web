import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-blue-500 p-4 text-white">
            <Link href="/" className="text-lg font-bold">
                Go Back
            </Link>
        </nav>
    );
};