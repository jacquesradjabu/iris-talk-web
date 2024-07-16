export default function Input(
   {
      register,
      label,
      type,
      refLabel,
      placeholder
   }: IInputProps
) {
   return (
      <div className="mt-6">
         <label htmlFor={refLabel} className="block text-sm font-medium leading-5 text-gray-700">{label}</label>
         <div className="mt-1 rounded-md shadow-sm">
            <input
               type={type}
               {...register(refLabel)}
               className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
               placeholder={placeholder}
            />
         </div>
      </div>
   )
}