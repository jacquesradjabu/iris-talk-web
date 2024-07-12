import { useState, ReactNode } from 'react';
import { AuthContext } from '@/contexts/authContext';

export default function AuthProvider({ children }: { children: ReactNode }) {
    const [isLogged, setIsLogged] = useState(true);
    const [status, setStatus] = useState('');
    const [message, setMessage] = useState('');
    const [accessToken, setAccessToken] = useState('');
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userId, setUserId] = useState('');
    const [updatedDate, setUpdatedDate] = useState('');
    const [creationDate, setCreationDate] = useState('');
    return (
        <AuthContext.Provider value={{
            isLogged,
            status,
            message,
            accessToken,
            userName,
            userId,
            userEmail,
            creationDate,
            updatedDate,
            setIsLogged
        }}>
            {children}
        </AuthContext.Provider>
    )
}