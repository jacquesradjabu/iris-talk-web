export default function Button({
   title,
   type,
   className,
   handleClick
}: {
   title?: string;
   type?: "reset" | "button" | undefined;
   className?: string;
   handleClick?: () => void | null;
}
) {
   return (
      <button
         type={type}
         onClick={handleClick}
         className={`flex justify-center py-2 hover:opacity-75 px-4 border border-transparent text-sm font-medium rounded-md text-gray-50 transition duration-150 ease-in-out ${className}`}
      >
         {title}
      </button>
   );
}