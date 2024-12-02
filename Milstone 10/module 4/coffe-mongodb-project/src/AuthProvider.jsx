import React, { createContext, useState } from 'react';
import { auth } from './../firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null);
    const [loading,setLoading]=useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
   const userinfo={
    createUser,
   }
    return (
        <AuthContext.Provider value={userinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;