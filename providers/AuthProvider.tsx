import { useState, ReactNode } from 'react';
import { AuthContext } from '@/contexts/authContext';

export default function AuthProvider({ children }: { children: ReactNode }) {
    return (
        <AuthContext.Provider value={{ isLogged: true }}>
            {children}
        </AuthContext.Provider>
    )
}