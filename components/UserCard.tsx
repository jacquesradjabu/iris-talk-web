export default function UserCard({
   userName = "Full Name",
   userDescription = "Full Description"
}: {
   userName?: string;
   userDescription?: string;
}) {
   return (
      <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
         <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
            <img src="https://placehold.co/200x/ad922e/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" className="w-12 h-12 rounded-full" />
         </div>
         <div className="flex-1">
            <h2 className="text-medium font-bold text-slate-800">{userName}</h2>
            <p className="text-gray-400 text-sm">{userDescription?.substring(0, 30 - 3) + "..."}</p>
         </div>
      </div>
   )
}