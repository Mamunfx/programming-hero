import Aunt from "./Aunt";
import Dad from "./Dad";
import { createContext } from "react";

export const AssetContext = createContext('gold');
function Grandpa() {

    return (
        <div className="border-2 border-yellow-400 rounded-lg">
            <h1>Grandpa</h1>
            <div className="border-2 border-yellow-400 p-8 flex justify-evenly rounded-lg">

                <Dad></Dad>
                <Aunt></Aunt>
            </div>
        </div>
    );
}

export default Grandpa;