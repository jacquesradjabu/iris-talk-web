import Link from "next/link"
import Button from "./Button";

export default function Navigation({
    classes,
    handleLogout
}: {
    classes?: string;
    handleLogout?: () => void | any;
}) {
    return (
        <nav className={`flex gap-6 ${classes}`}>
            <Link href={'/home'} className={``}>
                <p className="hover:text-blue-400 transition-colors">Messages</p>
            </Link>
            <Link href={'/home/contacts'} className="">
                <p className="hover:text-blue-400 transition-colors">Contacts</p>
            </Link>
            <Link href={'/home/search'} className="">
                <p className="hover:text-blue-400 transition-colors">Search</p>
            </Link>
            <Link href={'/home/profile'} className="">
                <p className="hover:text-blue-400 transition-colors">Profile</p>
            </Link>
            <Button
                title="LOGOUT"
                classes="bg-[#8098F9] md:hidden text-gray-100 font-normal md:block"
                handleClick={handleLogout}
            />
        </nav>
    )
}