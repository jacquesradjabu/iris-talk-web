interface IInputProps {
   type?: string;
   label: string;
   placeholder?: string;
   register: any
   refLabel?: string;
   message?: string;
   className?: string;
}

interface IUser {
   userId: string;
   userName: string;
   userEmail: string;
   created: string;
   updated: string;
   userAvatarURL: null | string;
   userDescription: null | string;
}

interface IUserRegister {
   userName: string;
   userEmail: string;
   userPassword: string;
}

interface IUserLogin {
   userName: string;
   userPassword: string;
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