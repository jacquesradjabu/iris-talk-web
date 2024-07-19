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
   currentUserToken: string;
   setCurrentUserToken: Dispatch<SetStateAction<string>>;
   currentUser: any;
   setCurrentUser: Dispatch<SetStateAction<never[]>>;
}