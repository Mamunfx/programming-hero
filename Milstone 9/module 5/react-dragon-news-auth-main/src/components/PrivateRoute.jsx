
import { Navigate } from 'react-router-dom';
import { AuthContext } from './Authprovider/Authprovider';
import Loading from './Loading';
import { useContext } from 'react';

const PrivateRoute = ({Children}) => {
    const {user,loading}=useContext(AuthContext);
    
    if (user) {
        return Children
    }
    return <Navigate to={"/AuthLayout"}></Navigate>
};

export default PrivateRoute;