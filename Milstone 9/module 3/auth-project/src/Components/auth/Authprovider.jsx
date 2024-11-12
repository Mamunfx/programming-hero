import React, { createContext } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../../firebase.init';
export const AuthContext = createContext(null);
const Authprovider = ({children}) => {

    const creatAccount=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const obj={

        creatAccount,
    }
    return (
       <AuthContext.Provider value={obj}>
        {children}
       </AuthContext.Provider>
    );
};

export default Authprovider;