import axiosInstance from "./axios.config";
import axios from 'axios';
// send a message

export async function sendMessage(
   senderId: string,
   messageId: string,
   messageContent: string
): Promise<void> {
   const smsToSend = await axios.post('url', {
      senderId, messageId, messageContent
   });
   const resp = await smsToSend.data;
   return resp;
}

export async function getTalk(
   sendId: string,
   receiverId: string
): Promise<void> {
   const allTalks = await axios.get('url', {});
   const result = await allTalks.data;
   return result;
}