import { useState } from "react"

export default function StateManage() {
    const [totalCount,CountFunction]=useState(0)
    function add() {
        const newtotalCount =totalCount+1;
        return CountFunction(newtotalCount)
    }
    function remove() {
        const newtotalCount =totalCount-1;
        return CountFunction(newtotalCount)
    }

    return(
        <div>
            <h1>Total number of count : {totalCount}</h1>
            <button onClick={add}>ADD</button>
            <button onClick={remove}>REMOVE</button>
        </div>
    )
}