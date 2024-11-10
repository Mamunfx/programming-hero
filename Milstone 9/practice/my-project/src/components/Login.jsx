import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase.init";
const Login = () => {
    const provider = new GoogleAuthProvider();

    const handleClick=()=>{
        signInWithPopup(auth,provider)
        .then(result=>{
            console.log(result.user
            );
            
        })
        .catch(error=>console.log('error',error))
    }
    return (
        <div>
            <button onClick={handleClick}>This is button</button>
        </div>
    );
};

export default Login;