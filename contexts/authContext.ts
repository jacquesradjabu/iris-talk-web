import { createContext } from 'react';

export const AuthContext = createContext<IAuthContext>({
    isLogged: false || true,
    status: '',
    message: ``,
    accessToken: '',
    userName: '',
    userId: '',
    userEmail: '',
    creationDate: '',
    updatedDate: '',
    setIsLogged: null,
});