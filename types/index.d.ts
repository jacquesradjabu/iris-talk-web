interface IInputProps {
   type?: string;
   label: string;
   placeholder?: string;
   register: any
   refLabel?: string;
   message?: string;
}

interface IUser {
   followers: { name: string; description: string }[];
   following: { name: string; description: string }[];
}


interface IAuthContext {
   userName: string;
   userEmail: string;
   description?: string;
   avatarUrl?: string;
   accessToken: token;
   userId: string;
   creationDate: string;
   updatedDate?: string;
   isLogged: boolean;
   status: string;
   message: string;
      userName: string;
   userEmail: string;
   description: string;
   avatarUrl: string;
   accessToken: token;
   userId: string;
   creationDate: string;
   updatedDate: string;
   setIsLogged: Dispatch<SetStateAction<boolean>>;
}