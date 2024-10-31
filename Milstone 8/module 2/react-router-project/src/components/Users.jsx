import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
    const result = useLoaderData();
    return (
        <div>
            <h1>USer lenght : {result.length}</h1>
            {
                 result.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users;