import { AssetContext } from "./Grandpa";
import { useContext } from "react";
const Me = () => {
    const gift = useContext(AssetContext);
    return (
        <div className="border-2 border-yellow-400 p-12 rounded-lg">
            <h1>Myself</h1>
            <p>{gift}</p>
        </div>
    );
};

export default Me;