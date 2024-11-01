import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();

    const {name, website} = user;

    const navigate = useNavigate();
    const handleGoback=()=>{
        navigate(-1)
    }
    return (
        <div>
            <h2>Details about user: {name}</h2>
            <p>Website: {website}</p>
            <button onClick={handleGoback}>Go back</button>
        </div>
    );
};

export default UserDetails;