/**
 * @license
 * Copyright 2024 Birusha Ndegeya, sofia and Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { useState, ReactNode } from 'react';
import { AuthContext } from '@/contexts/authContext';

export default function AuthProvider({ children }: { children: ReactNode }) {
    const [accessToken, setAccessToken] = useState('');
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userId, setUserId] = useState('');
    const [created, setCreated] = useState('');
    const [userAvatarURL, setUserAvatarURL] = useState('');
    const [userDescription, setUserDescription] = useState('');
    return (
        <AuthContext.Provider value={{
            accessToken: accessToken,
            setAccessToken: setAccessToken,
            userName: userName,
            setUserName: setUserName,
            userEmail: userEmail,
            setUserEmail: setUserEmail,
            userId: userId,
            setUserId: setUserId,
            created: created,
            setCreated: setCreated,
            userAvatarURL: userAvatarURL,
            setUserAvatarURL: setUserAvatarURL,
            userDescription: userDescription,
            setUserDescription: setUserDescription,
        }}>
            {children}
        </AuthContext.Provider>
    )
}