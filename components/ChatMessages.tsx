import UserMessage from "./UserMessage";
import { messageData } from '@/data/messageData';

export default function ChatMessages() {
   return (
      <div className="h-screen overflow-y-auto p-4 pb-36">
         {
            messageData.map((item, index) => (
               <UserMessage key={index} messageContent={item.messageContent} time={item.time} state={item.state} />
            ))
         }
      </div>
   );
}