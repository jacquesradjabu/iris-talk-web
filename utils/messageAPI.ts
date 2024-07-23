import axiosInstance from "./axios.config";

// send a message

export async function sendMessage(
   senderId: string,
   messageId: string,
   messageContent: string
): Promise<void> {
   const smsToSend = await axiosInstance.post('url', {
      senderId, messageId, messageContent
   });
   const resp = await smsToSend.data;
   return resp;
}

export async function getTalk(
   sendId: string,
   receiverId: string
): Promise<void> {
   const allTalks = await axiosInstance.get('url', {});
   const result = await allTalks.data;
   return result;
}