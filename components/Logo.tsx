import Link from "next/link";


export default function Logo() {
   return (
      <Link href={'/'} className="h-14 bg-blue-400 w-14 flex items-center justify-center my-3 rounded-lg ">
         <div className="h-8 w-14 text-white font-medium md:font-extrabold text-lg md:text-4xl flex items-center justify-center rounded-xl">
            <h1>Ib</h1>
         </div>
      </Link>
   );
}