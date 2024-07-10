import { createContext } from 'react';

type AuthContext = { 
    isLogged: boolean;
}
export const AuthContext = createContext<AuthContext>(null!);