import { useEffect, useState } from "react";
import IndividualObj from "./IndividualObj";

export default function UseEffect() {
    const [total , showData]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>showData(data))
    },[])
    return(
        <div>
            <h1>Length of the oject is : {total.length}</h1>
            {
                total.map(indivuji => <IndividualObj indivuji={indivuji} ></IndividualObj>)
            }
        </div>
    )
}
