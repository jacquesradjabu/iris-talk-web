import Avatar from "./Avatar";

export default function UserMessage({
   messageContent,
   avatarURL,
   state,
   time }: {
      messageContent: string;
      avatarURL?: string;
      state: boolean;
      time: string;
   }) {
   if (state) {
      return (
         <div className="flex justify-end mb-4 cursor-pointer" >
            <div className="flex max-w-96 bg-blue-500 text-gray-50 rounded-lg p-3 gap-3 flex-col">
               <p>{messageContent}</p>
               <p className="text-sm text-gray-100 text-right">{time}</p>
            </div>
            <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
               {avatarURL ? (
                  <Avatar />
               ) : (
                  <img src={`${avatarURL}`} alt="A" className="w-8 h-8 rounded-full bg-blue-300" />
               )}
            </div>
         </div>
      )
   }
   return (
      <div className="flex mb-4 cursor-pointer text-gray-700">
         <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
            {avatarURL ? (
               <Avatar />
            ) : (
               <img src={`${avatarURL}`} alt="" className="w-8 h-8 rounded-full" />
            )}
         </div>
         <div className="flex flex-col max-w-96 bg-gray-50 rounded-lg p-3 gap-3  border border-gray-300">
            <p>{messageContent}</p>
            <p className="text-sm text-gray-500 text-right">{time}</p>
         </div>
      </div>
   );
}