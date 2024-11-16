import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import auth from './../../firebase.config';


export const AuthContext = createContext(null);
const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);
    const creatAccount=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    };
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };
    const AuthObj={
        creatAccount,
        signInUser,
    }
    return (
        <AuthContext.Provider value={AuthObj}>
        {children}
       </AuthContext.Provider>
    );
};

export default Authprovider;