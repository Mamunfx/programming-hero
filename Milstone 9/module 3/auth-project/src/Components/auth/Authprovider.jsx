import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './../../firebase.init';

export const AuthContext = createContext(null);
const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);
    const creatAccount=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    };
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };

    const singout=(email,password)=>{
        return signOut(auth,email,password)
    };
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current User', currentUser);
            setUser(currentUser);
        })
        return () => {
            unSubscribe();
        }

    }, [])
    const obj={
        creatAccount,
        signInUser,
        user,
        singout
    }
    return (
       <AuthContext.Provider value={obj}>
        {children}
       </AuthContext.Provider>
    );
};

export default Authprovider;