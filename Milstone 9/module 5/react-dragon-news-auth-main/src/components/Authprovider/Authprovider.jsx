import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import auth from './../../firebase.config';


export const AuthContext = createContext(null);
const Authprovider = ({children}) => {
    const [loading,setloading]=useState(true);
    const [user, setUser] = useState(null);
    const creatAccount=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    };
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };
    
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentuser)=>{
            setUser(currentuser);
            setloading(flase);
        });
        return()=>{
            unsubscribe();
        };
    },[]);

    const singout=(email,password)=>{
        return signOut(auth,email,password)
    };
    const AuthObj={
        creatAccount,
        signInUser,
        user,
        singout,
        loading
    }
    return (
        <AuthContext.Provider value={AuthObj}>
        {children}
       </AuthContext.Provider>
    );
};

export default Authprovider;