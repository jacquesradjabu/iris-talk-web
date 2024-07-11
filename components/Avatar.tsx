import Image from "next/image"

export default function Avatar({
    avatarURL,
    name,
    classes
}: {
    avatarURL?: string | any;
    name?: string | any;
    classes?: string;
}) {
    return (
        <div className={`w-24 h-24 rounded-full bg-[#8098F9] text-gray-50 overflow-hidden ${classes}`}>
            {avatarURL ? (
                <Image src={avatarURL} alt="Avatar" layout="fill" className={`w-24 h-24 ${classes}`} />
            ) : (
                <span className="text-3xl font-semibold flex items-center justify-center w-full h-full">
                    {name.charAt(0)}
                </span>
            )}
        </div>
    );
}