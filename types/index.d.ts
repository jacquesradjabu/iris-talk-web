interface IInputProps {
   type?: string;
   label: string;
   placeholder?: string;
   register: any
   refLabel?: string;
   message?: string;
   className?: string;
}

interface IAuthContext {
   accessToken: string;
   setAccessToken: Dispatch<SetStateAction<string>>;
   userName: string;
   setUserName: Dispatch<SetStateAction<string>>;
   userEmail: string;
   setUserEmail: Dispatch<SetStateAction<string>>;
   userId: string;
   setUserId: Dispatch<SetStateAction<string>>;
   created: string;
   setCreated: Dispatch<SetStateAction<string>>;
   userAvatarURL: string;
   setUserAvatarURL: Dispatch<SetStateAction<string>>;
   userDescription: string;
   setUserDescription: Dispatch<SetStateAction<string>>;
}