interface IInputProps {
   type: string;
   placeholder: string;
   classes?: string;
   register: any
   name: string;
   message?: string;
}

interface IButtonProps {
   title: string;
   className?: string;
   type?: 'submit' | 'reset' | 'button' | undefined;
   handleClick?: () => void | null;
}

interface IContactCardProps {
   name?: string | null;
   avatar?: string | null;
   description?: string | null;
}


interface IUser {
   userName?: string;
   userEmail?: string;
   description?: string;
   avatarUrl?: string;
   accessToken?: token;
   userId?: string;
   creationDate?: string;
   updatedDate?: string;
   isLogged?: boolean;
   status?: string;
   message?: string;
   userName?: string;
   userEmail?: string;
   description?: string;
   avatarUrl?: string;
   accessToken?: token;
   userId?: string;
   creationDate?: string;
}