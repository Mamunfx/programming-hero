import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h1>This is the home page</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;